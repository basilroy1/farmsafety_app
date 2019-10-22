import React, { Component } from "react";
import "./home.css";
import {
  Button,
  ButtonGroup,
  Badge,
  ButtonToolbar,
  Spinner,
  Alert
} from "react-bootstrap";

class Home extends Component {
  click = e => {
    e.preventDefault();
    alert("clicked");
  };
  render() {
    return (
      <div className="background">
        <div>
          <Button variant="primary" size="lg" block onClick={this.click}>
            Farm safety guide
          </Button>
        </div>
      </div>
    );
  }
}
export default Home;
