import React, { Component } from "react";
import pictures from "../pictures/health_hazard.jpg";
import Questions, { Quizdata } from "./questions";
class Quiz extends Component {
  state = {
    options: [],
    currentQuest: 1
  };

  loadQuiz = () => {
    const { currentQuest } = this.state;
    this.setState(() => {
      return {
        questions: Quizdata[currentQuest].question,
        options: Quizdata[currentQuest].options,
        answers: Quizdata[currentQuest].answer
      };
    });
  };
  componentDidMount() {
    this.loadQuiz();
  }

  render() {
    return <div>{this.state.questions}</div>;
  }
}
export default Quiz;
