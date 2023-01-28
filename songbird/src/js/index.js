import unitsData from "./data.js";

const answers = document.querySelector(".answers");
const answersArray = [...answers.children];
const randomNum = Math.floor(Math.random() * 6);
let isGuessed = false;

const answersCLickHandler = (e) => {
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
        <div class="player__control">
          <object
            type="image/svg+xml"
            data="./src/img/play.svg"
            class="play-object"
          ></object>
        </div>
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
  } else {
    targetMarker.classList.add("answer__marker_red");
    targetMarker.classList.remove("answer__marker_hover");
  }
};

answers.addEventListener("click", answersCLickHandler);
