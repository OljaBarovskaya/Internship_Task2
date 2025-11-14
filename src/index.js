import "./style.css";
import createStartPage from "./views/StartPage";
import gameStartState from "./state/GameStartState";
import state from "./state/GameState";

function startApp() {
  createStartPage();
}

function getStorageBestScore() {
  return Number(localStorage.getItem("bestScore"));
}

function setStorageBestScore() {
  if (state.bestScore) {
    localStorage.setItem("bestScore", state.bestScore);
  }
}

window.addEventListener("beforeunload", setStorageBestScore);
window.addEventListener("load", () => {
  if (getStorageBestScore) {
    gameStartState.bestScore = getStorageBestScore();
    state.bestScore = getStorageBestScore();
  }
});

startApp();
