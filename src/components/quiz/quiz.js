import React, { Component } from "react";
import "./quiz.css";
//import pictures from "../pictures/health_hazard.jpg";
import {
  Button,
  ButtonGroup,
  Badge,
  ButtonToolbar,
  Spinner,
  Alert
} from "react-bootstrap";
import Questions, { Quizdata } from "./questions";
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      currentQuest: 1
    };
  }
  loadQuiz = () => {
    const { currentQuest } = this.state;
    this.setState(() => {
      return {
        questions: Quizdata[currentQuest].question,
        options: Quizdata[currentQuest].option,
        answers: Quizdata[currentQuest].answer,
        pictures: Quizdata[currentQuest].picture
      };
    });
  };
  componentDidMount() {
    this.loadQuiz();
  }

  render() {
    return (
      <div className="lol">
        {this.state.questions}
        <br></br>

        {this.state.options.map(option, key => (
          <p>key={this.state.option.id}</p>
        ))}
        {this.state.options}
      </div>
    );
  }
}
export default Quiz;
