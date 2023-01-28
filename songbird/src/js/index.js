import unitsData from "./data.js";

const answers = document.querySelector(".answers");
const answersArray = [...answers.children];
const randomNum = Math.floor(Math.random() * 6);
let isGuessed = false;
let isPlayingMain = false;
const randomAudio = new Audio(unitsData[0][randomNum].audio);
const questionPlayer = document.querySelector(".question__player");
const timeBar = document.querySelector(".player__playtime");
const timeBarPlayed = document.querySelector(".player__playtime_played");

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

const displayRightAnswer=()=>{
  const rightName=document.querySelector('.question__name');
  const rightImage=document.querySelector('.question__image');
  rightName.textContent=unitsData[0][randomNum].name;
  rightImage.style.backgroundImage=`url(${unitsData[0][randomNum].image})`;
}
const playerClickHandler = (e) => {
  if (e.target.classList.contains("player__control")) {
    const controlButton = e.target;
    togglePlay(controlButton);
  } else if (e.target.classList.contains("player__playtime")) {
    const playerTimeline = e.target;
    rewindSong(e, playerTimeline);
  }
};

const togglePlay = (controlButton) => {
  controlButton.classList.toggle("player__control_play");
  controlButton.classList.toggle("player__control_pause");
  if (isPlayingMain) {
    isPlayingMain = false;
    randomAudio.pause();
  } else {
    isPlayingMain = true;
    randomAudio.play();
  }
};

const rewindSong = (e, playerTimeline) => {
  const partOfDuration = (e.clientX - 487) / playerTimeline.clientWidth;
  randomAudio.currentTime = partOfDuration * randomAudio.duration;
  setNewAudioTime();
};

const setNewAudioTime=()=>{
  timeBarPlayed.style.width=`${Math.round(randomAudio.currentTime*100/randomAudio.duration)}%`;
   
}

const updateTimeBar=()=>{
  setTimeout(updateTimeBar,100);
  setNewAudioTime();
}

answers.addEventListener("click", answersClickHandler);
questionPlayer.addEventListener("click", playerClickHandler);

updateTimeBar();
