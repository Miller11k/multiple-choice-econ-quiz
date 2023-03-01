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
