import { Player } from "./Player.js";

export class Round {
  constructor(roundNumber, unitsData, score) {
    this.roundNumber = roundNumber;
    this.unitsData = unitsData;
    this.isGuessed = false;
    this.rightAlarm = new Audio("./src/sound/right.mp3");
    this.wrongAlarm = new Audio("./src/sound/wrong.mp3");
    this.points = 5;
    this.score = score;
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
          <div class="player__info">
            <div class='info__current'>00:00</div>
            <div class='info__divider'>/</div>
            <div class='info__duration'></div>
          </div>
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
    const unitPlayer = new Player(this.unitAudio, infoPlayer);

    infoPlayer.addEventListener("click", unitPlayer.playerClickHandler);
    unitPlayer.setAudioDuration();

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
    this.roundList[this.roundNumber].classList.remove("round_active");
    document.querySelector(".question__name").textContent = "*****";
    document.querySelector(".quiz__info").textContent =
      "Прослушайте плеер и выберите персонажа из списка.";
    this.nextRoundButton.classList.add("button_nonactive");
    this.nextRoundButton.classList.remove("button_active");

    this.unitAudio.pause();
    this.questionAudio.pause();
    this.pauseMainAudio();
    this.questionPlayer.removeEventListener(
      "click",
      this.mainPlayer.playerClickHandler
    );

    console.log(this.questionPlayer.querySelector(".info__current"));
    this.questionPlayer.querySelector(".info__current").textContent = "00:00";

    if (this.mainPlayer.playerTimelinePlayed) {
      this.mainPlayer.playerTimelinePlayed.remove();
      const newPlayerTimelinePlayed = document.createElement("div");
      newPlayerTimelinePlayed.classList.add("player__playtime");
      newPlayerTimelinePlayed.classList.add("player__playtime_played");
      this.mainPlayer.playerTimeline.append(newPlayerTimelinePlayed);
    }

    this.nextRoundButton.textContent =
      this.roundNumber === 4 ? `Завершить игру` : `Следующий уровень`;
  }

  playRound() {
    this.roundList = document.querySelectorAll(".round");
    this.roundList[this.roundNumber].classList.add("round_active");
    this.createRound();
    window.scrollTo(0, 0);
  }

  createRound() {
    this.generateRandomQuestion();
    this.createFractionLogo();
    this.createAnswerList();

    this.questionPlayer = document.querySelector(".question__player");
    this.questionPlayerControl = document.querySelector(".player__control");
    this.mainPlayer = new Player(this.questionAudio, this.questionPlayer);

    this.questionPlayer.addEventListener(
      "click",
      this.mainPlayer.playerClickHandler
    );

    this.mainPlayer.setAudioDuration();
    this.questionAudio.onended = () => {
      this.questionPlayerControl.classList.add("player__control_play");
      this.questionPlayerControl.classList.remove("player__control_pause");
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
      this.showScore();
      this.rightAlarm.play();
      this.makeNextRoundButtonActive();
    } else {
      if (!this.targetMarker.classList.contains("answer__marker_red")) {
        this.targetMarker.classList.add("answer__marker_red");
        this.targetMarker.classList.remove("answer__marker_hover");
        this.points--;
        this.wrongAlarm.play();
      }
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

  showScore() {
    this.score += this.points;
    document.querySelector(".score").textContent = `Score: ${this.score}`;
  }

  pauseMainAudio() {
    this.questionAudio.pause();
    this.questionPlayerControl.classList.add("player__control_play");
    this.questionPlayerControl.classList.remove("player__control_pause");
  }

  makeNextRoundButtonActive() {
    this.nextRoundButton = document.querySelector(".quiz__button");
    this.nextRoundButton.classList.remove("button_nonactive");
    this.nextRoundButton.classList.add("button_active");
  }

  getScore() {
    return this.score;
  }
}
