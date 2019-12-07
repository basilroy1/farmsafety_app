import React, { Component } from "react";
import "./welcome.css";
import { MdPerson, MdCheckBox } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { GiSwordsEmblem } from "react-icons/gi";
import piechart from "../pictures/piechartMachinery.jpg";
import Loader from "react-loader-spinner";
import { Button, Nav, Navbar } from "react-bootstrap";
//import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
//import Login from "../quiz/login";
//import Signup from "../quiz/signup";
//import Home from "./home";
import Quiz from "../quiz/quiz";
import fire from "../../config/fire";

class Welcome extends Component {
  constructor(props) {
    super(props);
    // this.logout = this.logout.bind(this);
    this.state = {
      viewquiz: false,
      people: [],
      dataHasLoaded: false,
      user: {}
      // viewLogin:false
    };
  }

  componentDidMount() {
    this.authListener();
    this.retrieveData();

    console.log("Data loaded");
  }
  authListener = () => {
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
    var ref = fire.database().ref("data"); //takes the last data in DB
    //  var user1 = fire.auth().user.uid;
    // var query = ref.orderByChild("ID").equalTo(user1); //retrieves data about only the current logged in user

    //  let currentState = this.state.people;
    ref.once("value", snapshot => {
      let currentState = this.state.people;

      const currentUser = snapshot.val();
      for (let i in currentUser) {
        currentState.push({
          email: currentUser[i].UserEmail,
          UserAnswer: currentUser[i].UserAnswer,
          Questions: currentUser[i].Question,
          id: currentUser[i].ID,
          Score: currentUser[i].Score
        });
      }
      // currentState.push(user);
      console.log(currentState);

      this.setState({
        people: currentState,
        dataHasLoaded: true
      });
    });
  };

  changetoQuiz = () => {
    this.setState({
      viewquiz: true
    });
  };
  logout = e => {
    e.preventDefault();
    fire.auth().signOut();
    console.log("Logged out");
  };
  render() {
    let renderData = this.state.people.map((person, index) => {
      return (
        <div style={{ color: " yellow" }} key={index}>
          <p>{person.id}</p>
          <p>{person.UserAnswer}</p>
          <p>{person.Questions}</p>
          <p>{person.email}</p>
        </div>
      );
    });

    let loadingSpinner = (
      <Loader id="loader" type="Plane" color="blue " height="100" width="100" />
    );

    return (
      <div>
        {<div>{this.state.dataHasLoaded ? renderData : loadingSpinner}</div>}
        <div>
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              Welcome
              <Button>Rookie</Button>
              <Button>Student</Button>
              <Button>Intermediate</Button>
              <Button>Expert</Button>
              <Button>Master</Button>
              <Button onClick={this.retrieveData}>Display User Info</Button>
            </Nav>
            <Button onClick={this.logout}>
              <Nav>
                Logout <FiLogOut />
              </Nav>
            </Button>
            <Button onClick={this.viewProfile}>
              <Nav>
                Profile <MdPerson />
              </Nav>
            </Button>
          </Navbar>
        </div>

        <div style={{ backgroundColor: "white" }}>
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
          </h3>

          <Button onClick={this.changetoQuiz}>Take the Quiz</Button>
          {this.state.viewquiz ? <Quiz /> : null}
        </div>
      </div>
    );
  }
}
export default Welcome;
