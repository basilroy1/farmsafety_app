import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
import Quiz from "./components/quiz/quiz";
import Test from "./components/quiz/test";
import Login from "./components/quiz/login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Quiz />
        </div>
        <Login />
      </div>
    );
  }
}

export default App;
