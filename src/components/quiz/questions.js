import React, { Component } from "react";
import Pic from "../pictures/saferty_gaurd.jpg";
import Pic2 from "../pictures/userprofilepic.jpg";
import Pic3 from "../pictures/piechartMachinery.jpg";
import Pic4 from "../pictures/farm_danger.jpeg";

export const Quizdata = [
  {
    id: 1,
    question: "what does this sign mean?",
    options: ["123", "stop", "yes", "go back"],
    answer: "123",
    picture: <img src={Pic} />
  },
  {
    id: 2,
    question: "what danger is shown?",
    options: ["dont enter", "abcd", "all fine"],
    answer: "abcd",
    picture: <img src={Pic2} />
  },
  {
    id: 3,
    question: "is this correct?",
    options: ["dont enter", "nothing", "all fine"],
    answer: "nothing",
    picture: <img src={Pic3} />
  },
  {
    id: 4,
    question: "what should you do?",
    options: ["dont enter", "easy", "all fine", "1"],
    answer: "easy",
    picture: <img src={Pic4} />
  },
  {
    id: 5,
    question: "what should you do?",
    options: ["dont enter", "12", "all fine"],
    answer: "12",
    picture: ""
  },
  {
    id: 6,
    question: "what should you do?",
    options: ["dont enter", "43", "all fine"],
    answer: "43",
    picture: ""
  },
  {
    id: 7,
    question: "what should you do?",
    options: ["dont enter", "set", "all fine"],
    answer: "set",
    picture: ""
  },
  {
    id: 8,
    question: "what should you do?",
    options: ["dont enter", "lol", "all fine"],
    answer: "lol",
    picture: ""
  },
  {
    id: 9,
    question: "what should you do?",
    options: ["dont enter", "nothing", "all fine"],
    answer: "nothing",
    picture: ""
  },
  {
    id: 10,
    question: "what should you do?",
    options: ["dont enter", "yup", "all fine"],
    answer: "yup",
    picture: ""
  },
  {
    id: 10,
    question: "what should you do?",
    options: ["dont enter", "xd", "all fine"],
    answer: "xd",
    picture: ""
  }
];
export default Quizdata;
