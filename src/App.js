import React, { Component } from "react";
//import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import fire from "./config/fire";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
//import Quiz from "./components/quiz/quiz";
import Login from "./components/quiz/login";
import { Button, Nav, Navbar, ButtonToolbar } from "react-bootstrap";
import Signup from "./components/quiz/signup";
import Welcome from "./components/home/welcome";
import { FiLogIn } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
//import { Alert } from "reactstrap";
//import login from ".login/components/quiz/login";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewquiz: false,
      viewHome: true,
      viewLogin: false,
      viewSignup: false,
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user,
          viewHome: false,
          viewLogin: false,
          viewSignup: false
        });
      } else {
        this.setState({ user: null, viewHome: true });
      }
    });
  }

  changetoQuiz = () => {
    this.setState({
      viewquiz: !this.state.viewquiz,
      viewHome: false,
      viewLogin: false,
      viewSignup: false
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
      viewHome: true
      //  viewLogin: false
    });
  };

  render() {
    return (
      <div className="body">
        <BrowserRouter>
          {this.state.user ? (
            <Welcome />
          ) : (
            <Navbar id="navbar" bg="dark" variant="dark">
              <ButtonToolbar>
                <Button bg="dark" variant="dark" onClick={this.changetoHome}>
                  <Link to="/">
                    Home <TiHome />
                  </Link>
                </Button>
                <Nav className="mr-auto">
                  <Button bg="dark" variant="dark" onClick={this.changetoLogin}>
                    <Link to="/Login">
                      Login <FiLogIn />
                    </Link>
                  </Button>

                  <Button
                    bg="dark"
                    variant="dark"
                    onClick={this.changetoSignup}
                  >
                    <Link to="/Signup">Signup</Link>
                  </Button>
                </Nav>
              </ButtonToolbar>
            </Navbar>
          )}
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
        {this.state.viewHome ? <Home /> : null}
      </div>
    );
  }
}

export default App;
