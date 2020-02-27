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
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

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
                <Tooltip
                  TransitionComponent={Zoom}
                  title="Go to Home Page"
                  arrow
                >
                  <Button bg="dark" variant="dark" onClick={this.changetoHome}>
                    <Link to="/">
                      Home <TiHome />
                    </Link>
                  </Button>
                </Tooltip>
                <Nav className="mr-auto">
                  <Tooltip
                    TransitionComponent={Zoom}
                    title="Already have an Account"
                    arrow
                  >
                    <Button
                      bg="dark"
                      variant="dark"
                      onClick={this.changetoLogin}
                    >
                      <Link to="/Login">
                        Login <FiLogIn />
                      </Link>
                    </Button>
                  </Tooltip>
                  <Tooltip
                    TransitionComponent={Zoom}
                    title="Create an Account and Sign in"
                    arrow
                  >
                    <Button
                      bg="dark"
                      variant="dark"
                      onClick={this.changetoSignup}
                    >
                      <Link to="/Signup">Signup</Link>
                    </Button>
                  </Tooltip>
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
