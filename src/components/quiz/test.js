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
class Test extends Component {
  state = {
    questionBank: [],
    currentQuest: 0
  };

  loadQuiz = () => {
    const { currentQuest } = this.state;
    this.setState(() => {
      return {
        questionBank: Quizdata
      };
    });
    // console.log(this.state.options.option);
  };

  componentDidMount() {
    this.loadQuiz(); //loads quiz quiz data in
  }
  render() {
    return (
      <div>
        {this.state.questionBank.map(({ question, option, id, answer }) => (
          <QuestionBox question={question} option={option} key={id} />
        ))}
      </div>
    );
  }
}
export default Test;
