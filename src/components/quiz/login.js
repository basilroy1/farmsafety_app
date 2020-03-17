import React, { Component } from "react";
import fire from "../../config/fire";
import { Button } from "react-bootstrap";
import "./login.css";
import { GiFarmTractor } from "react-icons/gi";
import { MdMail, MdDone, MdPriorityHigh } from "react-icons/md";
import { FaUserCircle, FaArrowCircleLeft } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import TextField from "@material-ui/core/TextField"; //imported all the neccessary libraries,API's,Components
import Grid from "@material-ui/core/Grid";
import Welcome from "../home/welcome";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      emailReset: "",
      viewPasswordReset: false,
      hideForgotPass: true,
      password: "",
      viewWelcome: false, //initialize the state variables
      viewLogin: true
    };
  }
  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value; //this function looks out for an change in value then triggers
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  login = e => {
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password) //function for authenticating the login with email and password
      .then(u => {
        this.setState({
          viewWelcome: true,

          viewLogin: false
        });
        console.log("Logged in");
      })
      .catch(error => {
        alert("Please enter a valid Maynooth email or password");

        console.log(error.message);
      });
  };
  passwordReset = e => {
    //  e.preventDefault();

    const validEmail =
      this.state.emailReset.endsWith("@mumail.ie") ||
      this.state.emailReset.endsWith("@mu.ie") ||
      this.state.emailReset.endsWith("@gmail.com") ||
      this.state.emailReset.endsWith("@hotmail.com"); //if the user forget password they can reset the password using this function

    if (!validEmail) {
      alert("Please enter a valid email");
      return;
    }

    fire
      .auth()
      .sendPasswordResetEmail(this.state.emailReset)
      .then(
        alert(
          "An email has been sent to your Email with Instructions to reset your password"
        )
      );
  };
  changeResetModal = () => {
    this.setState({
      viewPasswordReset: true,
      hideForgotPass: false
    });
  };
  render() {
    return (
      <body>
        <div>
          {/* here we are creating the login form with email and password input fields, also we do some checks for if password is the correct length etc.*/}
          <form className="loginForm">
            {this.state.viewPasswordReset ? (
              <div
                onClick={() => {
                  this.setState({
                    hideForgotPass: true, //back arrow to go back to login page from the reset password page
                    viewPasswordReset: false
                  });
                }}
                id="leftArrow"
              >
                <FaArrowCircleLeft size={20} />
              </div>
            ) : null}
            <div className="emailpassdiv">
              <h1 className="loginHeader">Login</h1>
              <br />
              <div className="profileicon">
                <FaUserCircle size={75} />
              </div>
              <br />
              {this.state.hideForgotPass ? (
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
                  {this.state.email.endsWith("@mumail.ie") ||
                  this.state.email.endsWith("@mu.ie") ||
                  this.state.email.endsWith("@gmail.com") ? (
                    <span style={{ color: "#00FF7F" }}>
                      That's a Valid Email!
                    </span>
                  ) : (
                    <span style={{ color: "rgb(179, 44, 44)" }}>
                      Enter Valid Email
                    </span>
                  )}
                  <br></br>
                </div>
              ) : null}
              {this.state.hideForgotPass ? (
                <div>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <AiOutlineLock color={"navy"} size={20} />
                    </Grid>
                    <Grid item>
                      <TextField
                        required //hding the email and passowrd fields when forgot password is clicked
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
              ) : null}
              {this.state.viewPasswordReset ? (
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <MdMail color={"navy"} size={20} />
                  </Grid>{" "}
                  <Grid item>
                    <TextField
                      required
                      id="input-with-icon-grid"
                      label="Enter your Sign-in Email" //email reseting input fields
                      type="email"
                      name="emailReset"
                      value={this.state.emailReset}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </Grid>
              ) : null}
              {this.state.hideForgotPass ? (
                <a onClick={this.changeResetModal} href="#">
                  Forgot Password ?
                </a> //hides forgot password when the link is clicked
              ) : null}
            </div>
            {this.state.viewPasswordReset ? (
              <Button
                style={{
                  height: 50,
                  width: 200,
                  fontSize: 17, //hides the button when forgot password link is not clicked
                  borderRadius: 30
                }}
                variant="info"
                className="resetBtn"
                onClick={() => {
                  this.passwordReset();
                  this.setState({
                    viewPasswordReset: false,
                    hideForgotPass: true //reset the values for password reset
                  });
                }}
              >
                Sent Recovery Email
              </Button>
            ) : null}
            {this.state.viewPasswordReset ? null : (
              <Button
                style={{
                  height: 50,
                  width: 200,
                  fontSize: 17,
                  borderRadius: 30
                }}
                className="Loginbtn"
                variant="info"
                onClick={() => {
                  this.login(); //login button
                }}
              >
                Login <GiFarmTractor size={22} />
              </Button>
            )}
          </form>
        </div>
        {this.state.viewWelcome ? <Welcome /> : null}
      </body>
    );
  }
}
export default Login;
