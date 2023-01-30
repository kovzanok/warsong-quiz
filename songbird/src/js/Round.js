import { Player } from "./Player.js";

export class Round {
  constructor(roundNumber, unitsData) {
    this.roundNumber = roundNumber;
    this.unitsData = unitsData;
    this.isGuessed = false;
  }

  generateRandomQuestion() {
    this.questionNum = Math.floor(Math.random() * 6);
    this.questionAudio = new Audio(
      this.unitsData[this.roundNumber][this.questionNum].audio
    );
  }

  createFractionLogo() {
    document.querySelector(".question__image").style.backgroundImage = `url(${
      this.unitsData[this.roundNumber][
        this.unitsData[this.roundNumber].length - 1
      ].fractionLogo
    })`;
  }

  createAnswerList() {
    if (document.querySelector(".answers"))
      document.querySelector(".answers").remove();
    const answers = document.createElement("ul");
    answers.classList.add("answers");

    for (let i = 0; i < this.unitsData[this.roundNumber].length - 1; i++) {
      const answer = document.createElement("li");
      answer.classList.add("answer");
      const marker = document.createElement("span");
      marker.classList.add("answer__marker");
      marker.classList.add("answer__marker_hover");
      answer.append(marker);
      answer.insertAdjacentText(
        "beforeend",
        this.unitsData[this.roundNumber][i].name
      );
      answers.append(answer);
    }
    document.querySelector(".quiz__answers").append(answers);
  }

  generateInfoCard() {
    const cardData = this.unitsData[this.roundNumber][this.answerNumber];
    const infoCard = `<div class="info__head">
      <div class="info__image"></div>
      <div class="info__body">
        <div class="info__name">${cardData.name}</div>
        <div class="info__name">${cardData.nameEng}</div>
        <div class="info__player">
        <div class="player__control player__control_play"></div>
          <div class="player__playtime"><div class="player__playtime player__playtime_played"></div></div>
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
  }
  generateInfoPlayer() {
    const infoPlayer = document.querySelector(".info__player");

    if (this.unitAudio) {
      this.unitAudio.pause();
    }

    this.unitAudio = new Audio(this.cardData.audio);
    const unitPlayer = new Player(this.unitAudio);

    infoPlayer.addEventListener("click", unitPlayer.playerClickHandler);

    this.unitAudio.onended = () => {
      infoPlayer
        .querySelector(".player__control")
        .classList.add("player__control_play");
      infoPlayer
        .querySelector(".player__control")
        .classList.remove("player__control_pause");
    };
  }
  resetRound() {
    document.querySelector(".question__name").textContent = "*****";
    document.querySelector(".quiz__info").textContent =
      "Прослушайте плеер и выберите персонажа из списка.";
  }

  playRound() {
    const roundList = document.querySelectorAll(".round");
    roundList[this.roundNumber].classList.add("round_active");
    this.createRound();
  }

  createRound() {
    this.generateRandomQuestion();
    this.createFractionLogo();
    this.createAnswerList();

    const questionPlayer = document.querySelector(".question__player");
    this.questionPlayerControl = document.querySelector(".player__control");
    const mainPlayer = new Player(this.questionAudio);

    questionPlayer.addEventListener("click", mainPlayer.playerClickHandler);

    this.questionAudio.onended = () => {
      questionPlayerControl.classList.add("player__control_play");
      questionPlayerControl.classList.remove("player__control_pause");
    };

    const answers = document.querySelector(".answers");
    this.answersArray = [...answers.children];

    answers.addEventListener("click", this.answersClickHandler);
  }

  answersClickHandler = (e) => {
    this.answerNumber = this.answersArray.indexOf(e.target);
    this.targetMarker = e.target.firstElementChild;
    this.cardData = this.unitsData[this.roundNumber][this.answerNumber];

    this.generateInfoCard();

    this.generateInfoPlayer();

    if (!this.isGuessed) {
      this.guessHandler();
    }
  };

  guessHandler() {
    if (this.questionNum === this.answerNumber) {
      this.targetMarker.classList.add("answer__marker_green");
      this.targetMarker.classList.remove("answer__marker_hover");
      this.isGuessed = true;

      this.displayRightAnswer();
      this.pauseMainAudio();
    } else {
           
      this.targetMarker.classList.add("answer__marker_red");
      this.targetMarker.classList.remove("answer__marker_hover");
    }
  }

  displayRightAnswer() {
    const rightName = document.querySelector(".question__name");
    const rightImage = document.querySelector(".question__image");

    rightName.textContent =
      this.unitsData[this.roundNumber][this.questionNum].name;
    rightImage.style.backgroundImage = `url(${
      this.unitsData[this.roundNumber][this.questionNum].image
    })`;
  }

  pauseMainAudio() {
    this.questionAudio.pause();
    this.questionPlayerControl.classList.add("player__control_play");
    this.questionPlayerControl.classList.remove("player__control_pause");
  }
}
