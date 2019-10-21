import React, { Component } from "react";
import "./home.css";
import Badge from "react-bootstrap/Badge";
import { Button } from "react-bootstrap";
class Home extends Component {
  render() {
    return (
      <div>
        <body>
          <h1>Farm Safe Guide</h1>
          <Button variant="primary">
            Profile <Badge variant="light">9</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
        </body>
      </div>
    );
  }
}
export default Home;
