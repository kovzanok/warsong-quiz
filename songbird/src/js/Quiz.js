import unitsData from "./data.js";
import { Round } from "./Round.js";
import Result from "./Result.js";
import Main from "./Main.js";

export default class Quiz {
  constructor() {
    this.roundNumber = 0;
    this.score = 0;
    this.round = new Round(this.roundNumber, unitsData, this.score);
  }

  createQuiz = () => {
    
    document.querySelector(
      "header"
    ).innerHTML = `<div class="wrapper header__wrapper">
        
    <div class="header__score">
      <span class="score">Score: 0</span>
    </div>
    <div class="header__rounds">
      <ul class="rounds">
        <li class="round">Разминка</li>
        <li class="round">Альянс</li>
        <li class="round">Нежить</li>
        <li class="round">Ночные эльфы</li>
        <li class="round">Орда</li>
        <li class="round">Нейтральные герои</li>
      </ul>
    </div>
  </div>`;
    document.querySelector("main").innerHTML = `<section class="quiz">
  <div class="wrapper quiz__wrapper">
    <div class="quiz__question quiz__block">
      <div class="question__image"></div>
      <div class="question__body">
        <div class="question__name">*****</div>
        <div class="question__player">
          <div class="player__control player__control_play"></div>

          <div class="player__playtime">
            <div class="player__playtime player__playtime_played"></div>
          </div>
          
          <div class="player__info"></div>
        </div>
      </div>
    </div>
    <div class="wrapper__answers layout-2-column">
      <div class="quiz__answers">
        
      </div>
      <div class="quiz__info quiz__block">
        Прослушайте плеер и выберите персонажа из списка.
      </div>
    </div>
    <button class="button quiz__button button_nonactive">
      Следующий уровень
    </button>
  </div>
</section>`;

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
          this.round = new Round(this.roundNumber, unitsData, this.score);
          this.round.playRound();
        } else {
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
    const quizAgain = new Quiz();

    if (document.querySelector(".button_restart")){
      document.querySelector(".button_restart").addEventListener("click", quizAgain.startQuizAgain);
    }
    else{
      document.querySelector(".button_menu").addEventListener('click', quizAgain.goToMain);
    }
    
    

  }

  startQuizAgain=()=>{
    this.createQuiz();
    Result.removeResultWindow();
  }

  goToMain(){
    const main=new Main();
    main.mainPageHandler();
    Result.removeResultWindow();
  }
}
