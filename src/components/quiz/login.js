import React, { Component } from "react";
import fire from "../../config/fire";
import { Button, ButtonGroup, Toast, ProgressBar, Col } from "react-bootstrap";
import "./login.css";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      clicked: "",
      viewPasswordResetModal: false
    };
  }

  login = e => {
    e.preventDefault();

    // this.handleRememberMe(); // Function to toggle persistant login

    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log("Log in");
      })
      .catch(error => {
        alert("Please enter a valid email or password");
        console.log(error.message);
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

  render() {
    return (
      <div>
        <form>
          <div className="emailpassdiv">
            <div className="form-group col-md-8 ">
              <label htmlFor="emailInput">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="form-control"
              />
              {this.state.email ? (
                <span style={{ color: "red" }}>That's Good!</span>
              ) : (
                <span style={{ color: "yellow" }}>.</span>
              )}
              <br></br>
            </div>
            <div className="form-group col-md-8">
              <label htmlFor="inputPassword" style={{ color: "black" }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="form-control"
              />
              {this.state.password ? (
                <span style={{ color: "red" }}>That's Good!</span>
              ) : (
                <span style={{ color: "yellow" }}>.</span>
              )}

              <br></br>
            </div>
          </div>

          <Button className="Loginbtn" onClick={this.login}>
            Login
          </Button>
          <Button className="signupbtn" onClick={this.signUp}>
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}
export default Login;
