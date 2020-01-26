import React, { Component } from "react";
class Test extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.stateOutput}>click meee</button>
      </div>
    );
  }
}
export default Test;
