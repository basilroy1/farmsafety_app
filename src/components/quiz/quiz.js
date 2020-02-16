import React, { Component } from "react";
import "./quiz.css";
import fire from "../../config/fire";
import { FaHorse, FaArrowRight, FaSadTear, FaSmile } from "react-icons/fa";
//import { MdClose } from "react-icons/md";
import { Button, ProgressBar } from "react-bootstrap";
import { Alert } from "reactstrap";
import Questions, { Quizdata } from "./questions";
import { Quizdata2 } from "./questionsLevel2";
import { Quizdata3 } from "./questionsLevel3";
import { Quizdata4 } from "./questionsLevel4";
import { Quizdata5 } from "./questionsLevel5";
import Welcome from "../home/welcome";
import UserProfile from "./userProfile";
import { GiThunderSkull } from "react-icons/gi";
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
      people: [],
      scores: 0,
      pictures: "",
      count: 0,
      level1: false,
      level2: false,
      level3: false,
      level4: false,
      level5: false,
      correct: true
    };
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
      RankValue: rankVal
    });
    //this.props.DBdata();
    console.log("Sent to Database");
  };
  /*
  pushtoDB2 = () => {
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
      UserLevel: rookie, ///need to change the name of these as it overrides the value in the database
      UserLevelStudent: student,
      UserLevelIntermediate: intermediate,
      UserLevelExpert: expert,
      UserLevelMaster: master,
      RankValue: rankVal
    });
    // this.props.DBdata();
    console.log("Sent to Database");
  };
  */
  /*updatedData = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        var ref = fire
          .database()
          .ref("data")
          .limitToLast(1);
        //takes the last data in DB

        var userUID = fire.auth().currentUser.uid;
        var query = ref.orderByChild("ID").equalTo(userUID); //retrieves data about only the current logged in user
        console.log(userUID);
        query.once("value", snapshot => {
          let currentState = this.state.people;

          const currentUser = snapshot.val();
          for (let i in currentUser) {
            currentState.push({
              email: currentUser[i].UserEmail,
              UserAnswer: currentUser[i].UserAnswer,
              Questions: currentUser[i].Question,
              id: currentUser[i].ID,
              Score: currentUser[i].Score,
              levelRook: currentUser[i].UserLevel,
              levelStudent: currentUser[i].UserLevelStudent,
              levelIntermediate: currentUser[i].UserLevelIntermediate,
              levelExpert: currentUser[i].UserLevelExpert,
              levelMaster: currentUser[i].UserLevelMaster,
              rank: currentUser[i].RankValue
            });
          }

          // currentState.push(user);
          console.log("new updated DB in quiz" + currentState);
          //  this.rankData(); //setting rank value from DB

          this.setState({
            people: currentState
            // dataHasLoaded: true
          });
        });
      } else {
        console.log("no user");
      }
    });
  };
  */
  nextQuestion = () => {
    const { scores, correct, answer, userAns } = this.state;
    if (userAns === null) {
      return;
    }
    // e.preventDefault();
    /*  if (correct) {
      console.log("Correct");
      this.setState({
        scores: scores + 1
      });
    } else {
      this.setState({ scores: scores });
      console.log("Wrong");
    }
    console.log("scores " + this.state.scores);
*/
    if (userAns === answer) {
      console.log("Correct");

      this.setState({
        scores: scores + 1
        // correct: false
      });
    } else {
      this.setState({ scores: scores });

      //  alert("Correct Answer is " + answer);
      //);
    }
    console.log("scores " + this.state.scores);
    this.setState({
      currentQuest: this.state.currentQuest + 1
    });
  };

  checkAns = answer => {
    const { userAns } = this.state;
    //userans and answer switched
    this.setState({
      userAns: answer,
      disabled: false
    });

    /*  if (userAns === answer) {
      console.log("Correct");
      this.setState({
        correct: true
      });
    } else {
      this.setState({
        correct: false
      });
    }
    */

    //  alert("Correct answer is " + answer);
    //  console.log(userAns);
  };

  finishQuiz = () => {
    const { scores } = this.state;

    if (this.state.currentQuest === Quizdata.length - 1) {
      this.setState({
        isEnd: true
        //  d: this.props.current
      });
    }
    /*  if (this.state.correct) {
      // last question score updation here as cant be done in nextquestion function due to out of bounds
      console.log("Correct on finish");
      console.log("scores before update " + this.state.scores);
      this.setState({
        scores: this.state.scores + 1
      });
    } else {
      this.setState({ scores: scores });
      console.log("Wrong");
    }
    console.log("scores after updation " + this.state.scores);
*/
    // this.props.DBdata();
    //console.log("Sent to Database from on finish");
    /* setTimeout(() => {
        this.setState({
          isEnd: false
        });
      }, 3500);
      */
    console.log("rank " + this.props.rankValue);
  };

  render() {
    const { userAns, scores, options, currentQuest, isEnd } = this.state;
    if (isEnd && scores >= 5) {
      return (
        <div>
          <h3 className="SummaryResultsPass">
            Quiz Finished, You passed {this.state.scores}/{Quizdata.length - 1}{" "}
            <FaSmile />!
          </h3>

          <Button onClick={this.props.articleVal}>next challenge</Button>
        </div>
      );
    } else if (isEnd && scores < 5) {
      return (
        <div>
          <h3 className="SummaryResultsFail">
            Quiz Finished, You failed {this.state.scores}/{Quizdata.length - 1}{" "}
            <FaSadTear />!
          </h3>
          <Button
            id="tryagain"
            onClick={() => {
              this.props.tryAgain();
              this.props.tryAgain2();
            }}
          >
            Try Again
          </Button>
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
          <p style={{ textAlign: "center" }}>Q{this.state.currentQuest}</p>
          {this.state.pictures}
          <br></br>

          {options.map((option, id) => (
            <Button
              size="lg"
              block
              key={id}
              className={`ui floating message options
            ${userAns === option ? "selected" : null}
           `}
              onClick={() => this.checkAns(option)}
            >
              {option}
            </Button>
          ))}
          {this.state.correct ? null : (
            <Alert color="warning">correct answer is {this.state.answer}</Alert>
          )}
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
                // this.updatedData();
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
                this.pushtoDB();
                this.props.handleDisableValue(scores); // child to parent
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
