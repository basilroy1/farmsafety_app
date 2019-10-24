import React, { Component } from "react";
import "./quiz.css";
//import pictures from "../pictures/health_hazard.jpg";
import {
  Button,
  ButtonGroup,
  Badge,
  ButtonToolbar,
  Spinner,
  Alert,
  Item
} from "react-bootstrap";
import Questions, { Quizdata } from "./questions";
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
       answers: "",
        questions: "",
      currentQuest: 0
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
  };

  componentDidMount() {
    this.loadQuiz();
  }

  nextQuestion = e => {
    e.preventDefault();
    this.setState({
      currentQuest: this.state.currentQuest + 1
    });
    console.log(this.state.currentQuest);
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

  checkAnswer = e => {
    e.preventDefault();
    if (this.state.answers !== this.state.options) {
      console.log("correct");
    }
  };

  render() {
    return (
      <div className="lol">
        <br></br>
        {this.state.questions}
        <br></br>
        {this.state.options.map((item ) => 
          <Button className="bigbutton">{item}</Button> /* maps the options on the page*/ 
        )}
        {/*}
        {
          ( this.state.options.map((item, key) => (
            <p className="bigbutton" key={item.id}>
              {item.options}
            </p>
            //console.log(items)
          )))
        }
      */}
        {/* 
        {this.state.options.map(option,key => (
          <Button key={this.state.options.id} ></Button>
        ))}
       
        {this.state.options} */}
        <br></br>
        <Button onClick={this.checkAnswer}>CHECK</Button>

        <Button onClick={this.nextQuestion}>NEXT</Button>
      </div>
    );
  }
}
export default Quiz;
