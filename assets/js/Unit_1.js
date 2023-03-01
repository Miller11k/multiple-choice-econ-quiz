const quizData = [
  {
    questionNumber: 1,
    question: "Price has 3 functions in a market. Which of the following is NOT among them?",
    choices: ["Ration Demand", "Signal producers to produce more or less of goods.", "Signal the quality of goods to consumers.", "Signal producers to enter or exit markets."],
    correctAnswer: "d",
  },
  
  {
    questionNumber: 2,
    question: "Which of the following is NOT a property of indifference curves for two goods?",
    choices: ["Downwards sloping", "Bowed toward the origin.", "Increase utility with proximity to origin", "Do not intersect one another"],
    correctAnswer: "c",
    image: ""
  },
  
  {
    questionNumber: 3,
    question: "If a person's utility function is as shown below, what is the function for graphing the indifference curves (with X1 on the horizontal axis)?",
    choices: ["X2", "U/X2", "U/X1", "1/U"],
    correctAnswer: "c",
    image: ""
  },
  
  {
    questionNumber: 4,
    question: "What value of 'x' maximizes (minimizes) the function below",
    choices: ["x = -b/2a", "x = (-b +/- SQRT(b^2-4ac))/2a", "x = 0", "x = (2ab^2 - b^2)/4a"],
    correctAnswer: "c",
    image: ""
  },
  
  {
    questionNumber: 5,
    question: "For a utility function with a power functional form, marginal utility is:",
    choices: ["Never diminishing.", "Always diminishing.", "Diminishing if the exponent is greater than 1.", "Diminshing if the exponent is less than 1."],
    correctAnswer: "c",
    image: ""
  },  
  
  {
    questionNumber: 6,
    question: "Who is Consumer 1?",
    choices: ["Joey", "Phoebe", "Rachel", "Monica"],
    correctAnswer: "a",
    image: ""
  },
   {
    questionNumber: 7,
    question: "Who is Consumer 2?",
    choices: ["Joey", "Phoebe", "Rachel", "Monica"],
    correctAnswer: "b",
    image: ""
  }
];

let currentQuestionIndex = 0;

const questionNumberEl = document.getElementById("question-number");
const questionEl = document.getElementById("question");
const choiceAEls = document.getElementById("choice-a");
const choiceBEls = document.getElementById("choice-b");
const choiceCEls = document.getElementById("choice-c");
const choiceDEls = document.getElementById("choice-d");
const resultEl = document.getElementById("result");
const imageEl = document.getElementById("question-image");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionNumberEl.innerHTML = "Question " + currentQuestion.questionNumber;
  questionEl.innerHTML = currentQuestion.question;
  choiceAEls.nextElementSibling.textContent = currentQuestion.choices[0];
  choiceBEls.nextElementSibling.textContent = currentQuestion.choices[1];
  choiceCEls.nextElementSibling.textContent = currentQuestion.choices[2];
  choiceDEls.nextElementSibling.textContent = currentQuestion.choices[3];

  if (currentQuestion.image === "") {
    imageEl.src = "";
  } else {
    imageEl.src = currentQuestion.image;
  }
}

function resetAnswer() {
const radios = document.getElementsByName("answer");
for (let i = 0; i < radios.length; i++) {
radios[i].checked = false;
}
}

function checkAnswer() {
const currentQuestion = quizData[currentQuestionIndex];
const radios = document.getElementsByName("answer");
let answer = undefined;
for (let i = 0; i < radios.length; i++) {
if (radios[i].checked) {
answer = radios[i].value;
break;
}
}
if (answer === undefined) {
resultEl.innerHTML = "Please select an answer.";
return;
}
if (answer === currentQuestion.correctAnswer) {
resultEl.innerHTML = "Correct!";
} else {
resultEl.innerHTML = "Incorrect.";
}
}

function nextQuestion() {
resetAnswer();
currentQuestionIndex++;
if (currentQuestionIndex >= quizData.length) {
currentQuestionIndex = quizData.length - 1;
}
loadQuestion();
resultEl.innerHTML = "";
}

function previousQuestion() {
resetAnswer();
currentQuestionIndex--;
if (currentQuestionIndex < 0) {
currentQuestionIndex = 0;
}
loadQuestion();
resultEl.innerHTML = "";
}

document.getElementById("prev-btn").addEventListener("click", previousQuestion);
document.getElementById("submit-btn").addEventListener("click", checkAnswer);
document.getElementById("next-btn").addEventListener("click", nextQuestion);

loadQuestion();
