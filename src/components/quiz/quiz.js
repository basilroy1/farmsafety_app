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
      currentQuest: 1
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

  nextQuestion =()=>{
    this.setState({
     currentQuest: this.state.currentQuest +1
    })
    console.log(this.state.currentQuest);
  }

  checkAnswer=()=>{
    if(this.state.answer===this.state.options){
console.log('correct');
    }
  }

  render() {
    //const item ='';
    return (
      <div className="lol">
        {this.state.questions}
      <br></br>

        {this.items = this.state.options.map((item, key) =>
       <Button key={item.id}>{item.options} </Button>
)}
       {/* 
        {this.state.options.map(option,key => (
          <Button key={this.state.options.id} ></Button>
        ))}
       

        {this.state.options} */}
        <br></br>
        <Button onClick={this.checkAnswer}>CHECK</Button>
      </div>
    );
  }
}
export default Quiz;
