import languageSettings from "./language.js";

export default class Result {
  constructor(score) {
    this.score = score;
  }

  createResultWindow() {
    document.body.style.overflow='hidden';
    const resultBlock = document.createElement("DIV");
    resultBlock.classList.add("modal");
    resultBlock.innerHTML = `
        <div class="modal__body">
          <div class="modal__content">
            <div class="modal__header">
              <h2 class="modal__title">${languageSettings[localStorage.getItem('language-quiz') || 'ru'][14]}</h2>
            </div>
            <div class="modal__main">
              <div class="modal__text">
                ${languageSettings[localStorage.getItem('language-quiz') || 'ru'][15]} ${this.score} ${languageSettings[localStorage.getItem('language-quiz') || 'ru'][16]}! ${
      this.score === 30 ? `${languageSettings[localStorage.getItem('language-quiz') || 'ru'][17]}!` : ""
    }
              </div>
              <div class="modal__buttons">
              ${
                this.score === 30
                  ? `<button class="button button_active button_menu">
                  ${languageSettings[localStorage.getItem('language-quiz') || 'ru'][18]}
            </button>`
                  : `
            <button class="button button_active button_restart">
            ${languageSettings[localStorage.getItem('language-quiz') || 'ru'][19]}
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
    document.body.style.overflow='';
    window.scrollTo(0, 0);
  }
}
