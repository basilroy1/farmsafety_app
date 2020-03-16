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
import Articles3 from "./articles3";
import Articles4 from "./articles4";
import Articles5 from "./articles5";
import InstructionsModal from "./instructionsmodal";
import SideProfileDrawer from "../home/sideProfileDrawer";
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewquiz: false,
      sidebarOpen: false,
      value1: false,
      value: 0,
      people: [],
      dataHasLoaded: false,
      user: {},
      disabled: true,
      date: new Date(),
      quizCompleted: false,
      level: 0,
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
        level2: false,
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
        level4: false,
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
        level3: true,
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
        level4: true,
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
        level3: false,
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
        viewquiz: false
      });
    }
  };
  componentDidMount() {
    this.authListener();
    this.retrieveData();
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("Data mounted");
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
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
              UserAnswer: currentUser[i].UserAnswer,
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
          // currentState.push(user);
          console.log(currentState);
          this.rankData(); //setting rank value from DB

          this.setState({
            people: currentState,
            dataHasLoaded: true
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
      article3: false,
      article4: false,
      article5: false
    });
  };
  changetoProfile = () => {
    this.setState({
      viewProfile: true
    });
  };

  logout = e => {
    e.preventDefault();
    fire.auth().signOut();
    console.log("Logged out");
  };
  hideQuizButton = data => {
    if (this.state.level === 0) {
      this.setState({
        article1: data
      });
    } else if (this.state.level === 1) {
      this.setState({
        article2: data
      });
    } else if (this.state.level === 2) {
      this.setState({
        article3: data
      });
    } else if (this.state.level === 3) {
      this.setState({
        article4: data
      });
    } else if (this.state.level >= 4) {
      this.setState({
        article5: data
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
        article1: !data
      });
    } else if (this.state.level === 1) {
      this.setState({
        article2: !data
      });
    } else if (this.state.level === 2) {
      this.setState({
        article3: !data
      });
    } else if (this.state.level === 3) {
      this.setState({
        article4: !data
      });
    } else if (this.state.level >= 4) {
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
        article3: false,
        article4: false,
        article5: false
      });
    } else if (this.state.level2) {
      this.setState({
        article1: false,
        article2: true,
        article3: false,
        article4: false,
        article5: false
      });
    } else if (this.state.level3) {
      this.setState({
        article1: false,
        article2: false,
        article3: true,
        article4: false,
        article5: false
      });
    } else if (this.state.level4) {
      this.setState({
        article1: false,
        article2: false,
        article3: false,
        article4: true,
        article5: false
      });
    } else if (this.state.level5) {
      this.setState({
        article1: false,
        article2: false,
        article3: false,
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
  };
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
        });
      } else if (
        scores >= Math.round(limitedQuestion * 0.5) &&
        this.state.level <= 4
      ) {
        console.log("entered level up " + Math.round(limitedQuestion * 0.5));

        this.setState(
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
        level: person.rank
      });
      console.log("Rank " + this.state.level);
    });
  };

  modalInstruction = data => {
    this.setState({
      viewModal: data,
      hideQuiz: !data,
      viewquiz: false
    });
  };

  render() {
    const STUDENT = 1;
    const INTERM = 2;
    const EXPERT = 3;
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
              levelExpert={person.levelExpert}
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

    // let loadingSpinner = <Loader id="loader" type="ThreeDots" color="red " />;
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
                    disabled={this.state.level < STUDENT}
                    onClick={() => {
                      this.changeToquiz2();
                      this.checkQuiznLevel();
                    }}
                  >
                    Student
                  </Button>{" "}
                  <Button
                    className="btnLevel"
                    disabled={this.state.level < INTERM}
                    onClick={() => {
                      this.changeToquiz3();
                      this.checkQuiznLevel();
                    }}
                  >
                    Intermediate
                  </Button>{" "}
                  <Button
                    className="btnLevel"
                    disabled={this.state.level < EXPERT}
                    onClick={() => {
                      this.changeToquiz4();
                      this.checkQuiznLevel();
                    }}
                  >
                    Expert
                  </Button>{" "}
                  <Button
                    className="btnLevel"
                    disabled={this.state.level < MASTER}
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
                  TransitionComponent={Zoom}
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
              <Tooltip
                TransitionComponent={Zoom}
                title="View Profile info"
                arrow
              >
                <DropdownButton
                  onClick={this.changetoProfile}
                  title={"Profile"}
                >
                  {this.state.viewProfile ? (
                    <SideProfileDrawer
                      people={this.state.people}
                      viewprof={this.state.viewProfile}
                    />
                  ) : null}
                </DropdownButton>
              </Tooltip>
              <Tooltip
                TransitionComponent={Zoom}
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

          {/*    <div id="userProfileComp">
          {this.state.viewProfile ? (
            <UserProfile
              className="userProfile"
              levelRook={this.state.people[0].levelRook}
              levelStudent={this.state.people[0].levelStudent}
              levelIntermediate={this.state.people[0].levelIntermediate}
              levelExpert={this.state.people[0].levelExpert}
              levelMaster={this.state.people[0].levelMaster}
              score={this.state.people[0].Score}
              question={this.state.people[0].Questions}
              email={this.state.people[0].email}
            />
          ) : null}
        </div>
          */}

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
                disabled={this.state.disabled}
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
            <InstructionsModal view={this.modalInstruction} />
          ) : null}
          {
            <div>
              {/* {this.state.viewProfile ? renderData : null}*/}
              {/* {this.state.viewProfile ? (
                <Test
                  people={this.state.people}
                  viewprof={this.state.viewProfile}
                />
             ) : null}*/}
              {/*{this.state.viewProfile ? (
                <SideProfileDrawer
                  people={this.state.people}
                  viewprof={this.state.viewProfile}
                />
              ) : null}*/}
            </div>
          }

          {this.state.viewquiz ? (
            <Quiz
              stateHiddenQuiz={this.hideQuizButton}
              hideQuiznDisplay={this.hideQuizDisplayArticle}
              time={this.state.date.toLocaleTimeString()}
              quizFinished={this.state.quizCompleted}
              articelVal={this.articelState}
              rankValue={this.state.level}
              handleDisableValue={this.handleDisableValue}
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
