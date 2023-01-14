"use strict";

//generate random number
let secretNum = Math.floor(Math.random() * 20) + 1;
console.log(`generated number : ${secretNum}`);

//select
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const displayScore = document.querySelector(".score");
const number = document.querySelector(".number");
const bg = document.querySelector("body");
const displayHighScore = document.querySelector(".highscore");

let guessNum = "";
let score = 20;
let highScore = 0;

// Drey principle -creating function for repeted code
const displayMessage = (messageText) => {
  message.textContent = messageText;
};

const displayHighScoref = (highScoretext) => {
  displayHighScore.textContent = highScoretext;
};

const displayScoref = (scoreText) => {
  displayScore.textContent = scoreText;
};

//after clcik on check
btnCheck.addEventListener("click", function (event) {
  //load the input
  const guessNum = Number(guess.value);

  console.log(`guess : ${guessNum}`);
  if (!guessNum) {
    message.textContent = "Plase enter a number between 1-20.";
  } else if (guessNum) {
    if (guessNum === secretNum) {
      displayMessage("You got it!");
      number.textContent = guessNum;
      bg.style.background = "#60b347";
      if (score > highScore) {
        highScore = score;
        displayHighScoref(highScore);
      }
    } else if (score > 10) {
      // too low or too high
      displayMessage(guessNum > secretNum ? "Too high" : "Too low!");
      score--;
      displayHighScoref(score);
    } else if (score <= 10) {
      displayMessage("You lost the game!");
    }
  }

  //play again
  btnAgain.addEventListener("click", function () {
    score = 20;
    displayHighScoref(score);

    bg.style.color = "black";
    number.textContent = "?";
    displayMessage("Start guessing!");

    displayHighScoref(highScore);
    guess.value = "";
  });
});

btnAgain.addEventListener("click", function () {
  secretNum = Math.floor(Math.random() * 20) + 1;
  console.log(`New generated number ${secretNum}`);
  score = 20;
  displayHighScoref(score);

  bg.style.background = "black";
  number.textContent = "?";
  displayMessage("Start guessing!");
  displayHighScoref(highScore);
});

//Improve
//Why we cant put words inside input? Its input type Number
//What if there is no guess? ✔️
//we might play the game till infinity.
//why we cant play if we guess the correct number??
