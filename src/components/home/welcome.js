import React, { Component } from "react";
import "./welcome.css";
import { MdPerson } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
//import { GiSwordsEmblem } from "react-icons/gi";
//import piechart from "../pictures/piechartMachinery.jpg";
import Loader from "react-loader-spinner";
import { Button, Nav, Navbar, ButtonToolbar, Card } from "react-bootstrap";
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
//import Modal from "react-bootstrap/Modal";
//import useState from "usestate";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
      hideQuiz: true,
      viewProfile: false
    };
  } //  this.disableCheckLevel();

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
      //level: 1
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
      // level: 2
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
      //     level: 3
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
      //    level: 4
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

  handleDisableValue = scores => {
    if (scores >= 5 && this.state.level < 4) {
      this.setState(prevState => ({
        level: this.state.level + 1
      }));
    }
  };
  quizInfo = () => {
    return (
      <div>
        <Card>click on the appropriate level to take the quiz</Card>
      </div>
    );
  };
  rankData = () => {
    this.state.people.map((person, index) => {
      this.setState({
        level: person.rank
      });
      console.log(this.state.level);
    });
  };
  modalInstruction = () => {};

  render() {
    const STUDENT = 1;
    const INTERM = 2;
    const EXPERT = 3;
    const MASTER = 4;
    let renderData = this.state.people.map((person, index) => {
      return (
        <div id="userProfileComp" style={{ color: " black" }} key={index}>
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
              //  rank={person.rank}
            />
          ) : null}
        </div>
      );
    });

    let loadingSpinner = <Loader id="loader" type="ThreeDots" color="red " />;

    return (
      <div>
        <div>
          <Navbar id="navbar" bg="primary" variant="dark">
            <Nav className="mr-auto" style={{ fontSize: 25 }}>
              Welcome
              <ButtonToolbar>
                <Button
                  className="btnLevel"
                  onClick={() => {
                    this.changeToquiz1();
                    this.articelState();
                    this.checkQuiznLevel();
                    //       this.hideQuizButton();
                  }}
                >
                  Rookie
                </Button>
                <Button
                  className="btnLevel"
                  disabled={this.state.level < STUDENT}
                  onClick={() => {
                    this.articelState();
                    this.changeToquiz2();
                    this.checkQuiznLevel();
                    //    this.hideQuizButton();
                  }}
                >
                  Student
                </Button>
                <Button
                  className="btnLevel"
                  disabled={this.state.level < INTERM}
                  onClick={() => {
                    this.changeToquiz3();
                    this.articelState();
                    this.checkQuiznLevel();
                    //    this.hideQuizButton();
                  }}
                >
                  Intermediate
                </Button>
                <Button
                  className="btnLevel"
                  disabled={this.state.level < EXPERT}
                  onClick={() => {
                    this.changeToquiz4();
                    this.articelState();
                    this.checkQuiznLevel();
                    //    this.hideQuizButton();
                  }}
                >
                  Expert
                </Button>
                <Button
                  className="btnLevel"
                  disabled={this.state.level < MASTER}
                  onClick={() => {
                    this.changeToquiz5();
                    this.articelState();
                    this.checkQuiznLevel();
                    //      this.hideQuizButton();
                  }}
                >
                  Master
                </Button>
              </ButtonToolbar>
            </Nav>

            <Button>
              <Nav>Instructions</Nav>
            </Button>
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
        {this.state.hideQuiz ? (
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
        ) : null}
        {this.state.viewquiz ? (
          <Quiz
            tryAgain={this.hideQuizButton}
            tryAgain2={this.changetoQuiz}
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
      </div>
    );
  }
}
export default Welcome;
