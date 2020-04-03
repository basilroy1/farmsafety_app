import React, { Component } from "react";
import fire from "../../config/fire";
import { Button } from "react-bootstrap";
import { MdMail, MdDone, MdPriorityHigh, MdPersonAdd } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import TextField from "@material-ui/core/TextField";
import Spinner from "react-bootstrap/Spinner";
import Grid from "@material-ui/core/Grid";
import { GiFarmTractor } from "react-icons/gi"; //imported all the neccessary libraries,API's,Components
import "./login.css";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isActive: false,
      passwordConfirm: "" //initialize the state variables
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

  signUp = () => {
    // e.preventDefault();

    const validEmail =
      this.state.email.endsWith("@gmail.com") ||
      this.state.email.endsWith("@mu.ie") ||
      this.state.email.endsWith("@mumail.ie");
    const validPass = this.state.password === this.state.passwordConfirm; //function for authenticating the signup with email and password
    if (!validEmail) {
      alert("Please enter a valid Email Address or Password");
      this.setState({ isActive: false });
      return;
    } else if (!validPass) {
      alert("Passwords Don't Match");
      this.setState({ isActive: false });
      return;
    }
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        //email and password is cross checked with database to ensure an existing account already exists under same email
        console.log(u);
      })
      .catch(error => {
        console.log(error);
        this.setState({ isActive: false });
        alert(error);
      });
  };

  render() {
    return (
      <body>
        <div>
          <form className="loginForm">
            <div className="emailpassdiv">
              <h1 className="signupHeader">Register</h1>
              {/*Creating the signup form with email and password input field*/}
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
                      required
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
                      required
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
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AiOutlineLock size={20} color={"navy"} />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Confirm Password"
                      type="password"
                      name="passwordConfirm"
                      required /*here we check for the confirm password matches the first password*/
                      value={this.state.passwordConfirm}
                      onChange={this.handleChange}
                    />
                  </Grid>
                </Grid>
                {this.state.password !== "" &&
                this.state.passwordConfirm !== "" &&
                this.state.password === this.state.passwordConfirm ? (
                  <span style={{ color: "#00FF7F" }}>
                    Passwords Match&ensp;
                    <MdDone size={23} />
                  </span>
                ) : (
                  <span style={{ color: "rgb(179, 44, 44)" }}>
                    Passwords Dont Match&ensp;
                    <MdPriorityHigh size={20} />
                  </span>
                )}
              </div>
            </div>
            <Button
              style={{ height: 50, width: 200, fontSize: 17, borderRadius: 30 }}
              className="signupbtn"
              variant="info"
              onClick={() => {
                this.signUp(this.setState({ isActive: true }));
              }} //signup button
            >
              Signup <GiFarmTractor size={22} />
            </Button>

            {this.state.isActive ? (
              <div className="loadingSpinner">
                <span>Signing Up</span>{" "}
                <Spinner
                  as="div"
                  animation="border"
                  size="bg" //loading the signing in indicator
                  role="status"
                  aria-hidden="true"
                />
              </div>
            ) : null}
          </form>
        </div>
      </body>
    );
  }
}
export default Signup;
