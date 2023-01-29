import unitsData from "./data.js";

const answers = document.querySelector(".answers");
const answersArray = [...answers.children];
const randomNum = Math.floor(Math.random() * 6);
let isGuessed = false;
let isPlayingMain = false;
const randomAudio = new Audio(unitsData[0][randomNum].audio);
const questionPlayer = document.querySelector(".question__player");
const quizButton = document.querySelector(".quiz__button");

const mainTimelinePlayed = document.querySelector(".player__playtime_played");
const mainPlayerButton = document.querySelector(".player__control");

const makeNextLvlButtonActive = () => {
  quizButton.classList.remove("button_nonactive");
  quizButton.classList.add("button_active");
};

const answersClickHandler = (e) => {
  const answerNumber = answersArray.indexOf(e.target);
  const targetMarker = e.target.firstElementChild;

  generateInfoCard(answerNumber);

  if (!isGuessed) {
    changeMarkerColor(targetMarker, answerNumber);
  }
};

const generateInfoCard = (number) => {
  const cardData = unitsData[0][number];
  const infoCard = `<div class="info__head">
    <div class="info__image"></div>
    <div class="info__body">
      <div class="info__name">${cardData.name}</div>
      <div class="info__name">${cardData.nameEng}</div>
      <div class="info__player">
      <div class="player__control player__control_play"></div>
        <div class="player__playtime"></div>
        <div class="player__info"></div>
      </div>
    </div>
  </div>
  <div class="info__description">
    ${cardData.description}
  </div>`;

  document.querySelector(".quiz__info").innerHTML = infoCard;
  const infoImage = document.querySelector(".info__image");
  infoImage.style.backgroundImage = `url(${cardData.image})`;
};

const changeMarkerColor = (targetMarker, answerNumber) => {
  if (randomNum === answerNumber) {
    targetMarker.classList.add("answer__marker_green");
    isGuessed = true;
    targetMarker.classList.remove("answer__marker_hover");
    displayRightAnswer();
  } else {
    targetMarker.classList.add("answer__marker_red");
    targetMarker.classList.remove("answer__marker_hover");
  }
};

const displayRightAnswer = () => {
  const rightName = document.querySelector(".question__name");
  const rightImage = document.querySelector(".question__image");
  rightName.textContent = unitsData[0][randomNum].name;
  rightImage.style.backgroundImage = `url(${unitsData[0][randomNum].image})`;
  makeNextLvlButtonActive();
  togglePlay(
    document.querySelector(".question__player .player__control"),
    randomAudio
  );
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

const togglePlay = (controlButton, audio) => {
  if (!audio.paused) {
    audio.pause();
    controlButton.classList.add("player__control_play");
    controlButton.classList.remove("player__control_pause");
  } else {
    audio.play();
    controlButton.classList.remove("player__control_play");
    controlButton.classList.add("player__control_pause");
  }
};

const rewindSong = (e, playerTimeline, playerTimelinePlayed, audio) => {
  console.log(e.clientX);
  const partOfDuration = (e.clientX - 487) / playerTimeline.clientWidth;
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

answers.addEventListener("click", answersClickHandler);
questionPlayer.addEventListener("click", playerClickHandler(randomAudio));

randomAudio.onended = () => {
  mainPlayerButton.classList.add("player__control_play");
  mainPlayerButton.classList.remove("player__control_pause");
};

updateTimeBar(randomAudio, mainTimelinePlayed);