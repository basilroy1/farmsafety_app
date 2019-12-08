import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import fire from "../../config/fire";
import { Button, Alert, Container, Card } from "react-bootstrap";
import ProfilePic from "../pictures/userprofilepic.jpg";
import "./userProfile.css";
class UserProfile extends Component {
  render() {
    return (
      <div id="container">
        <Card border="primary" style={{ width: "40rem", marginLeft: 50 }}>
          <Card.Header style={{ textAlign: "center" }}> Profile</Card.Header>
          <Card.Body>
            <Card.Title style={{ marginLeft: 230 }}>
              <img id="profilepic" src={ProfilePic} />
            </Card.Title>
            <Card.Text style={{ marginLeft: 70 }}>
              <br></br>
              <ul>
                Email :
                {this.props.email ? this.props.email : "No data for Email"}
                <br></br>
                Question : {this.props.question}
                <br></br>
                Score :{" "}
                {this.props.score ? this.props.score : "No data for Score"}
                <br></br>
                Level :{" "}
                {this.props.level ? this.props.level : "No data for Level"}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default UserProfile;
