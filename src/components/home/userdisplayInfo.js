import fire from "../../config/fire";
import Welcome from "../home/welcome";
import React, { Component } from "react";
import Loader from "react-loader-spinner";
class UserDisplayInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      dataHasLoaded: false
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    const db = fire.database();
    const ref = db.ref("data");
    console.log("loaded");
    let currentState = this.state.people;
    ref.once("value", snapshot => {
      //callback start

      snapshot.forEach(data => {
        const currentStudent = data.val();
        let user = {
          UserAnswer: currentStudent.UserAnswer,
          UserEmail: currentStudent.UserEmail,
          ID: currentStudent.ID
        };
        currentState.push(user);
      });

      this.setState({
        people: currentState,
        dataHasLoaded: true
      });
    }); //callback end
  };

  render() {
    let people = this.state.people;
    let renderData = people.map(person => (
      <Welcome
        UserAnswer={person.userAns}
        UserEmail={person.email}
        Question={person.questions}
      />
    ));
    let loadingSpinner = (
      <Loader
        id="loader"
        type="Plane"
        color="#570F0F "
        height="100"
        width="100"
      />
    );
    return <div>{this.state.dataHasLoaded ? renderData : loadingSpinner}</div>;
  }
}
export default UserDisplayInfo;
