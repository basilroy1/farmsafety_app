import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import fire from "../../config/fire";
import { Button, Alert, Container } from "react-bootstrap";
import ProfilePic from "../pictures/userprofilepic.jpg";
class UserProfile extends Component {
  render() {
    return (
      <div>
        <img src={ProfilePic} />

        <li>
          Email :{this.props.email}
          Score :{this.props.score}
          Level :{}
        </li>
      </div>
    );
  }
}
export default UserProfile;
