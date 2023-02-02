import Quiz from "./Quiz.js";

export default class Main {
  constructor() {
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
                  ><span class="colored-fist-letter">Н</span>ачало</a
                >
              </li>
              <li class="navigation__item">
                <a class="navigation__link" href="#"
                  ><span class="colored-fist-letter">В</span>икторина</a
                >
              </li>
              <li class="navigation__item">
                <a class="navigation__link" href="#"
                  ><span class="colored-fist-letter">Г</span>алерея</a
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
              <h1 class="intro__title">Приветствую!</h1>
              <p class="intro__text">
                Птички слишком скучно, поэтому лучше попробуй угадать персонажей
                из WarCraft 3 по их репликам!
              </p>
              <div class="intro__buttons">
                <button class="button intro__button button_active">
                  <span class="colored-fist-letter">Н</span>ачать викторину
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

  mainPageHandler() {
    const hamburger = document.querySelector(".hamburger");
    const navigation = document.querySelector(".navigation");
    const startQuizButton = document.querySelector(".intro__button");
    

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

    const quiz = new Quiz();

    document.addEventListener("click", menuClickHandler);
    startQuizButton.addEventListener("click", quiz.createQuiz);
  }
}
