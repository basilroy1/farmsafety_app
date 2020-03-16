import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { GiTrophy } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa";
import { IoMdClipboard } from "react-icons/io";
import ProfilePic from "../pictures/userprofilepic.jpg";
import "./userProfile.css";
import Divider from "@material-ui/core/Divider";
class UserProfile extends Component {
  render() {
    return (
      <div id="container">
        <Card
          //bg="dark"
          border="warning"
          style={{ width: "44rem", marginLeft: 40 }}
        >
          <Card.Header style={{ textAlign: "center" }}> Profile </Card.Header>
          <Card.Body>
            <Card.Title style={{ marginLeft: 230 }}>
              <img id="profilepic" alt="lol" src={ProfilePic} />
            </Card.Title>
            <Card.Text style={{ marginLeft: 70 }}>
              <MdEmail /> Email :&ensp;{" "}
              {this.props.email ? this.props.email : "no data"}
              <Divider />
              <IoMdClipboard /> Score :&ensp; {this.props.score}
              <Divider />
              <GiTrophy /> Level :&ensp;
              {this.props.levelRook ? "Rookie" : null}
              {this.props.levelStudent ? "Student" : null}
              {this.props.levelIntermediate ? "Intermediate" : null}
              {this.props.levelExpert ? "Expert" : null}
              {this.props.levelMaster ? "Master" : null}
              <Divider />
              <FaRegClock /> Last Logged in :&ensp;
              {this.props.time ? this.props.time : "no data"}
              <Divider />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default UserProfile;
