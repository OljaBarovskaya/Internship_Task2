import {
  BASKET_HEIGHT,
  LEVEL_PERIOD,
  COIN_HEIGHT,
  BASKET_WIDTH,
  COIN_WIDTH,
} from "../constants/constants";
import state from "../state/GameState";
import showResult from "./Result";
import createCoin from "./Coin";

let intervalLevel: number | undefined;
let intervalCoinId: number | null = null;

export default function controller(action: "Start game" | "Stop game") {
  const main = document.querySelector("main") as HTMLElement;
  const curScore = document.querySelector(".current-score") as HTMLElement;
  const levelCurrent = document.querySelector(".level") as HTMLElement;
  const bestScoreButton = document.querySelector(".best-score") as HTMLElement;
  const distance = main.clientHeight - BASKET_HEIGHT - COIN_HEIGHT / 2;
  const basket = document.querySelector(".basket") as HTMLElement;

  function updateInfoButtons() {
    levelCurrent.textContent = String(state.level);
    curScore.textContent = String(state.currentScore);
    bestScoreButton.textContent = String(state.bestScore);
  }

  function levelIncrease() {
    state.increaseLevel();
    levelCurrent.textContent = String(state.level);
    state.increaseSpeed();
  }

  function updateCoin(coin: HTMLElement) {
    const yNew = coin.offsetTop + state.speed;
    coin.style.top = `${yNew}px`;
    if (yNew > distance) {
      const basketLeft = parseInt(basket.style.left, 10);
      const coinLeft = parseInt(coin.style.left, 10);
      if (
        coinLeft + COIN_WIDTH < basketLeft ||
        coinLeft > basketLeft + BASKET_WIDTH - COIN_WIDTH
      ) {
        coin.remove();
        console.log(state.currentScore, state.bestScore);
        controller("Stop game");
      } else {
        state.increaseCurrentScore();
        curScore.textContent = String(state.currentScore);
        if (intervalCoinId !== null) {
          cancelAnimationFrame(intervalCoinId);
          intervalCoinId = null;
        }
        coin.remove();
        startCoinFall();
        return;
      }
    }
    if (intervalLevel) {
      requestAnimationFrame(() => updateCoin(coin));
    }
  }

  function startLevelUpdate() {
    intervalLevel = setInterval(levelIncrease, LEVEL_PERIOD);
  }

  function startCoinFall() {
    const coin = createCoin();
    main.prepend(coin);
    intervalCoinId = requestAnimationFrame(() => updateCoin(coin));
  }

  function startGame() {
    state.activateGameState();
    updateInfoButtons();
    startLevelUpdate();
    startCoinFall();
  }

  function stopGame() {
    console.log("Stop", intervalLevel);
    clearInterval(intervalLevel);
    intervalLevel = undefined;
    if (intervalCoinId !== null) {
      cancelAnimationFrame(intervalCoinId);
      intervalCoinId = null;
      state.deactivateGameState();
      showResult(state.currentScore, state.bestScore);
    }
    return;
  }

  if (action === "Start game") {
    startGame();
  } else {
    stopGame();
  }
}
