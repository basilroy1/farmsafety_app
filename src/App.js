import React, { Component } from "react";
//import logo from './logo.svg';
//import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import fire from "./config/fire";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
import Quiz from "./components/quiz/quiz";
import Login from "./components/quiz/login";
import { Button, Col, Nav, Navbar } from "react-bootstrap";
import Signup from "./components/quiz/signup";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewquiz: false,
      viewHome: true,
      viewLogin: false,
      viewSignup: false
    };
  }
  changetoQuiz = () => {
    this.setState({
      viewquiz: !this.state.viewquiz,
      viewHome: false
    });
  };

  changetoLogin = () => {
    this.setState({
      viewLogin: true,
      viewHome: false,
      viewSignup: false
    });
  };

  changetoSignup = () => {
    this.setState({
      viewSignup: true,
      viewHome: false,
      viewLogin: false
    });
  };
  changetoHome = () => {
    this.setState({
      viewHome: true,
      viewLogin: false
    });
  };

  render() {
    return (
      <body>
        <div className="App">
          <BrowserRouter>
            <Navbar bg="primary" variant="dark">
              <Button onClick={this.changetoHome}>
                <Link to="/">Home</Link>
              </Button>
              <Nav className="mr-auto">
                <Button onClick={this.changetoLogin}>
                  <Link to="/Login">Login</Link>
                </Button>

                <Button onClick={this.changetoSignup}>
                  <Link to="/Signup">Signup</Link>
                </Button>
              </Nav>
            </Navbar>
            {this.state.viewHome ? (
              <Route path="/Home" component={Home} exact />
            ) : null}
            {this.state.viewLogin ? (
              <Route path="/Login" component={Login} exact />
            ) : null}
            {this.state.viewSignup ? (
              <Route path="/Signup" component={Signup} exact />
            ) : null}
          </BrowserRouter>

          {/*  {this.state.viewHome ? <Home /> : null}
          {this.state.viewLogin ? <Login /> : null}
          {this.state.viewSignup ? <Signup /> : null}
        */}
          <div>
            <Button onClick={this.changetoQuiz}>Enter The site</Button>
            <Col md={12}>{this.state.viewquiz ? <Home /> : null}</Col>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
