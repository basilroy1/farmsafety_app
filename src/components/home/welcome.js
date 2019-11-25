import React, { Component } from "react";
import { MdPerson } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import {
  Button,
  Nav,
  Navbar,
  Form,
  FormControl,
  Carousel
} from "react-bootstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "../quiz/login";
import Signup from "..//quiz/signup";
import fire from "../../config/fire";

class Welcome extends Component {
  logout = e => {
    e.preventDefault();
    fire.auth().signOut();
    console.log("Logged out");
  };
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto">
            Welcome <MdPerson />
            <Button>Rookie</Button>
            <Button>Student</Button>
            <Button>Intermediate</Button>
            <Button>Expert</Button>
            <Button>Master</Button>
          </Nav>
          <Button onClick={this.logout}>
            <Nav>
              Logout <FiLogOut />
            </Nav>
          </Button>
        </Navbar>
      </div>
    );
  }
}
export default Welcome;
