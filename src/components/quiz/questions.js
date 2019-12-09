import React from "react";
import "./questions";
import Pic from "../pictures/rookie1.png";
import Pic2 from "../pictures/rookie2.PNG";
import Pic3 from "../pictures/rookie3.png";
import Pic4 from "../pictures/rookie4.jpg";
import Pic5 from "../pictures/rookie5.jpg";

export const Quizdata = [
  {
    id: 1,
    question:
      "If you see this sign on a gate or farm entrance what should you do?",
    options: [
      "You should never enter the area where this sign is displayed",
      "You can enter the area, if you know there is no bull present",
      "Sometimes, these signs are wrong. So it is OK to enter if you take care",
      "Most bulls are tame farm pets. You just have to take care"
    ],
    answer: "You should never enter the area where this sign is displayed",
    picture: <img src={Pic} id="pic1" alt="" />
  },
  {
    id: 2,
    question:
      "If you see this symbol on a bottle or container what does it mean?",
    options: [
      "This symbol tells you that the contents of the bottle or container are hazardous and are very dangerous to humans and animals. You should not touch this bootle or container",
      "This symbol is the logo or symbol for famous brands of chemicals",
      "This symbol is the international symbol for weed killer spray",
      "This symbol tells you that the contents of the bottle or container are hazardour and are very dangerous to animals only"
    ],
    answer:
      "This symbol tells you that the contents of the bottle or container are hazardous and are very dangerous to humans and animals. You should not touch this bootle or container",
    picture: <img src={Pic2} alt="" id="pic2" />
  },
  {
    id: 3,
    question:
      "If you see this symbol on a bottle or container what does it mean?",
    options: [
      "This symbol tells you that there is electricity flowing in a system",
      "This symbol tells you that a machine has very dangerous blades or knives which can harm you",
      "This symbol tells you that a food or liquid is out of date",
      "This symbol tells you that this is a biological hazard and it is a serious threat to the health of all living things"
    ],
    answer:
      "This symbol tells you that this is a biological hazard and it is a serious threat to the health of all living things",
    picture: <img src={Pic3} alt="" id="pic3" />
  },
  {
    id: 4,
    question: " Why should children not play with this piece of equipment?",
    options: [
      "It is a boring toy",
      "This ratchet strap has many moving parts and it can cause damage to fingers and hands",
      "This isn't a piece of farm machinery equipment",
      "It doesn't work outside"
    ],
    answer:
      "This ratchet strap has many moving parts and it can cause damage to fingers and hands",
    picture: <img src={Pic4} alt="" id="pic4" />
  },
  {
    id: 5,
    question:
      "What age must you be in Ireland to drive a quad (all terrain vehicle) on a public road?",
    options: ["21 years old", "12 years old", "14 years old", "16 years old"],
    answer: "16 years old",
    picture: <img src={Pic5} alt="" id="pic5" />
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
