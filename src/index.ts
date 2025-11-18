import "./style.css";
import createStartPage from "./views/StartPage";
import gameStartState from "./state/GameStartState";
import state from "./state/GameState";
import {
  isMobileDevice,
  setStorageBestScore,
  getStorageBestScore,
} from "./helpers/helpers";

function startApp() {
  const isMobile = isMobileDevice();

  state.isMobile = isMobile;
  createStartPage();
}

window.addEventListener("beforeunload", setStorageBestScore);
window.addEventListener("load", () => {
  if (getStorageBestScore) {
    gameStartState.bestScore = getStorageBestScore();
    state.bestScore = getStorageBestScore();
  }
});

startApp();
