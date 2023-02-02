import Main from "./Main.js";

window.onload = () => {
  const language = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "ru";
  const main = new Main(language);
  main.createMainPage();
  main.mainPageHandler();
};


