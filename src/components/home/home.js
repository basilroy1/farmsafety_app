import React, { Component } from "react";
import "./home.css";
import {
  Button,
  ButtonGroup,
  Badge,
  ButtonToolbar,
  Spinner
} from "react-bootstrap";
class Home extends Component {
  render() {
    return (
      <div>
        <body>
          <div>
            <Button variant="primary" size="lg" block>
              Farm safety guide
            </Button>
          </div>
        </body>
      </div>
    );
  }
}
export default Home;
