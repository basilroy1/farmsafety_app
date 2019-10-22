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

click =(e)=>{
 console.log( <h3>logged in succesffuly</h3>);

}










  render() {
    return (
      <div>
        <body>
          <div>
            <Button variant="primary" size="lg" block onClick={this.click}>
              Farm safety guide
            </Button>
          </div>
        </body>
      </div>
    );
  }
}
export default Home;
