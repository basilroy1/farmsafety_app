import React, { Component } from "react";
import QuestionBox from "./questionBox";
import "./quiz.css";
//import from "./login"
//import useState from "react";
import fire from "../../config/fire";
import { Button, ButtonGroup, Toast, ProgressBar } from "react-bootstrap";

import Questions, { Quizdata } from "./questions";
//import { Label } from "semantic-ui-react";
class Quiz extends Component {
  state = {
    userAns: null,
    options: [],
    disabled: true,
    currentQuest: 0,
    scores: 0
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

    //console.log(scores);
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
      //console.log(this.state.questions);
    }
  }

  pushtoDB = () => {
    var ref = fire.database().ref("data");
    var newRef = ref.push();
    newRef.set({
      ID: fire.auth().currentUser.uid,
      UserEmail: fire.auth().currentUser.email,
      Question: this.state.questions, //Send data to DB to track for analysis
      UserAnswer: this.state.userAns

      // CorrectAnswer: this.state.answer
    });

    console.log("Sent to Database");
  };

  render() {
    const { userAns, options, currentQuest } = this.state;
    return (
      <div className="lol">
        <br></br>
        <div>
          <ProgressBar animated now={this.state.currentQuest * 9} />
        </div>
        {this.state.questions}
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
        <Button onClick={() => this.checkAns()}>CHECK</Button>
        <Button
          onClick={() => {
            this.nextQuestion();
            this.pushtoDB();
          }}
        >
          NEXT
        </Button>

        <br></br>

        {currentQuest === Quizdata.length ? alert("Quiz FINISHED") : null}
        <span>Quiz score : {this.state.scores}</span>
      </div>
    );
  }
}
export default Quiz;
