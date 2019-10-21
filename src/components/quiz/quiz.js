import React, { Component } from "react";
import pictures from "../pictures/health_hazard.jpg";
class Quiz extends Component {
  render() {
    return (
      <div>
        <h1>Lets see What you Learned</h1>
        <img src={pictures} />
        <span>sdsds</span>
      </div>
    );
  }
}
export default Quiz;
