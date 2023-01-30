import unitsData from "./data.js";
import { Round } from "./Round.js";

let roundNumber =0;
let score = 0;
let points = 5;

const rightAlarm = new Audio("./src/sound/right.mp3");
const wrongAlarm = new Audio("./src/sound/wrong.mp3");

const makeNextLvlButtonActive = () => {
  quizButton.classList.remove("button_nonactive");
  quizButton.classList.add("button_active");
};



const resetRound = (quizNumber) => {
  points = 5;
  questionList[quizNumber].classList.remove("round_active");
  document.querySelector(".question__name").textContent = "*****";
  document.querySelector(".quiz__info").textContent =
    "Прослушайте плеер и выберите персонажа из списка.";

  quizButton.classList.add("button_nonactive");
  quizButton.classList.remove("button_active");

  isGuessed = false;

  if (unitAudio) {
    unitAudio.pause();
  }

  //questionPlayer.removeEventListener("click", mainPlayer.playerClickHandler);
  document.querySelector(".player__playtime_played").remove();
  const newTimeLine = document.createElement("div");
  newTimeLine.classList.add("player__playtime");
  newTimeLine.classList.add("player__playtime_played");
  document.querySelector(".player__playtime").append(newTimeLine);
  mainTimelinePlayed = newTimeLine;
};

const quizButtonClickHandler = (e) => {
  
};

let round = new Round(roundNumber, unitsData);

round.playRound();

const quizButton = document.querySelector(".quiz__button");

quizButton.addEventListener("click", quizButtonClickHandler);
