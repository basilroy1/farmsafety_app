import React, { Component } from "react";
import pictures from "../pictures/health_hazard.jpg";
class Quiz extends Component {
  render() {
    return (
      <div>
        <h1>Lets see What you Learned</h1>
        <img src={pictures} alt="lol" />
      </div>
    );
  }
}
export default Quiz;
