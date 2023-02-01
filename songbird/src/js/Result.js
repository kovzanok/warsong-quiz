export default class Result {
  constructor(score) {
    this.score = score;
  }

  createResultWindow() {
    document.body.classList.add("body_lock");
    const resultBlock = document.createElement("DIV");
    resultBlock.classList.add("modal");
    resultBlock.innerHTML = `
        <div class="modal__body">
          <div class="modal__content">
            <div class="modal__header">
              <h2 class="modal__title">Игра завершена!</h2>
            </div>
            <div class="modal__main">
              <div class="modal__text">
                Вы набрали ${this.score} баллов! ${
      this.score === 30 ? "Это абсолютная победа!" : ""
    }
              </div>
              <div class="modal__buttons">
              ${
                this.score === 30
                  ? `<button class="button button_active button_menu">
              На главную
            </button>`
                  : `
            <button class="button button_active button_restart">
              Начать заново
            </button>`
              }
                
              </div>
            </div>
          </div>
        </div>
      `;

    document.querySelector(".main").after(resultBlock);
    resultBlock.classList.add("modal_active");
  }

  static removeResultWindow() {
    document.querySelector(".modal").remove();
    document.body.classList.remove("body_lock");
    window.scrollTo(0, 0);
  }
}
