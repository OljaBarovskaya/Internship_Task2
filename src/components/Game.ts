import {
  BASKET_HEIGHT,
  SPEED_IN_PX,
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

function coinSpeed(level: number) {
  if (SPEED_IN_PX[level - 1] !== undefined) {
    return SPEED_IN_PX[level - 1];
  } else return 1;
}

export default function startGame() {
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
    let speed = coinSpeed(state.level);
    state.speed = speed!;
    if (state.level <= 10) {
      levelCurrent.innerText = String(state.level);
    } else {
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
  }
  function updateCoin(coin: HTMLElement) {
    const yNew = coin.offsetTop + state.speed!;
    coin.style.top = `${yNew}px`;
    if (yNew > distance) {
      if (intervalCoinId !== null) {
        cancelAnimationFrame(intervalCoinId);
        intervalCoinId = null;
      }
      const basketLeft = parseInt(basket.style.left, 10);
      const coinLeft = parseInt(coin.style.left, 10);
      if (
        basketLeft <= coinLeft &&
        coinLeft <= basketLeft + BASKET_WIDTH - COIN_WIDTH
      ) {
        state.increaseCurrentScore();
        curScore.textContent = String(state.currentScore);
      }
      coin.remove();

      startCoinFall();
      return;
    }
    if (intervalLevel) {
      requestAnimationFrame(() => updateCoin(coin));
    }
  }

  function startLevelUpdate() {
    intervalLevel = setInterval(levelIncrease, LEVEL_PERIOD);
  }

  function startCoinFall() {
    if (!state.speed) {
      state.speed = 1;
    }
    const coin = createCoin();
    main.prepend(coin);
    intervalCoinId = requestAnimationFrame(() => updateCoin(coin));
  }

  updateInfoButtons();
  startLevelUpdate();
  startCoinFall();
}
