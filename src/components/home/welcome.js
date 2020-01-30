import React, { Component } from "react";
import "./welcome.css";
import { MdPerson, MdCheckBox } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { GiSwordsEmblem } from "react-icons/gi";
import piechart from "../pictures/piechartMachinery.jpg";
import Loader from "react-loader-spinner";
import {
  Button,
  Nav,
  Navbar,
  ButtonToolbar,
  Tabs,
  Tab,
  TabPane
} from "react-bootstrap";
//import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
//import Login from "../quiz/login";
//import Signup from "../quiz/signup";
import Quiz from "../quiz/quiz";
import fire from "../../config/fire";
import UserProfile from "../quiz/userProfile";
import Test from "./test";
import Articles from "./articles";
import Articles2 from "./articles2";
import Articles3 from "./articles3";
import Articles4 from "./articles4";
import Articles5 from "./articles5";
import { FaLessThanEqual, FaSadCry } from "react-icons/fa";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewquiz: false,
      people: [],
      dataHasLoaded: false,
      user: {},
      disabled: false,
      article1: true,
      article2: false,
      article3: false,
      article4: false,
      article5: false,
      viewProfile: false

      // viewLogin:false
    };
    //  this.changeToquiz1 = this.changeToquiz1.bind(this);
  }
  changeToquiz1 = () => {
    this.setState({
      level1: true,
      level2: false,
      level3: false,
      level4: false,
      level5: false
    });
  };

  changeToquiz2 = () => {
    this.setState({
      level1: false,
      level2: true,
      level3: false,
      level4: false,
      level5: false
    });
  };

  changeToquiz3 = () => {
    this.setState({
      level1: false,
      level2: false,
      level3: true,
      level4: false,
      level5: false
    });
  };
  changeToquiz4 = () => {
    this.setState({
      level1: false,
      level2: false,
      level3: false,
      level4: true,
      level5: false
    });
  };
  changeToquiz5 = () => {
    this.setState({
      level1: false,
      level2: false,
      level3: false,
      level4: false,
      level5: true
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
              Level: currentUser[i].userLevel
            });
          }
          // currentState.push(user);
          console.log(currentState);

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
      viewquiz: true
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
        article2: true,
        article3: false,
        article4: true,
        article5: false
      });
    }
  };
  render() {
    const x = this.props.stateQuiz1;

    let renderData = this.state.people.map((person, index) => {
      return (
        <div style={{ color: " black" }} key={index}>
          {this.state.viewProfile ? (
            <UserProfile
              className="userProfile"
              level={person.UserLevel}
              score={person.Score}
              question={person.Questions}
              email={person.email}
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
                  onClick={() => {
                    this.changeToquiz1();
                    this.articelState();
                  }}
                >
                  Rookie
                </Button>
                <Button
                  disabled={this.state.disabled}
                  onClick={() => {
                    this.changeToquiz2();
                    this.articelState();
                  }}
                >
                  Student
                </Button>
                <Button
                  disabled={this.state.disabled}
                  onClick={this.changeToquiz3}
                >
                  Intermediate
                </Button>
                <Button
                  disabled={this.state.disabled}
                  onClick={this.changeToquiz4}
                >
                  Expert
                </Button>
                <Button
                  disabled={this.state.disabled}
                  onClick={this.changeToquiz5}
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
        {/*     <div style={{ backgroundColor: "white" }}>
          <h3 className="heading" style={{ color: "black" }}>
            Guarding <GiSwordsEmblem />
          </h3>
          <p className="groove">
            Fixed guards must always be kept in place. These prevent
            entanglement The guard should ensure that no part of your body can
            reach the danger zone Fixed guarding of older machines should be
            upgraded in line with the guarding on newer models Do not use a
            machine unless all guards are in place
          </p>

          <h3 className="heading" style={{ color: "black" }}>
            Machinery Checks <MdCheckBox />
            <p className="groove">
              All safety guards/ devices fitted The PTO "O" guards present
              Hydraulic systems and hoses in good repair All machinery defects
              identified and corrected Regular maintenance carried out
            </p>
          </h3>

          <h3 className="heading" style={{ color: "black" }}>
            Machinery Checks <MdCheckBox />
            <p className="groove">
              All safety guards/ devices fitted The PTO "O" guards present
              Hydraulic systems and hoses in good repair All machinery defects
              identified and corrected Regular maintenance carried out
            </p>
          </h3>
          <h3 className="heading" style={{ color: "black" }}>
            Machinery Fatalities <MdCheckBox />
            <p className="groove">
              Tractors and Machinery are the main cause of farm accidents in
              Ireland. Elderly farmers and children are at particular risk.
              Being entangled in PTO’s, crushed under a machine part, caught in
              a machine mechanism, crushed between vehicles and struck by a
              machine object are the main causes of deaths with farm machinery.
              <img src={piechart} alt="" />
            </p>
          </h3>*/}

        {<div>{this.state.dataHasLoaded ? renderData : loadingSpinner}</div>}
        <Button onClick={this.changetoQuiz}>Take the Quiz</Button>

        {this.state.viewquiz ? (
          <Quiz
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
