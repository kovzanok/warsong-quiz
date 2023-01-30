import unitsData from "./data.js";
import { Round } from "./Round.js";

let roundNumber = 0;
let score = 0;

const quizButtonClickHandler = function () {
  if (this.classList.contains("button_active")) {
    score = round.getScore();
    round.resetRound();
    roundNumber++;
    round = new Round(roundNumber, unitsData, score);
    round.playRound();
  }
};

let round = new Round(roundNumber, unitsData, score);
round.playRound();

const quizButton = document.querySelector(".quiz__button");

quizButton.addEventListener("click", quizButtonClickHandler);
