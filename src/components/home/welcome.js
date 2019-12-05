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
  Form,
  FormControl,
  Carousel
} from "react-bootstrap";
//import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "../quiz/login";
import Signup from "../quiz/signup";
import Home from "./home";
import Quiz from "../quiz/quiz";
import fire from "../../config/fire";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      viewquiz: false,
      people: [],
      dataHasLoaded: ""
      // viewLogin:false
    };
  }

  componentDidMount() {
    this.retrieveData();
    function isData(data) {
      this.setState({ dataHasLoaded: data });
    }
  }
  retrieveData = () => {
    /*const db = fire.database();
    const ref = db.ref("User");

    let currentState = this.state.people;
    ref.once("value", snapshot => {
      //callback start

      snapshot.forEach(data => {
        const currentUser = data.val();
        let user = {
          email: currentUser.UserEmail,
          userAnswer: currentUser.userAnswer,
          questions: currentUser.Questions,
          ID: currentUser.ID,
          score: currentUser.Score
        };
        currentState.push(user);
      });

      this.setState({
        people: currentState,
        dataHasLoaded: true
      });
    });
    */
    var ref = fire.database().ref("data");
    var user = fire.auth().currentUser.uid; //gets users Unique ID

    var query = ref.orderByChild("ID").equalTo(user); //retrieves data about only the current logged in user
    var topScores = ref.orderByChild("Score"); //gets the max score of the current user
    console.log(user);
    console.log(topScores);

    query.on("value", function(snapshot) {
      snapshot.forEach(function(user) {
        //   var ID = t.ID;
        //   var topScores = ref.orderByChild("Score").limitToLast(1);
        // console.log(topScores);

        var t = {
          ID: user.val().ID,
          Question: user.val().Question,
          UserAnswer: user.val().UserAnswer,
          UserEmail: user.val().UserEmail,
          Score: user.val().Score
        };

        //   for (var i = 0; i < t.length; i++) {
        //console.log(t[i]);
        //   }
        // if (ID === user) {
        //   var x = {
        ///   ID: user.val().ID,
        //     Question: user.val().Question,
        //   UserAnswer: user.val().UserAnswer,
        //           UserEmail: user.val().UserEmail,
        //             Score: user.val().Score
        //       };

        // console.log(x);
        //}
        console.log(t);
      });

      /*  return (
        <div>
          <p>
            <li>
              {ID},{UserAnswer}
            </li>
          </p>
        </div>
      );

    */
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
    /*  let people = this.state.people;
    let renderData = people.map(person => (
      <Home
        key={person.ID}
        UserEmail={person.UserEmail}
        score={person.Score}
        userAnswer={person.userAnswer}
      />
    ));

    let loadingSpinner = (
      <Loader
        id="loader"
        type="Plane"
        color="#570F0F "
        height="100"
        width="100"
      />
    );
*/
    return (
      <div>
        {/*  <div>{this.state.dataHasLoaded ? renderData : loadingSpinner}</div>*/}
        <div>
          {this.state.dataHasLoaded
            ? this.state.dataHasLoaded.map(data => <Quiz data={data} />)
            : "no data"}
          );
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              Welcome <MdPerson />
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
          </Navbar>
        </div>
        {this.people}
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
