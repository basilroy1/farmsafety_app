import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import fire from "../../config/fire";
import { Button, Alert } from "react-bootstrap";
import "./login.css";
import Signup from "./signup ";
import Login from "./login";
class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>

        <Switch>
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routing;
