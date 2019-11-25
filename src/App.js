import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
import Quiz from "./components/quiz/quiz";
import Login from "./components/quiz/login";
import { Button, Col } from "react-bootstrap";
import Signup from "./components/quiz/signup";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewquiz: false,
      viewHome: true
      //email: ""
    };
  }
  changetoQuiz = () => {
    this.setState({
      viewquiz: !this.state.viewquiz,
      viewHome: false
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.viewHome ? <Home /> : null}
        <div>
          <Button onClick={this.changetoQuiz}>Enter The site</Button>
          <Col md={12}>{this.state.viewquiz ? <Home /> : null}</Col>
        </div>
      </div>
    );
  }
}

export default App;
