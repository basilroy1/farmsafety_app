import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
import Quiz from "./components/quiz/quiz";
import Login from "./components/quiz/login";
import { Button, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewquiz: false,
      viewlogin: true
      //email: ""
    };
  }
  changetoQuiz = () => {
    this.setState({
      viewquiz: !this.state.viewquiz,
      viewlogin: false
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.viewlogin ? <Login /> : null}
        <div>
          <Button onClick={this.changetoQuiz}>Enter The site</Button>
          <Col md={12}>{this.state.viewquiz ? <Quiz /> : null}</Col>
        </div>
      </div>
    );
  }
}

export default App;
