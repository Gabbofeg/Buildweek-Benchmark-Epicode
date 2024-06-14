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
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
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
//const objDisplay = document.querySelector("display");

const arAnswerContainer =[];  // array che mi contiene le risposte: 1 = risposta corretta, 0 = risposta sbagliata

let rightAnswerCounter = 0;

// oggetto HTML che conterrà il risultato del quiz
//const objQuestionText = document.getElementById("questionText");

// oggetto HTML che conterrà il risultato del quiz
const objQuestionText = document.querySelector(".questionLog");

//oggetto HTML che contiene la domanda del quiz
const objQuestionDisplay = document.getElementById("question");
//console.log("objQustioneDisplay vale: " , objQuestionDisplay);

// oggetto HTML che visualizza le risposte multiple e contiene i radio button
const objDisplay = document.getElementById("customRadio");
//console.log("objDisplay vale: " , objDisplay);

//oggetto HTML che è un contatore delle domande
const objCounter = document.getElementById("txtCounter");
//console.log("objCounter vale: " , objCounter)

// oggetto HTML, è il bottone continua che permetta di andare avanti nel quiz
const objBtnContinue = document.getElementById("btnContinue");
objBtnContinue.addEventListener("click", nextQuestion);

// oggetto HTML che visualizza il numero della domanda alla quale l'utente è arrivato
const objLefSpan = document.querySelector(".leftSpan");

// oggetto HTML che invece serve a visualizare il numero totale delle domande che compongono il quiz
const objRightSpan = document.querySelector(".rightSpan");



function showResult(){
removeChilds(objDisplay);
objQuestionDisplay.innerText = "Hai completato il quiz, hai risposto correttamente a: " + rightAnswerCounter + " domande su " + questions.length + " sotto puoi vedere il risultato";
let objDiv = document.createElement("div");
for (let i=0; i<arAnswerContainer.length;i++){
  let objPar = document.createElement("p");
  let objSpan = document.createElement("span");
  let strResult = "Domanda: " + (i+1) + ") " + questions[i].question + " -- risposta: ";
  
  if (arAnswerContainer[i]){
    //strResult += " -- risposta corretta";
    objSpan.innerText = "corretta"
  }
  else{
    //strResult += " -- risposta errata";
    objSpan.innerText = "errata";
    objSpan.className = "rightSpan";
  }
  objPar.innerText = strResult;
  objPar.appendChild(objSpan);
  objDiv.append(objPar);
}
removeChilds(objQuestionText);
//objQuestionText.className = "questionLog";
objQuestionText.className = "showResult";
objQuestionText.append(objDiv);
}


//nextQuestion ();
function checkAnswer(index){
//alert("la risposta corretta è: "+questions[index].correct_answer);
//const arRadioButton = document.querySelectorAll(".bottoni");
//alert("arRadioButton è lungo : "+arRadioButton.length);
let bCorrectAnswer = false;

/*
for (let i=0;i<arRadioButton.length;i++){
  alert("arRadioButton è checcato? : "+arRadioButton[i].checked);
  if (arRadioButton[i].checked && arRadioButton[i].value === questions[index].correct_answer){
    bCorrectAnswer = true;
    alert("corretto");
    break;
  }

}
*/
if (strAnswer === questions[index].correct_answer){
  bCorrectAnswer = true;
  //alert("corretto");
}

bCorrectAnswer ? arAnswerContainer.push(1) : arAnswerContainer.push(0);
if (bCorrectAnswer) rightAnswerCounter++;

bCorrectAnswer = false;
strAnswer='';
//arAnswerContainer.push(bCorrectAnswer);
//alert(arAnswerContainer);
}


function removeChilds(element){
element.textContent ="";
/*
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
*/ 

}


function showQuestion(index){
//console.log("h1 prima della modifica vale: ", objQuestionDisplay.innerText);
objQuestionDisplay.innerText = questions[index].question;
//console.log("lunghezza array h1 contenenente la domanda vale:", objQuestionDisplay.length);
//console.log("h1 contenenente la domanda vale:", objQuestionDisplay.innerText)
}




function makeRadioButtons(index){
//svuoto il contenitore delle risposte
removeChilds(objDisplay);
//console.log("funzione genera i radio button");
let arAnswer = questions[index].incorrect_answers;
let rndNumber = Math.floor(Math.random()*arAnswer.length);
//console.log("array delle risposte sbagliate vale: ", arAnswer);

arAnswer.splice(rndNumber,0,questions[index].correct_answer);
//let rndNumber = Math.floor(Math.random()*5);

//console.log("Numero random  vale: ", rndNumber);
//console.log("array delle risposte totali vale: ", arAnswer);

//itero l'array delle risposte e creo i radiobuttons
for (let i=0; i<arAnswer.length; i++){
  let objDiv = document.createElement("div");
  let objRadioButton = document.createElement("input");
  objRadioButton.type = "radio";
  objRadioButton.name = "question"+index;
  objRadioButton.value = arAnswer[i];
  objRadioButton.id ="rb" + i;
  objRadioButton.className ="bottoni";

  //console.log(objRadioButton);
  let lblRadioButton = document.createElement("label");
  lblRadioButton.for = "rb" + i;
  //lblRadioButton.innerText = questions[index].question
  lblRadioButton.innerText = arAnswer[i]

  //objDisplay.appendChild(objRadioButton); //, lblRadioButton);
  objDiv.append(objRadioButton, lblRadioButton);
  objDisplay.append(objDiv);
  //objDisplay.append(objRadioButton, lblRadioButton);
  
} 

}

/*--------------------------------prova nuovo metodo di creare i button radio-------------------------------------------------*/
function makeRadioButtons_lbl(index){
//svuoto il contenitore delle risposte
removeChilds(objDisplay);
//console.log("funzione genera i radio button");
let arAnswer = questions[index].incorrect_answers;
let rndNumber = Math.floor(Math.random()*arAnswer.length);
//console.log("array delle risposte sbagliate vale: ", arAnswer);

arAnswer.splice(rndNumber,0,questions[index].correct_answer);
//let rndNumber = Math.floor(Math.random()*5);

//console.log("Numero random  vale: ", rndNumber);
//console.log("array delle risposte totali vale: ", arAnswer);

//itero l'array delle risposte e creo i radiobuttons
for (let i=0; i<arAnswer.length; i++){
let objDiv = document.createElement("div");
let objRadioButton = document.createElement("input");


objRadioButton.type = "radio";
objRadioButton.name = "question"+index;
objRadioButton.value = arAnswer[i];
objRadioButton.id ="rb" + i;
objRadioButton.className ="bottoni";
//alert("aggiunto evenco click a ", objRadioButton.value);
//objRadioButton.addEventListener("click", checkClick);



//console.log(objRadioButton);
let lblRadioButton = document.createElement("label");
lblRadioButton.for = "rb" + i;
//lblRadioButton.innerText = questions[index].question
lblRadioButton.innerText = arAnswer[i];
lblRadioButton.className = "btn";

//objDisplay.appendChild(objRadioButton); //, lblRadioButton);
objDiv.append(objRadioButton, lblRadioButton);
objDisplay.append(objDiv);

//objRadioButton.addEventListener("click", checkClick);
lblRadioButton.addEventListener("click", checkClick, false);
lblRadioButton.myParam = arAnswer[i];

//alert("aggiunto evenco click a ", objRadioButton.value);

//alert("objdisplay ", objDisplay);
//objDisplay.append(objRadioButton, lblRadioButton);

} 

}

//funzione che valorizza la risposta in una variabile globale
function checkClick(evt){
//alert(evt.currentTarget.myParam);
//alert(evt.currentTarget.innerText);
strAnswer = evt.currentTarget.innerText;
/*
const objBtn = document.querySelectorAll("bottoni");
for (let i=0; i<objBtn.length; i++){
  if (objBtn[i].checked){
      //alert(objBtn[i].value);
      let strLbl ="lbl-" + i //parseInt(i+1);
      let objLbl = document.getElementById(strLbl);
      strAnswer = objLbl.innerText;
      alert(strAnswer);
      break;
  }   
} 
*/   

}





function nextQuestion(){
let valore = parseInt(objCounter.value);
if (valore>0 && valore <= questions.length){
  //controllo se la risposta è corretta
  checkAnswer(valore-1);
}


if (valore < questions.length){
  console.log(valore+1, " domanda dell' array questinos  " , questions[valore].question);
  

  //show Question
  showQuestion(valore);
  //makeRadioButton metodo 1
  //makeRadioButtons(valore);

  //makeRadioButton metodo 2
  makeRadioButtons_lbl(valore);


}  
  valore += 1;
//  objCounter.value = valore; 
//  objLefSpan.innerText ="Question " + valore;

if (valore === questions.length+1){
  alert(arAnswerContainer);
  alert("hai risposto correttamente a "+rightAnswerCounter);
  objBtnContinue.disabled = true;
  showResult();
}else{
  objCounter.value = valore; 
  objLefSpan.innerText ="Question " + valore;

}

}


//console.log("array questinos lungo: " , questions.length);
//console.log("prima domand dell' array questinos lungo: " , questions[0].question);
//console.log("prima domand dell' array quante risposte ci sono ?: " , questions[0].incorrect_answers.length);

if (objCounter.value==="0"){
objRightSpan.innerText = "/"+questions.length;
nextQuestion();
}
//removeChilds(objDisplay);