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

        <Container>
          Email :{this.state.email}
          Score :{this.state.score}
          Level :{}
        </Container>
      </div>
    );
  }
}
export default UserProfile;
