import React from "react";
import Pic1 from "../pictures/student1.png";
import Pic2 from "../pictures/student2.png";
import Pic3 from "../pictures/student3.png";
import Pic4 from "../pictures/student4.png";
import Pic5 from "../pictures/student5.png";
export const Quizdata2 = [
  ///here we have set of  10 Qs with options,picture for student level
  {
    id: 0,
    question: "Should the tractor be turned on or off when fitting this PTO?",
    options: [
      " Sometimes, it depends what the implement is.",
      "You can have the tractor running provided it is in neutral.",
      "It doesn't matter once there is no driver in the cab.",
      "You should never have the tractor running when fixing implements to the machine."
    ],
    answer:
      "You should never have the tractor running when fixing implements to the machine.",
    picture: <img src={Pic1} id="pic1" alt="" />
  },
  {
    id: 1,
    question:
      "What is the correct name for the plastic implements pictured here?",
    options: [
      "Plastic guttering for draining rainwater off the roofs of farm buildings.",
      "Covers for the hydralic arms of a loader.",
      "Power Take Off protective guards",
      "Pipes for draining oil from the tractor engine. "
    ],
    answer: "Power Take Off protective guards",
    picture: <img src={Pic2} id="pic2" alt="" />
  },
  {
    id: 2,
    question:
      "When attaching implements to the 3-point-linkage which one of the following is the correct and safe course of action?",
    options: [
      "The tractor should be stopped, handbrake on and in neutral gear.",
      "The tractor should be stopped but the engine running in idle. ",
      "This linkage is not used in modern tractors.",
      "It doesn't matter if the tractor is running or not as the 3-point-linkage has no moving parts."
    ],
    answer: "The tractor should be stopped, handbrake on and in neutral gear.",
    picture: <img src={Pic3} id="pic3" alt="" />
  },
  {
    id: 3,
    question:
      "This is a Ram (male) sheep. If this animal is in a field, which one of the following is the correct and safe course of action?",
    options: [
      "You can enter the field if necessary as sheep always run away from humans, but it is best to bring a sheepdog.",
      "You can enter the field if necessary as sheep always run away from humans.",
      "Do not enter the field as you might leave the gate opened behind you.",
      "Do not enter the field. Ram sheep can be agressive and unpredictable and therefore dangerous."
    ],
    answer:
      "Do not enter the field. Ram sheep can be agressive and unpredictable and therefore dangerous.",
    picture: <img src={Pic4} id="pic4" alt="" />
  },
  {
    id: 4,
    question:
      "Suppose there is an electrified fence in a field. You would like to climb over the fence. How do you know if you will get an electric shock? What is the correct and safe course of action?",
    options: [
      "Get down on the ground and roll under the bottom stand of wire.",
      "Touch the fence with your hand very quickly as there will not be a big shock off the wire.",
      "Touch the wire with a piece of timber or wood as this will stop the electricty flowing.",
      "Do not enter approach or touch the fence. You have no idea which (or if all) strands of wire are electrified"
    ],
    answer:
      "Do not enter approach or touch the fence. You have no idea which (or if all) strands of wire are electrified",
    picture: <img src={Pic5} id="pic5" alt="" />
  },
  {
    id: 5,
    question: "what should you do?",
    options: ["dont enter", "43", "all fine"],
    answer: "43",
    picture: ""
  },
  {
    id: 6,
    question: "what should you do?",
    options: ["dont enter", "we", "set", "all fine"],
    answer: "set",
    picture: ""
  },
  {
    id: 7,
    question: "what should you do?",
    options: ["dont enter", "we", "quuuuiiiz2", "all fine"],
    answer: "lol",
    picture: ""
  },
  {
    id: 8,
    question: "what should you do?",
    options: ["dont enter", "we", "quiz2", "all fine"],
    answer: "nothing",
    picture: ""
  },

  {
    id: 9,
    question: "what should you do?",
    options: ["dont enter", "we", "qqq", "all fine"],
    answer: "qqq",
    picture: ""
  }
];
function shuffle(array) {
  //fisher-yates algorithm
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
shuffle(Quizdata2); //shuffling the set of questions randomly
export default Quizdata2;
