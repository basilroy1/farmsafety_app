import Pic from "../pictures/saferty_gaurd.jpg";
export const Quizdata5 = [
  ///here we have set of  10 Qs with options,picture for master level
  {
    id: 0,
    question: "what does this sign mean?",
    options: ["123", "quiz5", "yes", "go back"],
    answer: "123",
    picture: Pic
  },
  {
    id: 1,
    question: "what danger is shown?",
    options: ["dont enter", "abcd", "all fine"],
    answer: "abcd",
    picture: ""
  },
  {
    id: 2,
    question: "is this correct?",
    options: ["dont enter", "nothing", "all fine"],
    answer: "nothing",
    picture: ""
  },
  {
    id: 3,
    question: "what should you do?",
    options: ["dont enter", "easy", "all fine", "1"],
    answer: "easy",
    picture: ""
  },
  {
    id: 4,
    question: "what should you do?",
    options: ["dont enter", "12", "we", "all fine"],
    answer: "12",
    picture: ""
  },
  {
    id: 5,
    question: "what should you do?",
    options: ["jackpoottt", "we", "43", "all fine"],
    answer: "43",
    picture: ""
  },
  {
    id: 6,
    question: "what should you do?",
    options: ["jackpoottt", "set", "we", "all fine"],
    answer: "set",
    picture: ""
  },
  {
    id: 7,
    question: "what should you do?",
    options: ["jackpoottt", "we", "lol", "all fine"],
    answer: "lol",
    picture: ""
  },
  {
    id: 8,
    question: "what should you do?",
    options: ["jackpoottt", "we", "nothing", "all fine"],
    answer: "nothing",
    picture: ""
  },
  {
    id: 9,
    question: "what should you do?",
    options: ["jackpoottt", "YOLO", "qqq", "all fine"],
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
shuffle(Quizdata5); //shuffling the set of questions randomly
export default Quizdata5;
