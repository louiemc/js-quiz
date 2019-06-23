// PSEUDO CODING
// need to declare variable for the document.getElementbyId for quiz, results and submit button
let quizDiv = document.getElementById("quiz");
let resultsDiv = document.getElementById('results');
let submitBtn = document.getElementById("submitBtn");

// need functions to load quiz, show results to player, onsubmit show the results (onClick or something);
function loadQuiz() {
  
}
loadQuiz();

function quizResults() {

}

submitBtn.addEventListener("click", quizResults());

//need to display questions
// Questions
let question = [
  {
    question: "What is your name?",
    opt1: "Nemo",
    opt2: "Dory",
    opt3: "Mulan",
    answer: "opt3"
  },
  {
    question: "What is your house?",
    opt1: "cat",
    opt2: "badger",
    opt3: "bird",
    answer: "snake"
  },
  {
    question: "What is your animal?",
    opt1: "pigeon",
    opt2: "slug",
    opt3: "mantis",
    answer: "pigeon"
  }
];

// // Game Functions
// function loadGame() {

//   let questionDiv = document.getElementById("question");
//   let optionsDiv = document.getElementById("options");
//   let correctDiv = document.getElementById("correct");
//   let incorrectDiv = document.getElementById("incorrect");

//   let incorrect = 0;
//   let correct = 0;

//   let pickedQuestion = questions[Math.floor(Math.random() * questions.length)];
//   console.log(pickedQuestion);

// }
// loadGame();
