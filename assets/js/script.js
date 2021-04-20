(function () {
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "1. " + "Chi è l'inventore del World Wide Web?",
      answers: {
        a: "Douglas Crockford",
        b: "Tim Berners Lee",
        c: "Brendan Eich",
      },
      correctAnswer: "b",
    },
    {
      question:
        "2. " + "Con quale locuzione latina è ricordato Federico II di Svevia?",
      answers: {
        a: "Dies irae",
        b: "Festina lente",
        c: "Stupor mundi",
      },
      correctAnswer: "c",
    },
    {
      question:
        "3. " +
        "Qual è il nome della celebre filosofa, matematica ed astronoma vissuta ad Alessandria d'Egitto tra IV e V secolo d.C?",
      answers: {
        a: "Barsine",
        b: "Statira",
        c: "Olimpiade",
        d: "Ipazia",
      },
      correctAnswer: "d",
    },
    {
      question: "4. " + "Qual è l'anno di nascita di Alessandro Magno?",
      answers: {
        a: "356 a.C",
        b: "760 d.C",
        c: "280 d.C.",
        d: "560 a.C.",
      },
      correctAnswer: "a",
    },
    {
      question:
        "5. " +
        "Quale era il nome in codice dell'operazione che portò gli Alleati sulle coste siciliane nel 1943?",
      answers: {
        a: "Operazione Oro",
        b: "Operazione Husky",
        c: "Operazione Overlord",
        d: "Operazione Dynamo",
      },
      correctAnswer: "b",
    },
  ];

  // Kick things off
  buildQuiz();

  // Event listeners

  // submitButton.addEventListener('click', showResults); // mostra puteggio ottenuto

  submitButton.addEventListener("click", function () {
    //aggiungi showResults  e togli function per vedere il punteggio
    document.getElementById("dati").innerHTML = "Dati acquisiti";
    var str = "CLICCA QUI PER VEDERE IL RISULTATO";
    var result = str.link("https://gabrielescarparo.wordpress.com/");
    document.getElementById("link").innerHTML = result;
  });
})();
