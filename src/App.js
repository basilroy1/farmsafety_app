import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
import Quiz from "./components/quiz/quiz";

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <div>
          <Quiz />
        </div>
      </div>
    );
  }
}

export default App;
