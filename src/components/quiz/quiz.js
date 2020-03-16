import React, { Component } from "react";
import "./quiz.css";
import fire from "../../config/fire";
import {
  FaArrowRight,
  FaSadTear,
  FaSmile,
  FaLightbulb,
  FaCheckCircle,
  FaThumbsDown,
  FaThumbsUp,
  FaWindowClose,
  FaTractor
} from "react-icons/fa";
import { MdClose, MdTimer } from "react-icons/md";
import { Button, ProgressBar } from "react-bootstrap";
import { Alert } from "reactstrap";
import { Quizdata } from "./questions";
import { Quizdata2 } from "./questionsLevel2";
import { Quizdata3 } from "./questionsLevel3";
import { Quizdata4 } from "./questionsLevel4";
import { Quizdata5 } from "./questionsLevel5";
import { Divider } from "@material-ui/core";
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAns: null,
      options: [],
      disabled: false,
      currentQuest: 0,
      isEnd: false,
      people: [],
      limitedQuestion: 4,
      scores: 0,
      pictures: "",
      level1: false,
      level2: false,
      level3: false,
      level4: false,
      level5: false
    };
  }
  loadQuiz = () => {
    const { currentQuest } = this.state;
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
    this.setState(() => {
      return {
        questions: Quizdata5[currentQuest].question,
        options: Quizdata5[currentQuest].options,
        answer: Quizdata5[currentQuest].answer,
        pictures: Quizdata5[currentQuest].picture
      };
    });
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

    if (this.props.userLevel1) {
      if (this.state.currentQuest !== prevState.currentQuest) {
        this.setState({
          disabled: true,
          questions: Quizdata[currentQuest].question,
          options: Quizdata[currentQuest].options,
          answer: Quizdata[currentQuest].answer,
          pictures: Quizdata[currentQuest].picture
        });
      }
    } else if (this.props.userLevel2) {
      if (this.state.currentQuest !== prevState.currentQuest) {
        this.setState({
          disabled: true,
          questions: Quizdata2[currentQuest].question,
          options: Quizdata2[currentQuest].options,
          answer: Quizdata2[currentQuest].answer,
          pictures: Quizdata2[currentQuest].picture
        });
      }
    } else if (this.props.userLevel3) {
      if (this.state.currentQuest !== prevState.currentQuest) {
        this.setState({
          disabled: true,
          questions: Quizdata3[currentQuest].question,
          options: Quizdata3[currentQuest].options,
          answer: Quizdata3[currentQuest].answer,
          pictures: Quizdata3[currentQuest].picture
        });
      }
    } else if (this.props.userLevel4) {
      if (this.state.currentQuest !== prevState.currentQuest) {
        this.setState({
          disabled: true,
          questions: Quizdata4[currentQuest].question,
          options: Quizdata4[currentQuest].options,
          answer: Quizdata4[currentQuest].answer,
          pictures: Quizdata4[currentQuest].picture
        });
      }
    } else if (this.props.userLevel5) {
      if (this.state.currentQuest !== prevState.currentQuest) {
        this.setState({
          disabled: true,
          questions: Quizdata5[currentQuest].question,
          options: Quizdata5[currentQuest].options,
          answer: Quizdata5[currentQuest].answer,
          pictures: Quizdata5[currentQuest].picture
        });
      }
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
    const rankVal = this.props.rankValue;

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
      UserLevelMaster: master,
      RankValue: rankVal,
      LastLogin: this.props.time
    });
    console.log("Sent to Database");
  };

  nextQuestion = () => {
    const { scores, answer, userAns } = this.state;
    if (userAns === null) {
      alert("select an option");
      return;
    }

    if (this.state.currentQuest === this.state.limitedQuestion) {
      this.setState({
        currentQuest: this.state.currentQuest
      });
    } else {
      this.setState(
        {
          currentQuest: this.state.currentQuest + 1,
          scores: userAns === answer ? scores + 1 : scores
        },
        () => {
          this.pushtoDB();
          console.log("scores " + this.state.scores);
        }
      );
    }
    if (userAns === answer) {
      console.log("Correct");
    } else {
      console.log("wrong");
    }
  };

  checkAns = answer => {
    //userans and answer switched
    this.setState({
      userAns: answer,
      disabled: false
    });

    //  alert("Correct answer is " + answer);
  };

  percentageCalculation = () => {
    var x = Math.round(this.state.limitedQuestion * 0.5);
    return x;
  };
  finishQuiz = () => {
    if (this.state.currentQuest === this.state.limitedQuestion - 1) {
      if (this.state.userAns === this.state.answer) {
        console.log("Correct");
      }
      this.setState(
        {
          isEnd: true,
          scores:
            this.state.userAns === this.state.answer
              ? this.state.scores + 1
              : this.state.scores
        },
        () => {
          this.pushtoDB();
          console.log("scores " + this.state.scores);
        }
      );
    } else {
      console.log("didnt enter");
    }
    console.log("rank " + this.props.rankValue);
  };

  render() {
    var incorrect = this.state.limitedQuestion - this.state.scores;
    const { userAns, scores, options, currentQuest, isEnd } = this.state;
    if (
      scores >= this.percentageCalculation() &&
      this.props.quizFinished &&
      isEnd
    ) {
      return (
        <div className="QuizCompleted">
          <h3>
            <Alert style={{ textAlign: "center" }} color="success">
              {" "}
              Quiz Finished
            </Alert>
          </h3>
          <br />
          <h1>
            <strong>Results</strong>
          </h1>
          <Divider />
          <br />
          <p>Incorrect No. of Questions : {incorrect}</p>
          <p>No. of Questions Attempted : {this.state.limitedQuestion}</p>
          <p className="results">
            <strong>Final Score :</strong> {this.state.scores}/
            {this.state.limitedQuestion} <FaSmile />!<br />{" "}
            <strong> You Passed </strong> <FaThumbsUp color="black" size={23} />
            <br />
            <FaTractor />{" "}
            <strong>
              {" "}
              Congratulations on Completing the Farm Safety Guide!!
              <FaTractor />
            </strong>
          </p>

          <p className="Tips">
            <br />
            <strong style={{ fontSize: 20 }}>
              <br />
              <Divider />
              Tips
              <FaLightbulb color="yellow" size={20} />
            </strong>

            <li>
              You have mastered the safety Guide but it does not mean you know{" "}
              <strong>all possible safety/dangers</strong>.
            </li>
          </p>
          <Button
            id="nextChallenge"
            variant="success"
            onClick={() => {
              this.props.stateHiddenQuiz(true);
            }}
          >
            Go Back To Home
          </Button>
        </div>
      );
    } else if (isEnd && scores >= this.percentageCalculation()) {
      return (
        <div className="SummaryResultsPass">
          <h3>
            <Alert style={{ textAlign: "center" }} color="success">
              {" "}
              Quiz Finished
            </Alert>
          </h3>
          <br />
          <h1>
            <strong>Results</strong>
          </h1>
          <Divider />
          <br />
          <p>Incorrect No. of Questions : {incorrect}</p>
          <p>No. of Questions Attempted : {this.state.limitedQuestion}</p>
          <p className="results">
            <strong>Final Score :</strong> {this.state.scores}/
            {this.state.limitedQuestion} <FaSmile />!<br />{" "}
            <strong> You Passed </strong> <FaThumbsUp color="black" size={23} />
          </p>

          <p className="Tips">
            <br />
            <strong style={{ fontSize: 20 }}>
              <br />
              <Divider />
              Tips
              <FaLightbulb color="yellow" size={20} />
            </strong>

            <li>
              Read over the Article paying particular for the next Challenges{" "}
              <strong>Attention to the Key Terms and Pictures</strong>.
            </li>
            <li>
              Take Your time there are no <strong>Time Limits</strong>
              <MdTimer size={20} />.
            </li>
          </p>
          <Button
            id="nextChallenge"
            variant="success"
            onClick={() => {
              this.props.stateHiddenQuiz(true);
            }}
          >
            Next Challenge
          </Button>
        </div>
      );
    } else if (isEnd && scores < this.percentageCalculation()) {
      return (
        <div className="SummaryResultsFail">
          <h3>
            <Alert style={{ textAlign: "center" }} color="danger">
              {" "}
              Quiz Finished
            </Alert>
          </h3>
          <br />
          <h1>
            <strong>Results</strong>
          </h1>
          <Divider />
          <br />
          <p>Incorrect No. of Questions : {incorrect}</p>
          <p>No. of Questions Attempted : {this.state.limitedQuestion}</p>
          <p className="results">
            <strong>Final Score :</strong> {this.state.scores}/
            {this.state.limitedQuestion} <FaSadTear />!<br />{" "}
            <strong> You Failed </strong> <FaThumbsDown color="red" size={23} />
          </p>

          <p className="Tips">
            <br />
            <strong style={{ fontSize: 20 }}>
              <br />
              <Divider />
              Tips
              <FaLightbulb color="yellow" size={20} />
            </strong>

            <li>
              Read over the Article again paying particular{" "}
              <strong>Attention to the Key Terms and Pictures</strong>.
            </li>
            <li>
              Take Your time while reading the Questions as there are no{" "}
              <strong>Time Limits</strong>
              <MdTimer size={20} />.
            </li>
          </p>
          <Button
            id="tryagain"
            variant="warning"
            onClick={() => {
              this.props.stateHiddenQuiz(true);
            }}
          >
            Try Again
          </Button>
        </div>
      );
    } else {
      return (
        <div className="quizForm">
          <div id="leaveQuiz">
            <Button
              variant="danger"
              onClick={() => {
                this.props.hideQuiznDisplay(false);
              }}
            >
              <MdClose size={40} />
            </Button>
          </div>
          <br />
          <br />
          <div>
            <ProgressBar
              animated
              now={this.state.currentQuest * (100 / this.state.limitedQuestion)}
            />
          </div>
          {this.state.questions}
          <br></br>
          <p style={{ textAlign: "center" }}>Q{this.state.currentQuest + 1}</p>
          {this.state.pictures}
          <br></br>
          {options.map((option, id) => (
            <Button
              key={id}
              size="lg"
              block
              className={`ui floating message options
            ${userAns === option ? "selected" : null}
           `}
              onClick={() => {
                this.checkAns(option);
              }}
            >
              {option}
              {userAns === option &&
              this.state.userAns === this.state.answer ? (
                <Alert color="success">
                  Correct <FaCheckCircle size={36} />
                </Alert>
              ) : null}
              {userAns === option &&
              this.state.userAns !== this.state.answer ? (
                <Alert
                  style={{
                    fontSize: 30,
                    backgroundColor: "rgb(255, 182, 182)",
                    color: "rgb(236, 19, 19)"
                  }}
                >
                  Wrong <FaWindowClose size={36} />
                </Alert>
              ) : null}
            </Button>
          ))}

          <br></br>
          {currentQuest < this.state.limitedQuestion - 1 && (
            <Button
              disabled={this.state.disabled}
              onClick={() => {
                this.nextQuestion();
              }}
            >
              NEXT <FaArrowRight />
            </Button>
          )}
          <br></br>
          {currentQuest === this.state.limitedQuestion - 1 && (
            <Button
              onClick={() => {
                this.finishQuiz();
                this.props.handleDisableValue(
                  scores,
                  this.state.limitedQuestion
                ); // child to parent
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
