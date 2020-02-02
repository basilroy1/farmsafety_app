import React, { Component } from "react";
import "./quiz.css";
import fire from "../../config/fire";
import { FaHorse, FaArrowRight, FaSadTear, FaSmile } from "react-icons/fa";
import { Button, ProgressBar } from "react-bootstrap";
import { Alert } from "reactstrap";
import Questions, { Quizdata } from "./questions";
import { Quizdata2 } from "./questionsLevel2";
import { Quizdata3 } from "./questionsLevel3";
import { Quizdata4 } from "./questionsLevel4";
import { Quizdata5 } from "./questionsLevel5";
import Welcome from "../home/welcome";
import UserProfile from "./userProfile";

//import { Label } from "semantic-ui-react";
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAns: null,
      options: [],
      disabled: false,
      levelDisable: true,
      currentQuest: 0,
      isEnd: false,
      scores: 0,
      pictures: "",
      level1: false,
      level2: false,
      level3: false,
      level4: false,
      level5: false
    };
    //  this.changeToquiz2 = this.changeToquiz2.bind();
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
        pictures: Quizdata2[currentQuest].picture
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
  false;
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

  componentDidMount() {
    if (this.props.userLevel1) {
      this.loadQuiz();
      console.log("Quiz1 loaded"); //loads quiz 1 data in
    } else if (this.props.userLevel2) {
      this.loadQuiz2(); //loads quiz 2 data in
      console.log("Quiz2 loaded");
    } else if (this.props.userLevel3) {
      this.loadQuiz3(); //loads quiz3  data
      console.log("Quiz3 loaded");
    } else if (this.props.userLevel4) {
      this.loadQuiz4(); //loads quiz4  data in
      console.log("Quiz4 loaded");
    } else if (this.props.userLevel5) {
      this.loadQuiz5(); //loads quiz 5 data in
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
    const rookie = this.props.userLevel1;
    const student = this.props.userLevel2;
    const intermediate = this.props.userLevel3;
    const expert = this.props.userLevel4;
    const master = this.props.userLevel5;

    newRef.set({
      ID: fire.auth().currentUser.uid,
      UserEmail: fire.auth().currentUser.email,
      Question: this.state.questions, //Send data to DB to track for analysis
      UserAnswer: this.state.userAns,
      Score: this.state.scores,
      UserLevel: rookie,
      UserLevelStudent: student,
      UserLevelIntermediate: intermediate,
      UserLevelExpert: expert,
      UserLevelMaster: master
    });

    console.log("Sent to Database");
  };

  pushtoDB2 = () => {
    var ref = fire.database().ref("data");
    var newRef = ref.push();
    const rookie = this.props.userLevel1;
    const student = this.props.userLevel2;
    const intermediate = this.props.userLevel3;
    const expert = this.props.userLevel4;
    const master = this.props.userLevel5;
    newRef.set({
      ID: fire.auth().currentUser.uid,
      UserEmail: fire.auth().currentUser.email,
      Question: this.state.questions, //Send data to DB to track for analysis
      UserAnswer: this.state.userAns,
      Score: this.state.scores,
      UserLevel: rookie, ///need to chnage the name of these as it overrides the value in the database
      UserLevelStudent: student,
      UserLevelIntermediate: intermediate,
      UserLevelExpert: expert,
      UserLevelMaster: master
    });

    console.log("Sent to Database");
  };

  disableCheckLevel = () => {
    this.setState({
      levelDisable: false
    });
  };
  nextQuestion = () => {
    const { userAns } = this.state;
    // e.preventDefault();
    if (userAns === null) {
      alert("choose an option");
      return;
    }
    this.setState({
      currentQuest: this.state.currentQuest + 1
    });

    this.setState({
      userAns: null
    });
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
      this.setState({
        scores: scores
      });
      console.log("Wrong");
      //  alert("Correct answer is " + answer);
    }
    console.log("score : " + this.state.scores);
  };

  finishQuiz = () => {
    if (this.state.currentQuest === Quizdata.length - 1) {
      this.setState({
        isEnd: true
      });
    }
  };
  loadQuizComponent = () => {
    return <Quiz />;
  };
  render() {
    const { userAns, scores, options, currentQuest, isEnd } = this.state;
    if (isEnd && scores >= 5) {
      return (
        <div>
          <h3 className="SummaryResults">
            Quiz Finished, You passed {this.state.scores}/{Quizdata.length - 1}{" "}
            <FaSmile />!
          </h3>
          <Button>next challenge</Button>
        </div>
      );
    } else if (isEnd && scores < 5) {
      return (
        <div>
          <h3 className="SummaryResults">
            Quiz Finished, You failed {this.state.scores}/{Quizdata.length - 1}{" "}
            <FaSadTear />!
          </h3>
          <Button onClick={this.loadQuizComponent}>try again</Button>
        </div>
      );
    } else {
      return (
        <div className="quizForm">
          <br></br>
          {/*  <Welcome stateQuiz1={this.changeToquiz2} />*/}

          <div>
            <ProgressBar animated now={this.state.currentQuest * 10} />
          </div>
          {this.state.questions}
          <br></br>
          <p style={{ textAlign: "center" }}>Q{this.state.currentQuest}</p>
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
                this.finishQuiz();
                this.pushtoDB2();
                this.disableCheckLevel();
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
