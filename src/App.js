import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import fire from "./config/fire";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
import Login from "./components/quiz/login";
import { Button, Nav, Navbar, ButtonToolbar } from "react-bootstrap";
import Signup from "./components/quiz/signup";
import Welcome from "./components/home/welcome";
import { FiLogIn } from "react-icons/fi";
import { MdPersonAdd } from "react-icons/md";
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
    });
  };

  render() {
    return (
      <div className="body">
        <body>
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
                    <Button
                      bg="dark"
                      variant="dark"
                      onClick={this.changetoHome}
                    >
                      <Link to="/" style={{ color: "white" }}>
                        Home&ensp;
                        <TiHome size={20} />
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
                        <Link to="/Login" style={{ color: "white" }}>
                          Login&ensp;
                          <FiLogIn size={20} />
                        </Link>
                      </Button>
                    </Tooltip>
                    <Tooltip
                      TransitionComponent={Zoom}
                      title="Create an Account and Sign in"
                      arrow
                    >
                      <Button variant="dark" onClick={this.changetoSignup}>
                        <Link to="/Signup" style={{ color: "white" }}>
                          Signup&ensp;
                          <MdPersonAdd size={20} />
                        </Link>
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
        </body>
      </div>
    );
  }
}

export default App;
