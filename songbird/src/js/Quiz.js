import unitsData from "./data.js";
import { Round } from "./Round.js";
import Result from "./Result.js";
import Main from "./Main.js";
import languageSettings from "./language.js";

export default class Quiz {
  constructor(language) {
    this.roundNumber = 0;
    this.score = 0;

    this.language = language || 'ru';
    this.round = new Round(
      this.roundNumber,
      unitsData[this.language],
      this.score,
      this.language
    );
  }

  createQuiz = () => {
    document.querySelector(
      "header"
    ).innerHTML = `<div class="wrapper header__wrapper header__quiz">
        
    <div class="header__score">
      <span class="score">Score: 0</span>
    </div>
    <div class="header__rounds">
      <ul class="rounds">
        <li class="round">${languageSettings[this.language][5]}</li>
        <li class="round">${languageSettings[this.language][6]}</li>
        <li class="round">${languageSettings[this.language][7]}</li>
        <li class="round">${languageSettings[this.language][8]}</li>
        <li class="round">${languageSettings[this.language][9]}</li>
        <li class="round">${languageSettings[this.language][10]}</li>
      </ul>
    </div>
  </div>`;
    document.querySelector("main").innerHTML = `<section class="quiz">
  <div class="wrapper quiz__wrapper">
    <div class="quiz__question quiz__block">
      <div class="question__image"></div>
      <div class="question__body">
        <div class="question__name">*****</div>
        <div class="question__player player">
          <div class="player__bar">
            <div class="player__control"></div>

            <div class="player__playtime">
              <div class="player__playtime player__playtime_played"></div>
            </div>
          </div>
          <div class="player__info">
            <div class='info__current'>00:00</div>
            <div class='info__divider'>/</div>
            <div class='info__duration'></div>
          </div>
          <div class="player__volume">
            <input class="volume__bar" type="range" value="80" />
          </div>
          
        </div>
      </div>
    </div>
    <div class="wrapper__answers layout-2-column">
      <div class="quiz__answers">
        
      </div>
      <div class="quiz__info quiz__block">${languageSettings[this.language][11]}
        
      </div>
    </div>
    <button class="button quiz__button button_nonactive">
    ${languageSettings[this.language][12]}
    </button>
  </div>
</section>`;
    document.querySelector(
      ".player__control"
    ).style.backgroundImage = `url(./src/img/play.svg)`;
    
    document.querySelector("footer").innerHTML = "";
    this.round.playRound();
    this.startQuiz();
  };

  startQuiz() {
    const quizButtonClickHandler = (e) => {
      if (e.target.classList.contains("button_active")) {
        this.score = this.round.getScore();

        if (++this.roundNumber <= 5) {
          this.round.resetRound();

          this.round = new Round(
            this.roundNumber,
            unitsData[this.language],
            this.score,
            this.language
          );
          this.round.playRound();
        } else {
          this.round.questionAudio.pause();
          this.round.unitAudio.pause();
          this.showQuizResult();
        }
      }
    };

    const quizButton = document.querySelector(".quiz__button");
    quizButton.addEventListener("click", quizButtonClickHandler);
  }

  showQuizResult() {
    const result = new Result(this.score);
    result.createResultWindow();
    const quizAgain = new Quiz(localStorage.getItem("language"));

    if (document.querySelector(".button_restart")) {
      document
        .querySelector(".button_restart")
        .addEventListener("click", quizAgain.startQuizAgain);
    } else {
      document
        .querySelector(".button_menu")
        .addEventListener("click", quizAgain.goToMain);
    }
  }

  startQuizAgain = () => {
    this.createQuiz();
    Result.removeResultWindow();
  };

  goToMain() {
    const main = new Main(localStorage.getItem("language")||'ru');
    main.createMainPage();
    main.mainPageHandler();
    Result.removeResultWindow();
  }
}
