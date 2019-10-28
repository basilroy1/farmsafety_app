import React, { Component } from "react";
import QuestionBox from "./questionBox";
import "./quiz.css";
import useState from "react";
import fire from "../../config/fire";
//import pictures from "../pictures/health_hazard.jpg";
import { Button, ButtonGroup, Toast } from "react-bootstrap";

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
  checkAns = (answer, options) => {
    //  e.preventDefault();

    this.setState({
      userAns: answer
    });
  };

  nextQuestion = e => {
    //  e.preventDefault();
    this.setState({
      currentQuest: this.state.currentQuest + 1
    });
    //if (userAns == answer) {
    this.setState({
      scores: this.state.scores + 1
    });
    //}
    //console.log(this.state.currentQuest);
  };

  componentDidMount() {
    this.loadQuiz(); //loads quiz quiz data in
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentQuest } = this.state;
    if (this.state.currentQuest !== prevState.currentQuest) {
      this.setState({
        questions: Quizdata[currentQuest].question,
        options: Quizdata[currentQuest].option,
        answers: Quizdata[currentQuest].answer,
        pictures: Quizdata[currentQuest].picture
      });
      //   console.log(this.state.options);
    }
  }

  render() {
    const { userAns, option, questions, answers } = this.state;
    // const [answer, setAnswer] = useState(option);

    return (
      <div className="lol">
        <br></br>
        {this.state.questions}
        <br></br>
        {/* {this.state.options.map(
          item => (
            <button
              id="optionsData"
              className="ui floating message options"
              className={userAns === this.state.options ? "selected" : null}
              onClick={() => this.checkAnswer(option)}
            >
              {item}
            </button>
          ) maps the options on the page
        )}
          */}

        {this.state.options.map((lol, options, id) => (
          <Button
            key={id}
            question={questions}
            option={options}
            answer={answers}
            selected={answer => this.checkAns(answer, option)}
          >
            {lol}
          </Button>
        ))}
        <br></br>
        <Button onClick={() => this.checkAns(option)}>CHECK</Button>
        <Button onClick={this.nextQuestion}>NEXT</Button>
        <br></br>

        {this.state.currentQuest === Quizdata.length - 1
          ? alert("Quiz FINISHED")
          : null}
      </div>
    );
  }
}
export default Quiz;

/*
const QuestionBox = ({ question, option }) => {
  const [answer, setAnswer] = useState(option);
  return (
    <div>
      <div>{question}</div>
      {answer.map((text, index) => (
        <Button
          key={index}
          onClick={() => {
            setAnswer([text]);
          }}
        >
          {text}
        </Button>
      ))}
    </div>
  );
  */
