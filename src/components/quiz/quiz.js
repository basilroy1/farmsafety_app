import React, { Component } from "react";
import QuestionBox from "./questionBox";
import "./quiz.css";
import useState from "react";
import fire from "../../config/fire";
import { Button, ButtonGroup, Toast } from "react-bootstrap";

import Questions, { Quizdata } from "./questions";
import { Label } from "semantic-ui-react";
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAns: null,
      options: [],
      //  questions: "",
      disabled: true,
      currentQuest: 0,
      scores: 0
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
    console.log(this.state.questions);
  };

  nextQuestion = e => {
    // e.preventDefault();
    const { userAns, score } = this.state;

    this.setState({
      currentQuest: this.state.currentQuest + 1
    });
    // console.log(this.state.currentQuest);
  };

  checkAns = answer => {
    const { userAns, scores } = this.state;

    this.setState({
      userAns: answer,
      disabled: false
    });
    if (userAns === answer) {
      console.log("correct");
      this.setState({
        scores: scores + 1
      });
    } else {
      console.log("Wrong");
    }
    console.log(userAns);
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

  /*
  ANSWER = option => {
    const [answer, setAnswer] = useState(option);

    {
      answer.map((text, index) => (
        <Button
          key={index}
          onClick={() => {
            setAnswer([text]);
          }}
        >
          {text}
        </Button>
      ));
    }
  };
*/
  render() {
    const { userAns, options, currentQuest } = this.state;
    return (
      <div className="lol">
        <br></br>
        {this.state.questions}
        <br></br>

        {options.map(option => (
          <Button
            key={option.id}
            className={`ui floating message options
            ${userAns === option ? "selected" : null}
           `}
            onClick={() => this.checkAns(option)}
            // key={id}
            //  question={questions}
            // option={options}
            // answer={answers}
            // selected={answer => this.checkAns(answer, option)}
            //  onClick={this.ANSWER}
          >
            {option}
          </Button>
        ))}

        <br></br>
        <Button onClick={() => this.checkAns()}>CHECK</Button>
        <Button onClick={this.nextQuestion}>NEXT</Button>
        <br></br>

        {currentQuest === Quizdata.length - 1 ? alert("Quiz FINISHED") : null}
        <span>Quiz score : {this.state.scores}</span>
      </div>
    );
  }
}
export default Quiz;
