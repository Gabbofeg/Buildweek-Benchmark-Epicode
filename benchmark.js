const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let strAnswer = "";

const arAnswerContainer = []; // array che mi contiene le risposte: 1 = risposta corretta, 0 = risposta sbagliata

let rightAnswerCounter = 0;

// oggetto HTML che conterrà il risultato del quiz
const objQuestionText = document.querySelector(".questionLog");

//oggetto HTML che contiene la domanda del quiz
const objQuestionDisplay = document.getElementById("question");

// oggetto HTML che visualizza le risposte multiple e contiene i radio button
const objDisplay = document.getElementById("customRadio");

//oggetto HTML che è un contatore delle domande
const objCounter = document.getElementById("txtCounter");

// oggetto HTML, è il bottone continua che permetta di andare avanti nel quiz
const objBtnContinue = document.getElementById("btnContinue");
objBtnContinue.addEventListener("click", nextQuestion);

// oggetto HTML che visualizza il numero della domanda alla quale l'utente è arrivato
const objLefSpan = document.querySelector(".leftSpan");

// oggetto HTML che invece serve a visualizare il numero totale delle domande che compongono il quiz
const objRightSpan = document.querySelector(".rightSpan");

function showResult() {
  removeChilds(objDisplay);
  objQuestionDisplay.innerText =
    "Hai completato il quiz, hai risposto correttamente a: " +
    rightAnswerCounter +
    " domande su " +
    questions.length +
    ", sotto puoi vedere il risultato";
  let objDiv = document.createElement("div");
  for (let i = 0; i < arAnswerContainer.length; i++) {
    let objPar = document.createElement("p");
    let objSpan = document.createElement("span");
    let strResult =
      "Domanda: " + (i + 1) + ") " + questions[i].question + " -- risposta: ";

    if (arAnswerContainer[i]) {
      objSpan.innerText = "corretta";
    } else {
      objSpan.innerText = "errata";
      objSpan.className = "rightSpan";
    }
    objPar.innerText = strResult;
    objPar.appendChild(objSpan);
    objDiv.append(objPar);
  }
  removeChilds(objQuestionText);
  objQuestionText.className = "showResult";
  objQuestionText.append(objDiv);
}

//nextQuestion ();
function checkAnswer(index) {
  let bCorrectAnswer = false;
  if (strAnswer === questions[index].correct_answer) {
    bCorrectAnswer = true;
  }

  bCorrectAnswer ? arAnswerContainer.push(1) : arAnswerContainer.push(0);
  if (bCorrectAnswer) rightAnswerCounter++;

  bCorrectAnswer = false;
  strAnswer = "";
}

function removeChilds(element) {
  element.textContent = "";
}

function showQuestion(index) {
  objQuestionDisplay.innerText = questions[index].question;
}

function makeRadioButtons(index) {
  //svuoto il contenitore delle risposte
  removeChilds(objDisplay);
  let arAnswer = questions[index].incorrect_answers;
  let rndNumber = Math.floor(Math.random() * arAnswer.length);

  arAnswer.splice(rndNumber, 0, questions[index].correct_answer);

  //itero l'array delle risposte e creo i radiobuttons
  for (let i = 0; i < arAnswer.length; i++) {
    let objDiv = document.createElement("div");
    let objRadioButton = document.createElement("input");
    objRadioButton.type = "radio";
    objRadioButton.name = "question" + index;
    objRadioButton.value = arAnswer[i];
    objRadioButton.id = "rb" + i;
    objRadioButton.className = "bottoni";

    let lblRadioButton = document.createElement("label");
    lblRadioButton.for = "rb" + i;
    lblRadioButton.innerText = arAnswer[i];

    objDiv.append(objRadioButton, lblRadioButton);
    objDisplay.append(objDiv);
  }
}

function makeRadioButtons_lbl(index) {
  //svuoto il contenitore delle risposte
  removeChilds(objDisplay);
  let arAnswer = questions[index].incorrect_answers;
  let rndNumber = Math.floor(Math.random() * arAnswer.length);

  arAnswer.splice(rndNumber, 0, questions[index].correct_answer);

  //itero l'array delle risposte e creo i radiobuttons
  for (let i = 0; i < arAnswer.length; i++) {
    let objDiv = document.createElement("div");
    let objRadioButton = document.createElement("input");

    objRadioButton.type = "radio";
    objRadioButton.name = "question" + index;
    objRadioButton.value = arAnswer[i];
    objRadioButton.id = "rb" + i;
    objRadioButton.className = "bottoni";
    let lblRadioButton = document.createElement("label");
    lblRadioButton.for = "rb" + i;
    lblRadioButton.innerText = arAnswer[i];
    lblRadioButton.className = "btn";

    objDiv.append(objRadioButton, lblRadioButton);
    objDisplay.append(objDiv);
    lblRadioButton.addEventListener("click", checkClick, false);
    lblRadioButton.myParam = arAnswer[i];
  }
}

//funzione che valorizza la risposta in una variabile globale
function checkClick(evt) {
  strAnswer = evt.currentTarget.innerText;
  console.log("evt", evt);
  evt.currentTarget.style.background =
    "linear-gradient(180deg, #d20094 60%, #900080 100%)";
}

function nextQuestion() {
  let valore = parseInt(objCounter.value);
  if (valore > 0 && valore <= questions.length) {
    //controllo se la risposta è corretta
    checkAnswer(valore - 1);
  }

  if (valore < questions.length) {
    console.log(
      valore + 1,
      " domanda dell' array questinos  ",
      questions[valore].question
    );

    showQuestion(valore);

    makeRadioButtons_lbl(valore);
  }
  valore += 1;

  if (valore === questions.length + 1) {
    alert("Hai risposto correttamente a " + rightAnswerCounter + " domande");
    objBtnContinue.disabled = true;
    showResult();
  } else {
    objCounter.value = valore;
    objLefSpan.innerText = "Question " + valore;
  }
}

if (objCounter.value === "0") {
  objRightSpan.innerText = "/" + questions.length;
  nextQuestion();
}
