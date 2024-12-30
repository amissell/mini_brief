let questions = [{ question: "En JavaScript, 'null' est un type d'objet.", answer: true },
  { question: "Les tableaux en JavaScript commencent à l'index 1.", answer: false },
  { question: "La méthode 'map()' peut être utilisée pour transformer un tableau.", answer: true },
  { question: "En JavaScript, '==' compare les valeurs avec conversion de type automatique.", answer: true },
  { question: "La méthode 'querySelector()' permet de sélectionner plusieurs éléments à la fois.", answer: false },
  { question: "Le mot-clé 'const' permet de déclarer une variable modifiable.", answer: false },
  { question: "La fonction 'setTimeout()' est utilisée pour exécuter du code après un délai donné.", answer: true },
  { question: "Le mot-clé 'this' fait toujours référence à l'objet global.", answer: false },
  { question: "Les promesses en JavaScript utilisent 'then()' et 'catch()' pour la gestion des résultats.", answer: true },
  { question: "Une fonction fléchée (arrow function) a sa propre valeur 'this'.", answer: false }
];

const ques = document.getElementById("question");
let i = 0;

let score = 0;
function dispaly(){
  if (i < questions.length)
  {
    const thisQuestion = questions[i];
    ques.innerHTML = thisQuestion.question;
  }
  else
  {
    ques.innerHTML = `all done your score is ${score}`;
  }
};


function check(input){
  const x =  questions[i];
  if (input === questions[i].anwser)
  {
    score++;
  }
  i++;
  dispaly();
}

document.getElementById("true-btn").addEventListener("click", function(){
  check(true);
} );

document.getElementById("false-btn").addEventListener("click", function(){
  check(false);
} );

dispaly();