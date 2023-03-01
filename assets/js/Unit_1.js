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
    question: "If the goal is to model utility using a power function, does the function below 'work'? In particular does it have the properties of positive AND diminishing marginal utility? ",
    choices: ["Yes", "No"],
    correctAnswer: "b",
    image: ""
  },
  
  {
    questionNumber: 8,
    question: "The utility function below is:",
    choices: ["Not homogeneous", "Homogeneous of degree (X+Y)", "Homogeneous of degree (a+b)", "Homogeneous of degree (1-a-b)"],
    correctAnswer: "a",
    image: ""
  },
  
  {
    questionNumber: 9,
    question: "If you multiplied both exponents in this utility function by 2, the MRS would be the same (as before multiplying exponents):",
    choices: ["True", "False"],
    correctAnswer: "a",
    image: ""
  },
  
  {
    questionNumber: 10,
    question: "If you look at two points in a goods space (like the one below) that both give the same level of utility, points lying on a straight line connecting them PROBABLY:",
    choices: ["Lie on a higher indifference curve than the two points", "Lie on the same indifference curve as the two points", "Lie on a lower indifference curve than the two points"],
    correctAnswer: "b",
    image: ""
  },
  
  {
    questionNumber: 11,
    question: "In a good space with hand soap on the horizontal and laundry detergent on the vertical, a person currently has a bundle where the |MRS| is greater than the |price ratio|. This situation reccomends:",
    choices: ["Buying more detergent and less hand soap", "Buying more hand soap and less detergent", "Continue to consume this bundle since utility is maximized"],
    correctAnswer: "a",
    image: ""
  },
  
  {
    questionNumber: 12,
    question: "The person on the document camera gets utility from homemade pies, which consist of a filling (made of eggs, G) and a crust (C). With the given prices and income, how many eggs will the person buy, if (s)he is maximizing utility?",
    choices: ["10", "12", "25/3", "120"],
    correctAnswer: "a",
    image: ""
  },
  
  {
    questionNumber: 13,
    question: "Refer to Problem 3.3 below. How much peanut butter and jelly will David buy with his $3/month allowance (if he maximizes his utiliity)?",
    choices: ["15 oz. jelly; 15 oz. peanut butter.", "15 oz. jelly; 30 oz. peanut butter.", "30 oz. jelly; 60 oz. peanut butter.", "30 oz. jelly; 30 oz. peanut butter."],
    correctAnswer: "a",
    image: ""
  },
  
  {
    questionNumber: 14,
    question: "Refer to Problem 3.3 below. Suppose the price of jelly rises to $0.15/oz. By how much would David's allowance have to rise to compensate for the increase in the price of jelly?",
    choices: ["$0.60", "$0.75", "$1.00", "$3.00"],
    correctAnswer: "a",
    image: ""
  },
  
  {
    questionNumber: 15,
    question: "If the prices (P) and David's income (M) were assumed to be variable, what would David's demand function for jelly be? Note: in the following, assume 0<a<1.",
    choices: ["J = (aM)/(P_J)", "J = (aM)/(P_J + 2P_B)", "J = (M)/(P_J + 2P_B)", "J = (aM)/(2P_J + P_B)"],
    correctAnswer: "a",
    image: ""
  },
  
  {
    questionNumber: 16,
    question: "The (own) price elasticity of David's demand is -1, the same as with the Cobb-Douglas demand function:",
    choices: ["True", "False"],
    correctAnswer: "a",
    image: ""
  },
  
  {
    questionNumber: 17,
    question: "The CES 'family' (perfect sub's, comp's, C-D) is always homothetic. 'This means that there can be no inferior goods in these utility functions.':",
    choices: ["True", "False"],
    correctAnswer: "a",
    image: ""
  },
  
  {
    questionNumber: 18,
    question: "What is the income elasticity of David's demand for Jelly?",
    choices: ["1/(P_J + 2P_B)", "1", "1/3(P_J + 2P_B)", "1/3"],
    correctAnswer: "a",
    image: ""
  },
  
  
  {
    questionNumber: 19,
    question: "According to the Engle Curve graph, above income M 'bar', this good is:",
    choices: ["Normal", "Inferior", "A Luxury"],
    correctAnswer: "a",
    image: ""
  },
  
  {
    questionNumber: 20,
    question: "This goods space ({X, Y}, on below) is showing:",
    choices: ["A price increase for a normal good", "A price decrease for a normal good", "A price increase for an inferior good", "A price decrease for an inferior good"],
    correctAnswer: "a",
    image: ""
  },
  
  {
    questionNumber: 21,
    question: "This goods space ({X, Y}, below) is showing:",
    choices: ["A price increase with one normal and one inferior good.", "A price increase with two normal goods.", "A price increase with two inferior goods", "A price decrease with one normal and one inferior good"],
    correctAnswer: "a",
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
