import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import fire from "../../config/fire";
import { Button, Alert } from "react-bootstrap";
import "./login.css";
import Signup from "./signup";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      clicked: "",
      userName: "",
      viewPasswordResetModal: false
    };
  }
  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  login = e => {
    e.preventDefault();

    // this.handleRememberMe(); // Function to toggle persistant login

    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log("Logged in");
      })
      .catch(error => {
        alert("Please enter a valid Maynooth email or password");
        console.log(error.message);
      });
    this.setState({
      email: "",
      userName: "",
      password: ""
    });
  };

  signUp = e => {
    e.preventDefault();

    const validEmail =
      this.state.email.endsWith("@gmail.com") ||
      this.state.email.endsWith("@mumail.ie");

    if (!validEmail) {
      alert("Please enter a valid Email address");
      return;
    }

    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  };

  passwordReset = e => {
    e.preventDefault();

    const auth = fire.auth();
    const email = this.state.email;
    const validEmail =
      email.endsWith("@mumail.ie") || email.endsWith("@gmail.com");

    if (!validEmail) {
      alert("Please enter a valid email");
      return;
    }

    auth
      .sendPasswordResetEmail(email)
      .then(alert("An email has been sent to you to reset your password"));
  };
  extractUsername = email => {
    var s = "";
    for (var r in email) {
      if (email.charAt(r) === "@") {
        s += email.substring(0, r);
      }
    }
    console.log(s);
  };
  render() {
    //  const ans = this.extractUsername(this.state.email);
    return (
      <body>
        <div>
          <form>
            <div className="emailpassdiv">
              <BrowserRouter>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>

                <Switch>
                  <Route path="/signup" component={Signup} />
                </Switch>
              </BrowserRouter>
              <div className="form-group col-md-9">
                <label
                  htmlFor="inputUsername"
                  style={{ color: "yellow", font: "bolder" }}
                >
                  Username
                </label>
                <input
                  type="username"
                  name="userName"
                  placeholder="Enter Username"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.userName}
                />

                {this.state.userName ? (
                  <span style={{ color: "#00FF7F" }}>That's Good!</span>
                ) : (
                  <span style={{ color: "#881d11" }}></span>
                )}
              </div>

              <div className="form-group col-md-9 ">
                <label
                  htmlFor="emailInput"
                  style={{ color: "yellow", font: "bolder" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleChange}
                />

                {this.state.email ? (
                  <span style={{ color: "#00FF7F" }}>That's Good!</span>
                ) : (
                  <span style={{ color: "yellow" }}></span>
                )}
                <br></br>
              </div>
              <div className="form-group col-md-9">
                <label
                  htmlFor="inputPassword"
                  style={{ color: "yellow", font: "bolder" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleChange}
                />

                {this.state.password.length >= 6 ? (
                  <span style={{ color: "#00FF7F" }}>
                    Minimum 6 characters long
                  </span>
                ) : (
                  <span style={{ color: "#FF0000" }}>
                    Minumum 6 characters long
                  </span>
                )}
              </div>
            </div>
            <Button className="Loginbtn" onClick={this.login}>
              Login
            </Button>
            <Button
              onClick={() => {
                this.extractUsername(this.state.email);
              }}
            ></Button>
          </form>
        </div>
      </body>
    );
  }
}
export default Login;
