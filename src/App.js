import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';
import Home from './components/home/home';
import Quiz from './components/quiz/quiz';

class App extends Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <Quiz/>
      </header>
    </div>
  );
}
}

export default App;
