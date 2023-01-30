import unitsData from "./data.js";
import { Round } from "./Round.js";
import { Player } from "./Player.js";

let isGuessed = false;
let mainSound;
let roundNumber = 0;
let score = 0;
let points = 5;

const questionPlayer = document.querySelector(".question__player");
let infoPlayer;
let unitAudio;

const questionList = document.querySelectorAll(".round");

let mainTimelinePlayed = document.querySelector(".player__playtime_played");
const mainPlayerButton = document.querySelector(".player__control");

const rightAlarm = new Audio("./src/sound/right.mp3");
const wrongAlarm = new Audio("./src/sound/wrong.mp3");

let mainAudioHandler;
let infoAudioHandler;

const makeNextLvlButtonActive = () => {
  quizButton.classList.remove("button_nonactive");
  quizButton.classList.add("button_active");
};

const answersClickHandler = (round, quizNumber, answersArray, randomNum) => {
  return (e) => {
    const answerNumber = answersArray.indexOf(e.target);
    const targetMarker = e.target.firstElementChild;
    const cardData = unitsData[quizNumber][answerNumber];

    round.answerNumber = answerNumber;
    round.generateInfoCard();
    generateInfoPlayer(cardData);

    if (!isGuessed) {
      changeMarkerColor(targetMarker, answerNumber, randomNum, quizNumber);
    }
  };
};

const generateInfoPlayer = (cardData) => {
  infoPlayer = document.querySelector(".info__player");

  if (unitAudio) {
    unitAudio.pause();
    infoPlayer.removeEventListener("click", infoAudioHandler);
  }
  unitAudio = new Audio(cardData.audio);
  infoAudioHandler = playerClickHandler(unitAudio);

  infoPlayer.addEventListener("click", infoAudioHandler);
  unitAudio.onended = () => {
    infoPlayer
      .querySelector(".player__control")
      .classList.add("player__control_play");
    infoPlayer
      .querySelector(".player__control")
      .classList.remove("player__control_pause");
  };
  updateTimeBar(
    unitAudio,
    infoPlayer.querySelector(".player__playtime_played")
  );
};

const changeMarkerColor = (
  targetMarker,
  answerNumber,
  randomNum,
  quizNumber
) => {
  if (randomNum === answerNumber) {
    targetMarker.classList.add("answer__marker_green");
    isGuessed = true;
    targetMarker.classList.remove("answer__marker_hover");
    displayRightAnswer(randomNum, quizNumber);
    rightAlarm.play();
    score += points;
    document.querySelector(".score").textContent = `Score: ${score}`;
  } else {
    wrongAlarm.play();
    --points;
    targetMarker.classList.add("answer__marker_red");
    targetMarker.classList.remove("answer__marker_hover");
  }
};

const displayRightAnswer = (randomNum, quizNumber) => {
  const rightName = document.querySelector(".question__name");
  const rightImage = document.querySelector(".question__image");
  rightName.textContent = unitsData[quizNumber][randomNum].name;
  rightImage.style.backgroundImage = `url(${unitsData[quizNumber][randomNum].image})`;
  makeNextLvlButtonActive();
  pauseMainAudio();
};

const playerClickHandler = (audio) => {
  return function (e) {
    if (e.target.classList.contains("player__control")) {
      const controlButton = e.target;
      togglePlay(controlButton, audio);
    } else if (e.target.classList.contains("player__playtime")) {
      const playerTimeline = e.target.parentNode.classList.contains(
        "player__playtime"
      )
        ? e.target.parentNode
        : e.target;

      const playerTimelinePlayed = playerTimeline.firstElementChild;

      rewindSong(e, playerTimeline, playerTimelinePlayed, audio);
    }
  };
};

const pauseMainAudio = () => {
  mainSound.pause();
  mainPlayerButton.classList.add("player__control_play");
  mainPlayerButton.classList.remove("player__control_pause");
};

/*const togglePlay = (controlButton, audio) => {
  if (!audio.paused) {
    audio.pause();
    controlButton.classList.add("player__control_play");
    controlButton.classList.remove("player__control_pause");
  } else {
    audio.play();
    controlButton.classList.remove("player__control_play");
    controlButton.classList.add("player__control_pause");
  }
};*/

const rewindSong = (e, playerTimeline, playerTimelinePlayed, audio) => {
  const partOfDuration =
    (e.clientX - e.target.getBoundingClientRect().left) /
    playerTimeline.clientWidth;
  audio.currentTime = partOfDuration * audio.duration;
  setNewAudioTime(audio, playerTimelinePlayed);
};

const setNewAudioTime = (audio, playerTimelinePlayed) => {
  playerTimelinePlayed.style.width = `${Math.round(
    (audio.currentTime * 100) / audio.duration
  )}%`;
};

const updateTimeBar = (audio, timelinePlayed) => {
  setTimeout(updateTimeBar, 100, audio, timelinePlayed);
  setNewAudioTime(audio, timelinePlayed);
};

const createRound = (quizNumber) => {
  const round = new Round(quizNumber, unitsData);
  const [randomNum, randomAudio] = round.generateRandomQuestion();
  mainSound = randomAudio;
  round.createFractionLogo();
  round.createAnswerList();
  const answers = document.querySelector(".answers");
  const answersArray = [...answers.children];
  answers.addEventListener(
    "click",
    answersClickHandler(round, quizNumber, answersArray, randomNum)
  );
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
    infoPlayer.removeEventListener("click", infoAudioHandler);
  }
  questionPlayer.removeEventListener("click", mainAudioHandler);
  document.querySelector(".player__playtime_played").remove();
  const newTimeLine = document.createElement("div");
  newTimeLine.classList.add("player__playtime");
  newTimeLine.classList.add("player__playtime_played");
  document.querySelector(".player__playtime").append(newTimeLine);
  mainTimelinePlayed = newTimeLine;
};

const playRound = (quizNumber) => {
  questionList[quizNumber].classList.add("round_active");
  createRound(quizNumber);
  const mainPlayer=new Player(mainSound);
  
  
  questionPlayer.addEventListener("click", mainPlayer.playerClickHandler);
  mainSound.onended = () => {
    mainPlayerButton.classList.add("player__control_play");
    mainPlayerButton.classList.remove("player__control_pause");
  };
  mainPlayer.updateTimeBar();
};

const quizButtonClickHandler = (e) => {
  if (e.target.classList.contains("button_active")) {
    resetRound(roundNumber);
    playRound(++roundNumber);
  }
};

let round=new Round(roundNumber,unitsData);

playRound(roundNumber);

const quizButton = document.querySelector(".quiz__button");

quizButton.addEventListener("click", quizButtonClickHandler);
