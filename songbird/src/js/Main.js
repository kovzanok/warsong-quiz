import Quiz from "./Quiz.js";
import Gallery from "./Gallery.js";
import languageSettings from "./language.js";

export default class Main {
  constructor(language) {
    this.language = language;
  }

  mainPageHandler() {
    const hamburger = document.querySelector(".hamburger");
    const navigation = document.querySelector(".navigation");
    const startQuizButton = document.querySelector(".intro__button");
    const galleryLink=navigation.lastElementChild;
    
    const logo = document.querySelector(".logo-image");

    const hamburgerClickHandler = (e) => {
      hamburger.classList.toggle("hamburger_active");
      navigation.classList.toggle("navigation_active");
      document.body.classList.toggle("body_lock");
    };

    const menuClickHandler = (e) => {
      if (e.target.closest(".hamburger")) {
        hamburgerClickHandler();
      } else if (
        !e.target.classList.contains("navigation__link") &&
        navigation.classList.contains("navigation_active")
      ) {
        hamburgerClickHandler();
      }
    };


    const quiz = new Quiz(this.getLanguage());
    const gallery=new Gallery(this.language);

    document.addEventListener("click", menuClickHandler);
    startQuizButton.addEventListener("click", quiz.createQuiz);
    logo.addEventListener("click", this.changeLanguage);
    galleryLink.addEventListener("click",gallery.showGallery);

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
                  ><span class="colored-fist-letter">${languageSettings[this.language][0][0]}</span>${languageSettings[this.language][0].slice(1)}</a
                >
              </li>
              <li class="navigation__item">
                <a class="navigation__link" href="#"
                  ><span class="colored-fist-letter">${languageSettings[this.language][1][0]}</span>${languageSettings[this.language][1].slice(1)}</a
                >
              </li>
              <li class="navigation__item">
                <a class="navigation__link" href="#"
                  ><span class="colored-fist-letter">${languageSettings[this.language][2][0]}</span>${languageSettings[this.language][2].slice(1)}</a
                >
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
                  <span class="colored-fist-letter">${languageSettings[this.language][4][0]}</span>${languageSettings[this.language][4].slice(1)}
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
            <li class="link-element"><a class="footer__link" href="#">RSS</a></li>
            <li class="link-element">
              <a class="footer__link" href="#">©kovzanok, 2023</a>
            </li>
          </ul>
        </div>
      </footer>`
    );
  }

  changeLanguage = () => {
    if (this.language === "ru") {
      this.language = "en";
      this.createMainPage();
      this.mainPageHandler();
      localStorage.setItem('language',this.getLanguage());
    } else {
      
      this.language = "ru";
      this.createMainPage();
      this.mainPageHandler();
      localStorage.setItem('language',this.getLanguage());
    }
  };

  getLanguage(){
    return this.language;
  }
}
