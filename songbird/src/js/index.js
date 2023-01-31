import Quiz from "./Quiz.js";

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

const quiz=new Quiz();

document.addEventListener("click", menuClickHandler);
startQuizButton.addEventListener('click',quiz.createQuiz);