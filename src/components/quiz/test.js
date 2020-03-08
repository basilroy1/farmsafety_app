import React, { Component } from "react";
import UserProfile from "../quiz/userProfile";
class Test extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let renderData = this.props.people.map((person, index) => {
      return (
        <UserProfile
          className="userProfile"
          levelRook={person.levelRook}
          levelStudent={person.levelStudent}
          levelIntermediate={person.levelIntermediate}
          levelExpert={person.levelExpert}
          levelMaster={person.levelMaster}
          score={person.Score}
          question={person.Questions}
          email={person.email}
          time={person.lastLogin}
        />
      );
    });
    return <div>{this.props.viewprof ? renderData : null}</div>;
  }
}
export default Test;
