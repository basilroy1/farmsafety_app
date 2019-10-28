import React, { Component } from "react";
import QuestionBox from "./questionBox";

import "./quiz.css";
import fire from "../../config/fire";
//import pictures from "../pictures/health_hazard.jpg";
import {
  Button,
  ButtonGroup,
  Badge,
  ButtonToolbar,
  Spinner,
  Alert,
  Item,
  DropdownButton,
  Toast
} from "react-bootstrap";

import Questions, { Quizdata } from "./questions";
import { thisExpression } from "@babel/types";
class Test extends Component {
  state = {
    questionBank: [],
    scores: 0,
    response: 0,
    currentQuest: 0
  };

  loadQuiz = () => {
    const { currentQuest } = this.state;
    this.setState({
      questionBank: Quizdata
      //     questions: Quizdata[currentQuest].question,
      //   options: Quizdata[currentQuest].option,
      // answers: Quizdata[currentQuest].answer
    });
  };
  checkAns = (answer, option) => {
    if (answer === option) {
      this.setState({
        scores: this.state.scores + 1
      });
    }
    this.setState({
      response: this.state.response + 1
    });
  };

  componentDidMount() {
    this.loadQuiz(); //loads  quiz data in
  }
  render() {
    return (
      <div>
        {this.state.questionBank.map(({ question, option, id, answer }) => (
          <QuestionBox
            question={question}
            option={option}
            key={id}
            selected={answer => this.checkAns(answer, option)}
          />
        ))}
        {this.state.scores}
      </div>
    );
  }
}
export default Test;
