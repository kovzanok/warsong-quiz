import Main from "./Main.js";
import "../sass/style.scss";

window.onload = () => {
  const language = localStorage.getItem("language") || "ru";
  const main = new Main(language);
  main.createMainPage();
  main.mainPageHandler();
};
