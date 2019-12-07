import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import fire from "../../config/fire";
import { Button, Alert, Container } from "react-bootstrap";
import ProfilePic from "../pictures/userprofilepic.jpg";
import "./userProfile.css";
class UserProfile extends Component {
  render() {
    return (
      <div id="container">
        <img id="profilepic" src={ProfilePic} />

        <ul>
          Email : {this.props.email}
          <br></br>
          Question : {this.props.question}
          <br></br>
          Score : {this.props.score}
          <br></br>
          Level : {this.props.level}
        </ul>
      </div>
    );
  }
}
export default UserProfile;
