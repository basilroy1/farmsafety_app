import React, { Component } from "react";
import "./welcome.css";
import { FiLogOut } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa";
import {
  Button,
  Nav,
  Navbar,
  ButtonToolbar,
  DropdownButton
} from "react-bootstrap";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import Quiz from "../quiz/quiz";
import fire from "../../config/fire";
import UserProfile from "../quiz/userProfile";
import Articles from "./articles";
import Articles2 from "./articles2";
import Articles3 from "./articles3"; //imported all the neccessary components,Library,API's
import Articles4 from "./articles4";
import Articles5 from "./articles5";
import InstructionsModal from "./instructionsmodal";
import SideProfileDrawer from "../home/sideProfileDrawer";
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewquiz: false,
      people: [],
      user: {},
      disabled: true,
      date: new Date(),
      quizCompleted: false,
      level: 0, //Initialize all the state variables
      fakelevel: 0,
      article1: true,
      viewModal: false,
      article2: false,
      article3: false,
      article4: false,
      article5: false,
      hideQuiz: true,
      viewProfile: false
    };
  }

  changeToquiz1 = () => {
    this.setState(
      {
        level1: true,
        level2: false, //function make quiz1 true
        level3: false,
        level4: false,
        level5: false,
        disabled: false,
        fakelevel: 0
      },
      () => {
        this.articelState();
        this.clickedrookie();
      }
    );
  };

  changeToquiz2 = () => {
    this.setState(
      {
        level1: false,
        level2: true,
        level3: false,
        level4: false, //function make quiz2 true
        level5: false,
        disabled: false,
        fakelevel: 1
      },
      () => {
        this.articelState();
        this.clickedstudent();
      }
    );
  };

  changeToquiz3 = () => {
    this.setState(
      {
        level1: false,
        level2: false,
        level3: true, //function make quiz3 true
        level4: false,
        level5: false,
        disabled: false,
        fakelevel: 2
      },
      () => {
        this.articelState();
        this.clickedinterm();
      }
    );
  };
  changeToquiz4 = () => {
    this.setState(
      {
        level1: false,
        level2: false,
        level3: false,
        level4: true, //function make quiz4 true
        level5: false,
        disabled: false,
        fakelevel: 3
      },
      () => {
        this.articelState();
        this.clickedexpert();
      }
    );
  };
  changeToquiz5 = () => {
    this.setState(
      {
        level1: false,
        level2: false,
        level3: false, //function make quiz5 true
        level4: false,
        level5: true,
        disabled: false,
        fakelevel: 4
      },
      () => {
        this.articelState();
        this.clickedmaster();
      }
    );
  };
  checkQuiznLevel = () => {
    if (
      (this.state.viewquiz && this.state.level1) ||
      (this.state.viewquiz && this.state.level2) ||
      (this.state.viewquiz && this.state.level3) ||
      (this.state.viewquiz && this.state.level4) ||
      (this.state.viewquiz && this.state.level5)
    ) {
      this.setState({
        viewquiz: false //checks if viewing quiz or any 5 levels are true then make view quiz false.
      });
    }
  };
  componentDidMount() {
    this.authListener();
    this.retrieveData();
    this.timerID = setInterval(() => this.tick(), 1000); //retreival data from database and chekcks if any user is logged in already.
    console.log("Data mounted");
  }
  componentWillUnmount() {
    clearInterval(this.timerID); //to get the time for lastlogged in
  }

  tick() {
    this.setState({
      //to get the time for lastlogged in
      date: new Date()
    });
  }

  authListener = () => {
    //checks if user is already logged in on browser
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user
        });
      } else {
        this.setState({ user: null });
      }
      return user;
    });
  };
  retrieveData = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        var ref = fire
          .database()
          .ref("data")
          .limitToLast(1);
        //takes the last data in DB

        var userUID = fire.auth().currentUser.uid;
        var query = ref.orderByChild("ID").equalTo(userUID); //retrieves data about only the current logged in user
        console.log(userUID);
        query.on("value", snapshot => {
          let currentState = this.state.people;

          const currentUser = snapshot.val();
          for (let i in currentUser) {
            currentState.push({
              email: currentUser[i].UserEmail,
              UserAnswer: currentUser[i].UserAnswer, //looping through the data from the database and storing it in an array.
              Questions: currentUser[i].Question,
              id: currentUser[i].ID,
              Score: currentUser[i].Score,
              levelRook: currentUser[i].UserLevel,
              levelStudent: currentUser[i].UserLevelStudent,
              levelIntermediate: currentUser[i].UserLevelIntermediate,
              levelExpert: currentUser[i].UserLevelExpert,
              levelMaster: currentUser[i].UserLevelMaster,
              rank: currentUser[i].RankValue,
              lastLogin: currentUser[i].LastLogin
            });
          }
          console.log(currentState);
          this.rankData(); //setting rank value from DB

          this.setState({
            people: currentState //pushes the data from database to an array so it can be accesed
          });
        });
      } else {
        console.log("no user");
      }
    });
  };

  changetoQuiz = () => {
    this.setState({
      viewquiz: !this.state.viewquiz,
      article1: false,
      article2: false,
      article3: false, //when the Quiz is viewed all 5 articels components are hidden
      article4: false,
      article5: false
    });
  };
  changetoProfile = () => {
    this.setState({
      viewProfile: true //used for viewing profile info, the state is set to true when triggered
    });
  };

  logout = e => {
    e.preventDefault();
    fire.auth().signOut(); //logs user out from the browser to the home page
    console.log("Logged out");
  };
  hideQuizButton = data => {
    if (this.state.level === 0) {
      this.setState({
        article1: data //here we check if the rank is rookie then we display the rookie article ,for trying again the quiz after failing
      });
    } else if (this.state.level === 1) {
      this.setState({
        //here we check if the rank is student then we display the student article,for trying again the quiz after failing
        article2: data
      });
    } else if (this.state.level === 2) {
      this.setState({
        //here we check if the rank is intermediate then we display the intermediate article,for trying again the quiz after failing
        article3: data
      });
    } else if (this.state.level === 3) {
      this.setState({
        article4: data //here we check if the rank is expert then we display the expert article,for trying again the quiz after failing
      });
    } else if (this.state.level >= 4) {
      this.setState({
        article5: data //here we check if the rank is master or greater then we display the master article,for trying again the quiz after failing
      });
    }

    this.setState({
      hideQuiz: data,
      viewquiz: !data
    });
  };
  hideQuizDisplayArticle = data => {
    if (this.state.level === 0) {
      this.setState({
        //if level is rookie then view article1 if the user decides to stop taking the quiz ie: they close the quiz.
        article1: !data
      });
    } else if (this.state.level === 1) {
      this.setState({
        //if level is student then view article2 if the user decides to stop taking the quiz ie: they close the quiz.
        article2: !data
      });
    } else if (this.state.level === 2) {
      this.setState({
        //if level is intermediate then view article3 if the user decides to stop taking the quiz ie: they close the quiz.
        article3: !data
      });
    } else if (this.state.level === 3) {
      //if level is expert then view article4 if the user decides to stop taking the quiz ie: they close the quiz.
      this.setState({
        article4: !data
      });
    } else if (this.state.level >= 4) {
      //if level is master or greater then view article5 if the user decides to stop taking the quiz ie: they close the quiz.
      this.setState({
        article5: !data
      });
    }
    this.setState({
      viewquiz: data,
      viewProfile: data,
      hideQuiz: !data
    });
  };
  articelState = () => {
    if (this.state.level1) {
      this.setState({
        article1: true,
        article2: false,
        article3: false, // if level is rookie then view article1
        article4: false,
        article5: false
      });
    } else if (this.state.level2) {
      this.setState({
        article1: false,
        article2: true,
        article3: false,
        article4: false, // if level is student then view article2
        article5: false
      });
    } else if (this.state.level3) {
      this.setState({
        article1: false,
        article2: false,
        article3: true, // if level is intermediate then view article3
        article4: false,
        article5: false
      });
    } else if (this.state.level4) {
      this.setState({
        article1: false,
        article2: false,
        article3: false,
        article4: true, // if level is expert then view article2
        article5: false
      });
    } else if (this.state.level5) {
      this.setState({
        article1: false,
        article2: false,
        article3: false, // if level is master then view article5
        article4: false,
        article5: true
      });
    }
  };

  clickedrookie = () => {
    console.log("clicked rookie and fake level is " + this.state.fakelevel);
  };
  clickedstudent = () => {
    console.log("clicked student and fake level is " + this.state.fakelevel);
  };
  clickedinterm = () => {
    console.log("clicked interm and fake level is " + this.state.fakelevel);
  }; //// loging the fakelevel value for testing for each level
  clickedexpert = () => {
    console.log("clicked expert and fake level is " + this.state.fakelevel);
  };
  clickedmaster = () => {
    console.log("clicked master and fake level is " + this.state.fakelevel);
  };

  handleDisableValue = (scores, limitedQuestion) => {
    if (scores >= Math.round(limitedQuestion * 0.5) && this.state.level >= 4) {
      console.log("entered max level " + Math.round(limitedQuestion * 0.5));
      this.setState(
        {
          quizCompleted: true
        },
        () => {
          //checking if the score is more than 50% and quiz level is master then the quiz is completed
          console.log("quiz completed state entered");
        }
      );
    } else {
      if (
        scores >= Math.round(limitedQuestion * 0.5) &&
        this.state.fakelevel < this.state.level
      ) {
        console.log("entered fakelevel " + Math.round(limitedQuestion * 0.5));
        this.setState({
          level: this.state.level
          /*checking if scores is greater than 50% and fake level is less than level meaning the user is 
           attemping on old level therefrore dont increase level if they have passed*/
        });
      } else if (
        scores >= Math.round(limitedQuestion * 0.5) &&
        this.state.level <= 4
      ) {
        console.log("entered level up " + Math.round(limitedQuestion * 0.5));

        this.setState(
          /*ckeck if the rank is less than or equal to master and the user passes the quiz then the level is incremented on to new level*/
          {
            level: this.state.level + 1
          },
          () => {
            console.log("entered level up last " + this.state.level);
            console.log(this.state);
          }
        );
      }

      console.log("end of else statement");
    }
    /*if (
      scores >= Math.round(limitedQuestion * 0.5) &&
      this.state.fakelevel < this.state.level /////here is a problem when at max level n when level goes to 5
    ) {
      console.log("entered fakelevel " + Math.round(limitedQuestion * 0.5));
      this.setState({
        level: this.state.level
      });
    } else if (
      scores >= Math.round(limitedQuestion * 0.5) &&
      this.state.level < 4
    ) {
      console.log("entered level up " + Math.round(limitedQuestion * 0.5));
      this.setState({
        level: this.state.level + 1
      });
    } else if (
      scores >= Math.round(limitedQuestion * 0.5) &&
      this.state.level > 4
    ) {
      console.log("entered max level " + Math.round(limitedQuestion * 0.5));
      this.setState(
        {
          quizCompleted: true
        },
        () => {
          console.log("quiz completed state entered", this.state);
        }
      );
    }
     console.log("quiz completed state entered", this.state);
    */
    console.log("current level " + this.state.level);
  };

  rankData = () => {
    this.state.people.map(person => {
      this.setState({
        level: person.rank ///retrieves the rank from the database and assigns it to the current value
      });
      console.log("Rank " + this.state.level);
    });
  };

  modalInstruction = data => {
    this.setState({
      viewModal: data, // used for viewing the instructions page, we hide the quiz and articles components when the instruction page is opened.
      hideQuiz: !data,
      viewquiz: false
    });
  };

  render() {
    const STUDENT = 1;
    const INTERM = 2;
    const EXPERT = 3; //these are the values used for level up logic for disabling n enabling the buttons for user.
    const MASTER = 4;

    let renderData = this.state.people.map((person, index) => {
      return (
        <div id="userProfileComp" key={index}>
          {this.state.viewProfile ? (
            <UserProfile
              className="userProfile"
              levelRook={person.levelRook}
              levelStudent={person.levelStudent}
              levelIntermediate={person.levelIntermediate}
              levelExpert={person.levelExpert} //rendering the data from database and passing as props to the User Profile component, this is weher all the profile info is displayed when the user clicks the profile button
              levelMaster={person.levelMaster}
              score={person.Score}
              question={person.Questions}
              email={person.email}
              time={person.lastLogin}
            />
          ) : null}
        </div>
      );
    });
    return (
      <div>
        <body>
          <div>
            <Navbar id="navbar" bg="primary" variant="dark">
              <Nav className="mr-auto" style={{ fontSize: 25 }}>
                Welcome
                <ButtonToolbar className="levelButtons">
                  {" "}
                  <Button
                    className="btnLevel"
                    onClick={() => {
                      this.changeToquiz1();
                      this.checkQuiznLevel();
                    }}
                  >
                    Rookie
                  </Button>{" "}
                  <Button
                    className="btnLevel"
                    disabled={this.state.level < STUDENT} //here is where the disabling and enalbing of level system is done for Student using the rank level from database
                    onClick={() => {
                      this.changeToquiz2();
                      this.checkQuiznLevel();
                    }}
                  >
                    Student
                  </Button>{" "}
                  <Button
                    className="btnLevel"
                    disabled={this.state.level < INTERM} //here is where the disabling and enalbing of level system is done for Intermediate using the rank level from database
                    onClick={() => {
                      this.changeToquiz3();
                      this.checkQuiznLevel();
                    }}
                  >
                    Intermediate
                  </Button>{" "}
                  <Button
                    className="btnLevel"
                    disabled={this.state.level < EXPERT} //here is where the disabling and enalbing of level system is done for Expert using the rank level from database
                    onClick={() => {
                      this.changeToquiz4();
                      this.checkQuiznLevel();
                    }}
                  >
                    Expert
                  </Button>{" "}
                  <Button
                    className="btnLevel"
                    disabled={this.state.level < MASTER} //here is where the disabling and enalbing of level system is done for Master using the rank level from database
                    onClick={() => {
                      this.changeToquiz5();
                      this.checkQuiznLevel();
                    }}
                  >
                    Master
                  </Button>
                </ButtonToolbar>
              </Nav>
              <ButtonToolbar>
                {" "}
                <Tooltip
                  TransitionComponent={Zoom} //button for instructions page with Tool tip for hover effect
                  title="Guide on how the Quiz works"
                  arrow
                >
                  <Button onClick={this.modalInstruction}>
                    <Nav>
                      Instructions&ensp;
                      <FaBookOpen size={20} />
                    </Nav>
                  </Button>
                </Tooltip>
              </ButtonToolbar>

              <DropdownButton
                onClick={this.changetoProfile}
                title={"Profile"} //button for Profile page
              >
                {this.state.viewProfile ? (
                  <SideProfileDrawer
                    people={this.state.people}
                    viewprof={this.state.viewProfile}
                  />
                ) : null}
              </DropdownButton>

              <Tooltip
                TransitionComponent={Zoom} //button for Logout page with Tool tip for hover effect
                title="Log out and go to Home"
                arrow
              >
                <Button onClick={this.logout}>
                  <Nav>
                    Logout&ensp;
                    <FiLogOut size={20} />
                  </Nav>
                </Button>
              </Tooltip>
            </Navbar>
          </div>
          {this.state.hideQuiz ? (
            /* Here we check of the hideQuiz is true if its true we display the articles along with the Take Quiz button
             */
            <div id="innerBorder">
              {this.state.article1 ? <Articles /> : null}
              {this.state.article2 ? <Articles2 /> : null}
              {this.state.article3 ? <Articles3 /> : null}
              {this.state.article4 ? <Articles4 /> : null}
              {this.state.article5 ? <Articles5 /> : null}

              <Button
                id="takeQuizbtn"
                disabled={this.state.disabled} //Take Quiz Button
                onClick={() => {
                  this.changetoQuiz();
                  this.hideQuizButton();
                }}
              >
                Take the Quiz
              </Button>
            </div>
          ) : null}

          {this.state.viewModal ? (
            <InstructionsModal view={this.modalInstruction} /> //Instruction compoennt is called when the the state for viewModal is true from the earlier function above
          ) : null}

          {this.state.viewquiz ? (
            <Quiz
              stateHiddenQuiz={this.hideQuizButton}
              hideQuiznDisplay={this.hideQuizDisplayArticle}
              time={this.state.date.toLocaleTimeString()}
              quizFinished={this.state.quizCompleted}
              articelVal={this.articelState}
              rankValue={this.state.level}
              handleDisableValue={this.handleDisableValue} //passing all the these values as props to the child component Quiz so i can use these states to compute things in that component
              userLevel1={this.state.level1}
              userLevel2={this.state.level2}
              userLevel3={this.state.level3}
              userLevel4={this.state.level4}
              userLevel5={this.state.level5}
            />
          ) : null}
        </body>
      </div>
    );
  }
}
export default Welcome;
