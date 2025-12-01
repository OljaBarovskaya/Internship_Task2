import "./style.css";
import createStartPage from "./views/StartPage";
import state from "./state/GameState";
import { isMobileDevice, getStorageBestScore } from "./helpers/helpers";

function startApp() {
  state.isMobile = isMobileDevice();
  createStartPage();
}

window.addEventListener("load", () => {
  if (getStorageBestScore) {
    state.bestScore = getStorageBestScore();
  }
});

startApp();
