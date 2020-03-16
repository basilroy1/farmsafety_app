import Pic from "../pictures/saferty_gaurd.jpg";
export const Quizdata3 = [
  {
    id: 0,
    question: "what does this sign mean?",
    options: ["123", "quiz3", "yes", "go back"],
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
    options: ["okokokokokoko", "we", "nothing", "all fine"],
    answer: "nothing",
    picture: ""
  },
  {
    id: 3,
    question: "what should you do?",
    options: ["okokokokokoko", "easy", "all fine", "1"],
    answer: "easy",
    picture: ""
  },
  {
    id: 4,
    question: "what should you do?",
    options: ["okokokokokoko", "we", "12", "all fine"],
    answer: "12",
    picture: ""
  },
  {
    id: 5,
    question: "what should you do?",
    options: ["okokokokokoko", "we", "43", "all fine"],
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
    options: ["dont enter", "we", "lol", "all fine"],
    answer: "lol",
    picture: ""
  },
  {
    id: 8,
    question: "what should you do?",
    options: ["dont enter", "we", "nothing", "all fine"],
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
shuffle(Quizdata3);
export default Quizdata3;
