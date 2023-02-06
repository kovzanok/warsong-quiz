import Quiz from "./Quiz.js";
import Gallery from "./Gallery.js";
import languageSettings from "./language.js";

export default class Main {
  constructor(language) {
    this.language = language;
  }

  navigationHandler() {
    const hamburger = document.querySelector(".hamburger");
    const navigation = document.querySelector(".navigation");
    const galleryLink = navigation.querySelectorAll(".navigation__link")[2];
    const quizLink = navigation.querySelectorAll(".navigation__link")[1];
    const languageBlock = document.querySelector(".navigation__language");

    const closeHamburger = () => {
      hamburger.classList.remove("hamburger_active");
      navigation.classList.remove("navigation_active");
      document.body.classList.remove('body_lock');
    };

    const openHamburger = () => {
      hamburger.classList.add("hamburger_active");
      navigation.classList.add("navigation_active");
      document.body.classList.add('body_lock');
    };

    const hamburgerClickHandler = () => {
      if (hamburger.classList.contains("hamburger_active")) {
        closeHamburger();
      } else {
        openHamburger();
      }
    };

    const menuClickHandler = (e) => {
      
      if (
        e.target.classList.contains("hamburger") ||
        e.target.closest(".hamburger")
      ) {
        hamburgerClickHandler();
      } 
      else if(e.target.classList.contains('block__item')||e.target.closest('.modal__content')){
        
      }
      else {
        closeHamburger();
        
      }
    };

    const quizLinkHandler = () => {
      const quiz = new Quiz(this.getLanguage());
      quiz.createQuiz();
    };

    const galleryLinkHandler = () => {
      const gallery = new Gallery(this.language);
      gallery.showGallery();
    };

    document.onclick = menuClickHandler;
    quizLink.addEventListener("click", quizLinkHandler);
    languageBlock.addEventListener("click", this.changeLanguage);
    galleryLink.addEventListener("click", galleryLinkHandler);
  }

  mainPageHandler() {
    const startQuizButton = document.querySelector(".intro__button");
    const quiz = new Quiz(this.getLanguage());

    startQuizButton.addEventListener("click", quiz.createQuiz);
    this.navigationHandler();
  }

  createMainPage() {
    if (document.querySelector("header")) {
      document.querySelector("header").remove();
      document.querySelector("main").remove();
      document.querySelector("footer").remove();
    }
    document.querySelector("script").insertAdjacentHTML(
      "beforebegin",
      `<header class="header">
        <div class="wrapper header__wrapper">
          <div class="header__logo">
            <img class="logo-image" src="./src/img/logo.png" />
          </div>
  
          <span class="hamburger">
            <span class="hamburger__line"></span>
          </span>
          <nav class="header__nav">
            <ul class="navigation">
              <li class="navigation__item">
                <a class="navigation__link" href="index.html"
                  ><span class="colored-fist-letter">${
                    languageSettings[this.language][0][0]
                  }</span><span class="the-rest-of-word">${languageSettings[
        this.language
      ][0].slice(1)}</span></a
                >
              </li>
              <li class="navigation__item">
                <a class="navigation__link" href="#"
                  ><span class="colored-fist-letter">${
                    languageSettings[this.language][1][0]
                  }</span><span class="the-rest-of-word">${languageSettings[
        this.language
      ][1].slice(1)}</span></a
                >
              </li>
              <li class="navigation__item">
                <a class="navigation__link" href="#"
                  ><span class="colored-fist-letter">${
                    languageSettings[this.language][2][0]
                  }</span><span class="the-rest-of-word">${languageSettings[
        this.language
      ][2].slice(1)}</span></a
                >
              </li>
              <li class="navigation__item">
                <div class="navigation__language">
                  <img class="language language_ru" src='./src/img/ru.png'>
                  <img class="language language_en" src='./src/img/en.png'>
                </div>
              </li>
            </ul>
            
          </nav>
        </div>
      </header>
      <main class="main">
        <section class="intro">
          <div class="wrapper intro__wrapper">
            <div class="intro__content">
              ${languageSettings[this.language][3]}
              <div class="intro__buttons">
                <button class="button intro__button button_active">
                  <span class="colored-fist-letter">${
                    languageSettings[this.language][4][0]
                  }</span>${languageSettings[this.language][4].slice(1)}
                </button>
              </div>
            </div>
            <img class="intro__image" src="./src/img/backgrounds/intro.png" />
          </div>
        </section>
      </main>
      <footer class="footer">
        <div class="wrapper footer__wrapper">
          <ul class="footer__links">
            <li class="link-element"><a class="footer__link" href="https://rs.school/js/" target="_blank">RSS</a></li>
            <li class="link-element">
              <a class="footer__link" href="https://github.com/kovzanok" target="_blank">©kovzanok, 2023</a>
            </li>
          </ul>
        </div>
      </footer>`
    );
    if (document.querySelector(".language_active"))
      document
        .querySelector(".language_active")
        .classList.remove("language_active");
    document
      .querySelector(`.language_${this.language}`)
      .classList.add("language_active");
  }

  changeLanguage = (e) => {
    this.language = e.target.src.indexOf("ru.png") !== -1 ? "ru" : "en";

    if (document.querySelector(".gallery")) {
      const gallery = new Gallery(this.language);

      const firstLetters = document.querySelectorAll(".colored-fist-letter");
      const words = document.querySelectorAll(".the-rest-of-word");

      for (let i = 0; i < firstLetters.length; i++) {
        firstLetters[i].textContent = languageSettings[this.language][i][0];
        words[i].textContent = languageSettings[this.language][i].slice(1);
      }
      if (document.querySelector(".language_active"))
        document
          .querySelector(".language_active")
          .classList.remove("language_active");
      document
        .querySelector(`.language_${this.language}`)
        .classList.add("language_active");
      gallery.showGallery();
    } else {
      this.createMainPage();
      this.mainPageHandler();
    }

    localStorage.setItem("language", this.getLanguage());
  };

  getLanguage() {
    return this.language;
  }
}
