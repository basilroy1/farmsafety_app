import React, { Component } from "react";
import "./quiz.css";
import fire from "../../config/fire";
import { FaHorse, FaArrowRight } from "react-icons/fa";
import { Button, ProgressBar } from "react-bootstrap";
import { Alert } from "reactstrap";
import Questions, { Quizdata } from "./questions";
import { Quizdata2 } from "./questionsLevel2";
import { Quizdata3 } from "./questionsLevel3";
import { Quizdata4 } from "./questionsLevel4";
import { Quizdata5 } from "./questionsLevel5";
import Welcome from "../home/welcome";
import Test from "../home/test";

//import { Label } from "semantic-ui-react";
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAns: null,
      options: [],
      disabled: false,
      currentQuest: 0,
      isEnd: false,
      scores: 0,
      pictures: "",
      level1: false,
      level2: false,
      level3: false,
      level4: true,
      level5: false
    };
    this.changeToquiz2 = this.changeToquiz2.bind();
  }
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
  loadQuiz2 = () => {
    const { currentQuest } = this.state;
    //  console.log(Quizdata[2].question);
    this.setState(() => {
      return {
        questions: Quizdata2[currentQuest].question,
        options: Quizdata2[currentQuest].options,
        answer: Quizdata2[currentQuest].answer,
        pictures: Quizdata2[Questions].picture
      };
    });
    console.log(this.state.answer);
  };
  loadQuiz3 = () => {
    const { currentQuest } = this.state;
    //  console.log(Quizdata[2].question);
    this.setState(() => {
      return {
        questions: Quizdata3[currentQuest].question,
        options: Quizdata3[currentQuest].options,
        answer: Quizdata3[currentQuest].answer,
        pictures: Quizdata3[currentQuest].picture
      };
    });
    console.log(this.state.answer);
  };
  loadQuiz4 = () => {
    const { currentQuest } = this.state;
    //  console.log(Quizdata[2].question);
    this.setState(() => {
      return {
        questions: Quizdata4[currentQuest].question,
        options: Quizdata4[currentQuest].options,
        answer: Quizdata4[currentQuest].answer,
        pictures: Quizdata4[currentQuest].picture
      };
    });
    console.log(this.state.answer);
  };
  loadQuiz5 = () => {
    const { currentQuest } = this.state;
    //  console.log(Quizdata[2].question);
    this.setState(() => {
      return {
        questions: Quizdata5[currentQuest].question,
        options: Quizdata5[currentQuest].options,
        answer: Quizdata5[currentQuest].answer,
        pictures: Quizdata5[currentQuest].picture
      };
    });
    console.log(this.state.answer);
  };

  changeToquiz1 = () => {
    this.setState({
      level1: true,
      level2: false,
      level3: false,
      level4: false,
      level5: false
    });
  };

  changeToquiz2 = () => {
    this.setState({
      level1: false,
      level2: true,
      level3: false,
      level4: false,
      level5: false
    });
  };
  changeToquiz3 = () => {
    this.setState({
      level1: false,
      level2: false,
      level3: true,
      level4: false,
      level5: false
    });
  };
  changeToquiz4 = () => {
    this.setState({
      level1: false,
      level2: false,
      level3: false,
      level4: true,
      level5: false
    });
  };
  changeToquiz5 = () => {
    this.setState({
      level1: false,
      level2: false,
      level3: false,
      level4: false,
      level5: true
    });
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
    if (this.state.level1) {
      this.loadQuiz();
      console.log("Quiz1 loaded"); //loads quiz  data in
    }
    if (this.state.level2) {
      this.loadQuiz2(); //loads quiz  data in
      console.log("Quiz2 loaded");
    }
    if (this.state.level3) {
      this.loadQuiz3(); //loads quiz  data i
      console.log("Quiz3 loaded");
    }
    if (this.state.level4) {
      this.loadQuiz4(); //changeToquiz2 quiz  data in
      console.log("Quiz4 loaded");
    }
    if (this.state.level5) {
      this.loadQuiz5(); //loads quiz  data in
      console.log("Quiz5 loaded");
    } else {
      console.log("No user states changed");
    }
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
      UserAnswer: this.state.userAns,
      Score: this.state.scores,
      userLevel: this.state.level1
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
      Score: this.state.scores,
      userLevel: this.state.level1
    });
    console.log("Sent to Database");
  };

  finishQuiz = () => {
    if (this.state.currentQuestion === Quizdata.length - 1) {
      this.setState({
        isEnd: true
      });
      return (
        <h3>
          Quiz Finished, You scored {this.state.scores}/{Quizdata.length - 1}!
        </h3>
      );
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
          <Welcome stateQuiz1={this.changeToquiz2} />
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
              size="lg"
              block
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
                this.chooseLevel1();
              }}
            >
              Finish
            </Button>
          )}
        </div>
      );
    }
  }
}
export default Quiz;
