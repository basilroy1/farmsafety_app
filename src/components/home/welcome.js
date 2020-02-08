import React, { Component } from "react";
import "./welcome.css";
import { MdPerson } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
//import { GiSwordsEmblem } from "react-icons/gi";
//import piechart from "../pictures/piechartMachinery.jpg";
import Loader from "react-loader-spinner";
import { Button, Nav, Navbar, ButtonToolbar } from "react-bootstrap";
//import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
//import Login from "../quiz/login";
//import Signup from "../quiz/signup";
import Quiz from "../quiz/quiz";
import fire from "../../config/fire";
import UserProfile from "../quiz/userProfile";
import Articles from "./articles";
import Articles2 from "./articles2";
import Articles3 from "./articles3";
import Articles4 from "./articles4";
import Articles5 from "./articles5";
import Test from "./test";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewquiz: false,
      people: [],
      dataHasLoaded: false,
      user: {},
      disabled: true,
      level: 0,
      article1: true,
      article2: false,
      article3: false,
      article4: false,
      article5: false,
      hideQuiz: false,
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
      disabled: false
    });
  };

  changeToquiz2 = () => {
    this.setState({
      level1: false,
      level2: true,
      level3: false,
      level4: false,
      level5: false,
      disabled: false
      //  disabledStudent: false
    });
  };

  changeToquiz3 = () => {
    this.setState({
      level1: false,
      level2: false,
      level3: true,
      level4: false,
      level5: false,
      disabled: false
      // disabledInterm: false
    });
  };
  changeToquiz4 = () => {
    this.setState({
      level1: false,
      level2: false,
      level3: false,
      level4: true,
      level5: false,
      disabled: false
      //   disabledExpert: false
    });
  };
  changeToquiz5 = () => {
    this.setState({
      level1: false,
      level2: false,
      level3: false,
      level4: false,
      level5: true,
      disabled: false
      //   disabledMaster: false
    });
  };

  componentDidMount() {
    this.authListener();
    this.retrieveData();
    console.log("Data loaded");
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
        query.once("value", snapshot => {
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
              rank: currentUser[i].RankValue
            });
          }
          // currentState.push(user);
          console.log(currentState);

          this.setState({
            people: currentState,
            dataHasLoaded: true
            //  level: rank
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
      hideQuiz: true
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
  /*you can map DB value to your javascript level values. for eg. if your DB has a level as "student" 
you can use state value to STUDENT constant which is 1. you can create a simple object like { "student": STUDENT, "master": MASTER, and other } and 
get current level and assign that to your state*/

  handleDisableValue = scores => {
    if (scores >= 5 && this.state.level < 4) {
      this.setState(prevState => ({
        level: this.state.level + 1
      }));
    }
    console.log(this.state.level);
  };
  // state = { rank: STUDENT };
  /*handleDisableValue = scores => {
    if (this.state.disabledRook && scores >= 5) {
      this.setState({
        disabledStudent: false
      });
    } else if (this.state.disabledStudent === false && scores >= 5) {
      this.setState({
        disabledInterm: false
      });
    } else if (this.state.disabledInterm === false && scores >= 5) {
      this.setState({
        disabledExpert: false
      });
    } else if (this.state.disabledExpert === false && scores >= 5) {
      this.setState({
        disabledMaster: false
      });
    } else if (this.state.disabledRook && scores < 5) {
      this.setState({
        disabledRook: true
      });
    } else if (this.state.disabledStudent && scores < 5) {
      this.setState({
        disabledStudent: true
      });
    } else if (this.state.disabledInterm && scores < 5) {
      this.setState({
        disabledInterm: true
      });
    } else if (this.state.disabledExpert && scores < 5) {
      this.setState({
        disabledExpert: true
      });
    } else if (this.state.disabledMaster && scores < 5) {
      this.setState({
        disabledMaster: true
      });
    }  
  };*/
  render() {
    const STUDENT = 1;
    const INTERM = 2;
    const EXPERT = 3;
    const MASTER = 4;
    let renderData = this.state.people.map((person, index) => {
      return (
        <div style={{ color: " black" }} key={index}>
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
              rank={person.rank}
            />
          ) : null}
        </div>
      );
      let res = this.state.rank;
    });
    //let res = this.state.rank;

    let loadingSpinner = <Loader id="loader" type="ThreeDots" color="red " />;

    return (
      <div>
        <div>
          <Navbar id="navbar" bg="primary" variant="dark">
            <Nav className="mr-auto" style={{ fontSize: 25 }}>
              Welcome
              <ButtonToolbar>
                <Button
                  onClick={() => {
                    this.changeToquiz1();
                    this.articelState();
                  }}
                >
                  Rookie
                </Button>
                <Button
                  disabled={this.state.level < STUDENT}
                  onClick={() => {
                    this.articelState();
                    this.changeToquiz2();
                  }}
                >
                  Student
                </Button>
                <Button
                  disabled={this.state.level < INTERM}
                  onClick={() => {
                    this.changeToquiz3();
                    this.articelState();
                  }}
                >
                  Intermediate
                </Button>
                <Button
                  disabled={this.state.level < EXPERT}
                  onClick={() => {
                    this.changeToquiz4();
                    this.articelState();
                  }}
                >
                  Expert
                </Button>
                <Button
                  disabled={this.state.level < MASTER}
                  onClick={() => {
                    this.changeToquiz5();
                    this.articelState();
                  }}
                >
                  Master
                </Button>
              </ButtonToolbar>
            </Nav>
            <Button onClick={this.logout}>
              <Nav>
                Logout <FiLogOut />
              </Nav>
            </Button>
            <Button onClick={this.changetoProfile}>
              <Nav>
                Profile <MdPerson />
              </Nav>
            </Button>
          </Navbar>
        </div>
        {this.state.article1 ? <Articles /> : null}
        {this.state.article2 ? <Articles2 /> : null}
        {this.state.article3 ? <Articles3 /> : null}
        {this.state.article4 ? <Articles4 /> : null}
        {this.state.article5 ? <Articles5 /> : null}

        {<div>{this.state.dataHasLoaded ? renderData : loadingSpinner}</div>}

        <Button
          disabled={this.state.disabled}
          onClick={() => {
            this.changetoQuiz();
            this.hideQuizButton();
          }}
        >
          Take the Quiz
        </Button>

        {this.state.viewquiz ? (
          <Quiz
            rankValue={this.state.level}
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
