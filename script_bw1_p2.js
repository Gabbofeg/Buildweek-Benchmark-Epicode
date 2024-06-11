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

//const objDisplay = document.querySelector("display");


const objDisplay = document.getElementById("customRadio");
console.log("objDisplay vale: " , objDisplay);
const objCounter = document.getElementById("txtCounter");
//console.log("objCounter vale: " , objCounter)
const objBtnContinue = document.getElementById("btnContinue");
objBtnContinue.addEventListener("click", nextQuestion);

  nextQuestion ();

  function makeRadioButtons(index){
    console.log("generiamo un radio button");
    let objRadioButton = document.createElement("input");
    objRadioButton.type = "radio";
    objRadioButton.name = "question"+index;

    //console.log(objRadioButton);
    let lblRadioButton = document.createElement("label");
    lblRadioButton.for = "question"+index;
    lblRadioButton.innerText = questions[index].question

    //objDisplay.appendChild(objRadioButton); //, lblRadioButton);
    objDisplay.append(objRadioButton, lblRadioButton);


  }



  function nextQuestion(){
    let valore = parseInt(objCounter.value);
    if (valore < questions.length){
      console.log(valore+1, " domanda dell' array questinos  " , questions[valore].question);
      //makeRadioButton
      makeRadioButtons(valore);

      valore += 1;
      objCounter.value = valore; 
    }
  }


    console.log("array questinos lungo: " , questions.length);
    console.log("prima domand dell' array questinos lungo: " , questions[0].question);
    console.log("prima domand dell' array quante risposte ci sono ?: " , questions[0].incorrect_answers.length);
    
    