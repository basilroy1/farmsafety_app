import React, { Component } from "react";
import fire from "../../config/fire";
import { Button } from "react-bootstrap";
import { MdMail, MdDone, MdPriorityHigh, MdPersonAdd } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { GiFarmTractor } from "react-icons/gi";
import "./login.css";
class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      clicked: "",
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
        alert(error);
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
    return (
      <body>
        <div>
          <form className="loginForm">
            <div className="emailpassdiv">
              <h1 className="signupHeader">SignUp</h1>
              <div className="profileicon">
                <MdPersonAdd size={75} />
              </div>
              <br />
              <div>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <MdMail size={20} color={"navy"} />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Enter Email"
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </Grid>
                {this.state.email ? (
                  <span style={{ color: "#00FF7F" }}>That's Good!</span>
                ) : (
                  <span style={{ color: "yellow" }}></span>
                )}
                <br></br>
              </div>
              <div>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AiOutlineLock size={20} color={"navy"} />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Enter Password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </Grid>
                {this.state.password.length >= 6 ? (
                  <span style={{ color: "#00FF7F" }}>
                    Minimum 6 characters long&ensp;
                    <MdDone size={23} />
                  </span>
                ) : (
                  <span style={{ color: "rgb(179, 44, 44)" }}>
                    Minumum 6 characters long&ensp;
                    <MdPriorityHigh size={20} />
                  </span>
                )}
              </div>
              {/*} <div className="form-group col-md-9 ">
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
                */}
              {/* <div className="form-group col-md-9">
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
                */}
            </div>
            <Button className="signupbtn" onClick={this.signUp}>
              Signup <GiFarmTractor />
            </Button>
          </form>
        </div>
      </body>
    );
  }
}
export default Signup;
