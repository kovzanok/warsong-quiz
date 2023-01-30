export class Round {
  constructor(roundNumber, unitsData, answerNumber = undefined) {
    this.roundNumber = roundNumber;
    this.unitsData = unitsData;
    this.answerNumber = answerNumber;
  }

  generateRandomQuestion() {
    const randomNum = Math.floor(Math.random() * 6);
    const randomAudio = new Audio(this.unitsData[this.roundNumber][randomNum].audio);
    
    return [randomNum,randomAudio];
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

  resetRound() {
    document.querySelector(".question__name").textContent = "*****";
    document.querySelector(".quiz__info").textContent =
      "Прослушайте плеер и выберите персонажа из списка.";
  }

  playRound(){
    const roundList = document.querySelectorAll(".round");
    roundList[roundNumber].classList.add("round_active");

    
  }
}
