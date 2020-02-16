import React, { Component } from "react";
//import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import fire from "../../config/fire";
import { Button, Container, Card } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { GiTrophy } from "react-icons/gi";
import { IoMdClipboard } from "react-icons/io";
import ProfilePic from "../pictures/userprofilepic.jpg";
import "./userProfile.css";
class UserProfile extends Component {
  render() {
    return (
      <div id="container">
        <Card border="warning" style={{ width: "40rem", marginLeft: 50 }}>
          <Card.Header style={{ textAlign: "center" }}> Profile</Card.Header>
          <Card.Body>
            <Card.Title style={{ marginLeft: 230 }}>
              <img id="profilepic" src={ProfilePic} />
            </Card.Title>
            <Card.Text style={{ marginLeft: 70 }}>
              <br></br>
              <ul>
                <MdEmail /> Email :&ensp; {this.props.email}
                <br></br>
                <IoMdClipboard /> Score :&ensp; {this.props.score}
                <br></br>
                <GiTrophy /> Level :&ensp;
                {this.props.levelRook ? "Rookie" : null}
                {this.props.levelStudent ? "Student" : null}
                {this.props.levelIntermediate ? "Intermediate" : null}
                {this.props.levelExpert ? "Expert" : null}
                {this.props.levelMaster ? "Master" : null}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default UserProfile;
