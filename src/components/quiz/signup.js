import React, { Component } from "react";
import fire from "../../config/fire";
import { Button, Alert } from "react-bootstrap";
import "./login.css";
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
      <div>
        <body>
          <form>
            <div className="emailpassdiv">
              <h3
                style={{ color: "white", fontSize: 32, fontFamily: "Courier" }}
              >
                {" "}
                Sign Up
              </h3>
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
                    Minimum 6 charachters long
                  </span>
                ) : (
                  <span style={{ color: "#FF0000" }}>
                    Minumum 6 charachters long
                  </span>
                )}
              </div>
            </div>

            <Button className="Loginbtn" onClick={this.login}>
              Login
            </Button>
            <Button className="signupbtn" onClick={this.signUp}>
              Sign Up
            </Button>

            <Button
              onClick={() => {
                this.extractUsername(this.state.email);
              }}
            ></Button>
          </form>
        </body>
      </div>
    );
  }
}
export default Login;
