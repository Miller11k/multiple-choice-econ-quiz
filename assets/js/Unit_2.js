const quizData = [
{
questionNumber: 1,
question: "What is the implied wage and rental rates paid by Creekwood L&L? Crekwood is currently minimizing costs at $400 per hour.",
choices: ["w = $20/hour, r = $10/hour", "w = $40/hour, r = $20/hour", "w = $20/hour, r = $40/hour", "w = $10/hour, r = $20/hour"],
correctAnswer: "d",
image: "/multiple-choice-econ-quiz/images/unit 2/2.27/Q1.png"
},
  
{
questionNumber: 2,
question: "In the function below, what is the short run Total Cost Function, TC(Q)?",
choices: ["25L + 100K", "((1/25)*Q^2) + 10,000", "(1/25)*Q^2", "((525)*Q^2) + 10,000"],
correctAnswer: "b",
image: "/multiple-choice-econ-quiz/images/unit 2/3.3/3.3_Q1.png"
},
  
{
questionNumber: 3,
question: "Refer to the problem below. In the long run, the Marginal Cost function for this firm will be:",
choices: ["Constant", "Upward-Sloping and Linear", "Upward-Sloping and Convex", "Downward Sloping"],
correctAnswer: "a",
image: "/multiple-choice-econ-quiz/images/unit 2/3.3/3.3_Q1.png"
},

{
questionNumber: 4,
question: "Refer to Problem 3 below. 'This production function has diminishing marginal products of labor and capital.'",
choices: ["True", "False", "", ""],
correctAnswer: "a",
image: "/multiple-choice-econ-quiz/images/unit 2/3.3/3.3_Q2.png"
},

{
questionNumber: 5,
question: "Refer to the cost functions below. For what output level is the long run average cost minimized?",
choices: ["Q = 125", "Q = 250", "Q = 375", "Q = 500"],
correctAnswer: "a",
image: "/multiple-choice-econ-quiz/images/unit 2/3.3/3.3_Q3.png"
},
  
{
questionNumber: 6,
question: "Refer to the graph. How would you summarize this firm's situation at the points at which q=20 and q=120?",
choices: ["The firm is maximizing profit at these levels of output.", "The firm is making economic profit at these levels of output.", "The firm is breaking even at these levels of output.", "The firm is making losses at these levels of output."],
correctAnswer: "c",
image: "/multiple-choice-econ-quizimages/unit 2/3.8/3.8.23_ Q1.png"
},
  
{
questionNumber: 7,
question: "Refer to the graph: 'Based on the assumptions, the demand for this firm's output is perfectly elastic.'",
choices: ["True", "False", "", ""],
correctAnswer: "a",
image: "/multiple-choice-econ-quizimages/unit 2/3.8/3.8.23_ Q1.png"
},
  
  
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
imageEl.alt = "";
} else {
imageEl.src = currentQuestion.image;
imageEl.alt = currentQuestion.question;
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
