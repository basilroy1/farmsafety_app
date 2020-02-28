import React, { Component } from "react";
import "./welcome.css";
import { MdPerson } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
//import Loader from "react-loader-spinner";
import { Button, Nav, Navbar, ButtonToolbar } from "react-bootstrap";
import Tooltip from "@material-ui/core/Tooltip";
import Drawer from "@material-ui/core/Drawer";
import Zoom from "@material-ui/core/Zoom";
import Quiz from "../quiz/quiz";
import fire from "../../config/fire";
import UserProfile from "../quiz/userProfile";
import Articles from "./articles";
import Articles2 from "./articles2";
import Articles3 from "./articles3";
import Articles4 from "./articles4";
import Articles5 from "./articles5";
import { Alert } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import InstructionsModal from "./instructionsmodal";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//import InboxIcon from "@material-ui/icons/MoveToInbox";
//import MailIcon from "@material-ui/icons/Mail";
import SideProfileDrawer from "../home/sideProfileDrawer";
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewquiz: false,
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
    this.setState({
      level1: true,
      level2: false,
      level3: false,
      level4: false,
      level5: false,
      disabled: false,
      fakelevel: 0
    });
  };

  changeToquiz2 = () => {
    this.setState({
      level1: false,
      level2: true,
      level3: false,
      level4: false,
      level5: false,
      disabled: false,
      fakelevel: 1
    });
  };

  changeToquiz3 = () => {
    this.setState({
      level1: false,
      level2: false,
      level3: true,
      level4: false,
      level5: false,
      disabled: false,
      fakelevel: 2
    });
  };
  changeToquiz4 = () => {
    this.setState({
      level1: false,
      level2: false,
      level3: false,
      level4: true,
      level5: false,
      disabled: false,
      fakelevel: 3
    });
  };
  changeToquiz5 = () => {
    this.setState({
      level1: false,
      level2: false,
      level3: false,
      level4: false,
      level5: true,
      disabled: false,
      fakelevel: 4
    });
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
    //checks if user is already logged in 0n browser
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
      viewProfile: !this.state.viewProfile
    });
  };

  logout = e => {
    e.preventDefault();
    fire.auth().signOut();
    console.log("Logged out");
  };
  hideQuizButton = () => {
    this.setState({
      hideQuiz: false
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
    console.log("clicked rookie");
  };
  clickedstudent = () => {
    console.log("clicked student");
  };
  clickedinterm = () => {
    console.log("clicked interm");
  };
  clickedexpert = () => {
    console.log("clicked expert");
  };
  clickedmaster = () => {
    console.log("clicked master");
  };

  handleDisableValue = (scores, limitedQuestion) => {
    if (scores >= Math.round(limitedQuestion * 0.5) && this.state.level < 4) {
      console.log("entered level up " + Math.round(limitedQuestion * 0.5));
      this.setState({
        level: this.state.level + 1
      });
    }
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
      this.state.level > 4
    ) {
      console.log("entered max level " + Math.round(limitedQuestion * 0.5));
      this.setState({
        quizCompleted: true
      });
    }
    console.log("current level " + this.state.level);
  };
  loadNextfromChild = data => {
    //if(this.state.)
    if (this.state.userLevel2) {
      this.setState({
        article2: data
      });
    } else if (this.state.userLevel3) {
      this.setState({
        article3: data
      });
    }
  };
  rankData = () => {
    this.state.people.map(person => {
      this.setState({
        level: person.rank
      });
      console.log("Rank " + this.state.level);
    });
    /*
    this.setState({
      level: this.state.people[0].rank
    });
    console.log(this.state.level);
  */
  };

  modalInstruction = () => {
    this.setState({
      viewModal: !this.state.viewModal
    });
  };
  closeModal = () => {
    this.setState({ viewModal: false });
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
        <div>
          <Navbar id="navbar" bg="primary" variant="dark">
            <Nav className="mr-auto" style={{ fontSize: 25 }}>
              Welcome
              <ButtonToolbar className="levelButtons">
                <Button
                  className="btnLevel"
                  onClick={() => {
                    this.clickedrookie();
                    this.changeToquiz1();
                    this.articelState();
                    this.checkQuiznLevel();
                    //       this.hideQuizButton();
                  }}
                >
                  Rookie
                </Button>{" "}
                <Button
                  className="btnLevel"
                  disabled={this.state.level < STUDENT}
                  onClick={() => {
                    this.clickedstudent();
                    this.articelState();
                    this.changeToquiz2();
                    this.checkQuiznLevel();

                    //    this.hideQuizButton();
                  }}
                >
                  Student
                </Button>{" "}
                <Button
                  className="btnLevel"
                  disabled={this.state.level < INTERM}
                  onClick={() => {
                    this.clickedinterm();
                    this.changeToquiz3();
                    this.articelState();
                    this.checkQuiznLevel();
                    //    this.hideQuizButton();
                  }}
                >
                  Intermediate
                </Button>{" "}
                <Button
                  className="btnLevel"
                  disabled={this.state.level < EXPERT}
                  onClick={() => {
                    this.changeToquiz4();
                    this.articelState();
                    this.clickedexpert();
                    this.checkQuiznLevel();
                    //    this.hideQuizButton();
                  }}
                >
                  Expert
                </Button>{" "}
                <Button
                  className="btnLevel"
                  disabled={this.state.level < MASTER}
                  onClick={() => {
                    this.changeToquiz5();
                    this.clickedmaster();
                    this.articelState();
                    this.checkQuiznLevel();
                    //      this.hideQuizButton();
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
                <Button onClick={() => this.setState({ viewModal: true })}>
                  <Nav>Instructions</Nav>
                </Button>
              </Tooltip>
            </ButtonToolbar>
            <Tooltip
              TransitionComponent={Zoom}
              title="Log out and go to Home"
              arrow
            >
              <Button onClick={this.logout}>
                <Nav>
                  Logout <FiLogOut />
                </Nav>
              </Button>
            </Tooltip>
            <Tooltip
              TransitionComponent={Zoom}
              title="View Your Profile Info"
              arrow
            >
              <Button onClick={this.changetoProfile}>
                <Nav>
                  Profile <MdPerson />
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

        <div>
          <Alert variant="primary">Test!</Alert>
        </div>
        {this.state.article1 ? <Articles /> : null}
        {this.state.article2 ? <Articles2 /> : null}
        {this.state.article3 ? <Articles3 /> : null}
        {this.state.article4 ? <Articles4 /> : null}
        {this.state.article5 ? <Articles5 /> : null}
        {this.state.viewModal ? (
          <InstructionsModal
            isOpen={this.state.viewModal}
            onHide={this.closeModal}
          />
        ) : null}
        {
          <div>
            {this.state.viewProfile ? (
              <SideProfileDrawer data={this.state.renderData} />
            ) : null}
          </div>
        }
        {/*{this.state.hideQuiz ? (*/}
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
        {/*  ) : null} */}
        {this.state.viewquiz ? (
          <Quiz
            time={this.state.date.toLocaleTimeString()}
            quizFinished={this.state.quizCompleted}
            tryAgain={this.hideQuizButton}
            tryAgain2={this.changetoQuiz}
            articelVal={this.articelState}
            rankValue={this.state.level}
            loadNextfrom={this.loadNextfromChild}
            handleDisableValue={this.handleDisableValue}
            userLevel1={this.state.level1}
            userLevel2={this.state.level2}
            userLevel3={this.state.level3}
            userLevel4={this.state.level4}
            userLevel5={this.state.level5}
          />
        ) : null}
      </div>
    );
  }
}
export default Welcome;
