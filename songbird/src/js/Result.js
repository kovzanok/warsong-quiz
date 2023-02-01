export default class Result {
  constructor(score) {
    this.score = score;
  }

  createResultWindow() {
    const resultBlock = document.createElement("DIV");
    resultBlock.classList.add("modal");
    resultBlock.innerHTML = `
        <div class="modal__body">
          <div class="modal__content">
            <div class="modal__header">
              <h2 class="modal__title">Победа!</h2>
            </div>
            <div class="modal__main">
              <div class="modal__text">
                Вы набрали ${this.score} баллов! ${
      this.score === 30 ? "Это абсолютная победа!" : ""
    }
              </div>
              <div class="modal__buttons">
                <button class="button button_active button_restart">
                  Начать заново
                </button>
                <button class="button button_active button_menu">
                  На главную
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

    document.querySelector(".main").after(resultBlock);
    resultBlock.classList.add('modal_active');
  }

  static removeResultWindow(){
    document.querySelector('.modal').remove();
  }
}
