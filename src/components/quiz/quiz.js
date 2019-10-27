import React, { Component } from "react";
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
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAns: null,
      options: [],
      answers: "",
      questions: "",
      currentQuest: 0,
      scores: 0
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
    // console.log(this.state.options.option);
  };

  componentDidMount() {
    this.loadQuiz();
  }

  nextQuestion = e => {
    e.preventDefault();
    this.setState({
      currentQuest: this.state.currentQuest + 1
    });
    //console.log(this.state.currentQuest);
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentQuest } = this.state;
    if (this.state.currentQuest !== prevState.currentQuest) {
      this.setState(() => {
        return {
          questions: Quizdata[currentQuest].question,
          options: Quizdata[currentQuest].option,
          answers: Quizdata[currentQuest].answer,
          pictures: Quizdata[currentQuest].picture
        };
      });
    }
  }

  checkAnswer = answer => {
    //  e.preventDefault();
    if (this.state.answers === this.state.options) {
      console.log("correct");

      this.setState({
        userAns: answer
      });
      this.setState({
        scores: this.state.scores + 1
      });
    }
    //  console.log(this.state.options);
  };

  render() {
    const userAns = this.state;

    return (
      <div className="lol">
        <br></br>
        {this.state.questions}
        <br></br>
        {this.state.options.map(
          item => (
            <Toast
              id="optionsData"
              className={userAns === this.state.options ? "selected" : null}
              onClick={this.checkAnswer(this.state.options)}
            >
              {item}
            </Toast>
          ) /* maps the options on the page*/
        )}
        <br></br>
        <Button onClick={this.checkAnswer(this.state.options.value)}>
          CHECK
        </Button>
        <Button onClick={this.nextQuestion}>NEXT</Button>
        <br></br>
        {this.state.scores}

        {this.state.currentQuest === Quizdata.length - 1
          ? alert("Quiz FINISHED")
          : null}
      </div>
    );
  }
}
export default Quiz;
