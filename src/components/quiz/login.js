import React, { Component } from "react";
//import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import fire from "../../config/fire";
import { Button } from "react-bootstrap";
import "./login.css";
import { GiFarmTractor } from "react-icons/gi";
import { MdMail, MdDone, MdPriorityHigh } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Welcome from "../home/welcome";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      clicked: "",
      userName: "",
      viewWelcome: false,
      viewLogin: true
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
    //e.preventDefault();

    // this.handleRememberMe(); // Function to toggle persistant login

    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        this.setState({
          viewWelcome: true,

          viewLogin: false
        });
        console.log("Logged in");
        //   return true;
      })
      .catch(error => {
        alert("Please enter a valid Maynooth email or password");

        console.log(error.message);
        //     return false;
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

  extractUsername = email => {
    var s = "";
    for (var r in email) {
      if (email.charAt(r) === "@") {
        s += email.substring(0, r);
      }
    }
    // return s;
    console.log(s);
  };

  render() {
    return (
      <body>
        <div>
          <form className="loginForm">
            <div className="emailpassdiv">
              <h1 className="loginHeader">Login</h1>
              <br />
              <div className="profileicon">
                <FaUserCircle size={75} />
              </div>
              <br />
              <div>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <MdMail color={"navy"} size={20} />
                  </Grid>
                  <Grid item>
                    <TextField
                      required
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
                    <AiOutlineLock color={"navy"} size={20} />
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="input-with-icon-grid"
                      label="Enter Password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      //   variant="outlined"
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
              {/*  <div className="form-group col-md-9 ">
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

              {/*  <div className="form-group col-md-9">
                <label
                  htmlFor="inputPassword"
                  style={{ color: "yellow", font: "bolder" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  // name="password"
                  placeholder="Enter Password"
                  className="form-control"
                  // value={this.state.password}
                  //onChange={this.handleChange}
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

            <Button
              style={{ height: 50, width: 200, fontSize: 17, borderRadius: 30 }}
              className="Loginbtn"
              variant="info"
              onClick={() => {
                this.login();
              }}
            >
              Login <GiFarmTractor size={22} />
            </Button>
          </form>
        </div>
        {this.state.viewWelcome ? <Welcome /> : null}
      </body>
    );
  }
}
export default Login;
