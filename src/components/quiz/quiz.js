import React, { Component } from "react";
import "./quiz.css";
import fire from "../../config/fire";
import { FaHorse, FaArrowRight } from "react-icons/fa";
import { Button, ButtonGroup, Toast, ProgressBar } from "react-bootstrap";
import { Alert } from "reactstrap";

import Questions, { Quizdata } from "./questions";
import Login from "./login";
//import { Label } from "semantic-ui-react";
class Quiz extends Component {
  state = {
    userAns: null,
    options: [],
    disabled: false,
    currentQuest: 0,
    isEnd: false,
    scores: 0,
    pictures: ""
  };

  loadQuiz = () => {
    const { currentQuest } = this.state;
    //  console.log(Quizdata[2].question);
    this.setState(() => {
      return {
        questions: Quizdata[currentQuest].question,
        options: Quizdata[currentQuest].options,
        answer: Quizdata[currentQuest].answer,
        pictures: Quizdata[currentQuest].picture
      };
    });
    console.log(this.state.answer);
  };

  nextQuestion = e => {
    // e.preventDefault();
    if (this.state.userAns === null) {
      alert("choose an option");
      return;
    }
    this.setState({
      currentQuest: this.state.currentQuest + 1
    });
    this.setState({
      userAns: null
    });
    // console.log(this.state.currentQuest);
  };

  checkAns = userAns => {
    const { answer, scores } = this.state;

    this.setState({
      userAns: answer,
      disabled: false
    });
    console.log(userAns);
    if (userAns === answer) {
      console.log("Correct");
      this.setState({
        scores: scores + 1
      });
    } else {
      console.log("Wrong");
      alert("Correct answer is " + answer);
    }
  };

  componentDidMount() {
    this.loadQuiz(); //loads quiz quiz data in
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentQuest } = this.state;
    if (this.state.currentQuest !== prevState.currentQuest) {
      this.setState({
        disabled: true,
        questions: Quizdata[currentQuest].question,
        options: Quizdata[currentQuest].options,
        answer: Quizdata[currentQuest].answer,
        pictures: Quizdata[currentQuest].picture
      });
    }
  }
  logout = e => {
    e.preventDefault();
    fire.auth().signOut();
    console.log("Logged out");
  };

  pushtoDB = () => {
    var ref = fire.database().ref("data");
    var newRef = ref.push();
    newRef.set({
      ID: fire.auth().currentUser.uid,
      UserEmail: fire.auth().currentUser.email,
      Question: this.state.questions, //Send data to DB to track for analysis
      UserAnswer: this.state.userAns
    });

    console.log("Sent to Database");
  };

  pushtoDB2 = () => {
    var ref = fire.database().ref("data");
    var newRef = ref.push();
    newRef.set({
      ID: fire.auth().currentUser.uid,
      UserEmail: fire.auth().currentUser.email,
      Question: this.state.questions, //Send data to DB to track for analysis
      UserAnswer: this.state.userAns,
      Score: this.state.scores
    });
    console.log("Sent to Database");
  };

  finishQuiz = () => {
    if (this.state.currentQuestion === Quizdata.length - 1) {
      this.setState({
        isEnd: true
      });
      return <Alert>quiz Finished</Alert>;
    }
  };

  render() {
    const { userAns, options, currentQuest, isEnd } = this.state;
    if (isEnd) {
      return (
        <div>
          <Alert>Quiz Finished</Alert>
          <span>
            Quiz score : {this.state.scores}/{Quizdata.length - 1}
          </span>
        </div>
      );
    } else {
      return (
        <div className="quizForm">
          <br></br>
          <div>
            <ProgressBar animated now={this.state.currentQuest * 10} />
          </div>
          {this.state.questions}
          <br></br>
          <p>Q{this.state.currentQuest}</p>

          {this.state.pictures}
          <br></br>
          {options.map(option => (
            <Button
              key={option.id}
              className={`ui floating message options
            ${userAns === option ? "selected" : null}
           `}
              onClick={() => this.checkAns(option)}
            >
              {option}
            </Button>
          ))}

          <br></br>
          <Button onClick={() => this.checkAns()}>
            CHECK <FaHorse />
          </Button>
          {currentQuest < Quizdata.length - 1 && (
            <Button
              disabled={this.state.disabled}
              onClick={() => {
                this.nextQuestion();
                this.pushtoDB();
              }}
            >
              NEXT <FaArrowRight />
            </Button>
          )}
          <br></br>

          {currentQuest === Quizdata.length - 1 && (
            <Button
              onClick={() => {
                this.pushtoDB2();
                this.finishQuiz();
              }}
            >
              Finish
            </Button>
          )}

          <li>{this.props.email} yes</li>
        </div>
      );
    }
  }
}
export default Quiz;
