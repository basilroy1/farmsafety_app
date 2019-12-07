import React, { Component } from "react";
//import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import fire from "../../config/fire";
import { Button, Alert } from "react-bootstrap";
import "./login.css";
import { GiFarmTractor } from "react-icons/gi";
import Home from "../home/home";
import Welcome from "../home/welcome";
import App from "../../App";
import UserDisplayInfo from "../home/userdisplayInfo";
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
    this.setState({
      email: "",
      // userName: "",
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
  changetoHome = () => {
    this.setState({
      viewHome: !this.state.viewHome
      //  viewlogin: false
    });
  };
  /* loadData = () => {
    var db = fire.database();
    var ref = db.ref("data");

    // Attach an asynchronous callback to read the data at our posts reference
    ref.on(
      "value",
      function(snapshot) {
        ID: fire.auth().currentUser.uid;
        console.log(snapshot.val());
      },
      function(errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
  };
  */
  render() {
    //  const ans = this.extractUsername(this.state.email);
    return (
      <body>
        <div>
          <form className="loginForm">
            <div className="emailpassdiv">
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
            <Button
              className="Loginbtn"
              onClick={() => {
                this.login();
              }}
            >
              Login <GiFarmTractor />
            </Button>

            <Button
              onClick={() => {
                this.extractUsername(this.state.email);
              }}
            >
              extract name
            </Button>
          </form>
        </div>
        {this.state.viewWelcome ? <Welcome /> : null}
      </body>
    );
  }
}
export default Login;
