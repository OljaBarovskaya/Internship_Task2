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

let intervalLevel;
let intervalCoinId = null;

function coinSpeed(level) {
  return SPEED_IN_PX[level - 1];
}

export default function startGame(level, currentScore, bestScore) {
  const main = document.querySelector("main");
  const curScore = document.querySelector(".current-score");
  const levelCurrent = document.querySelector(".level");
  const bestScoreButton = document.querySelector(".best-score");
  const distance = main.clientHeight - BASKET_HEIGHT - COIN_HEIGHT / 2;
  const basket = document.querySelector(".basket");

  const gameState = {
    level: level,
    currentScore: currentScore,
    bestScore: bestScore,
    increaseCurrentScore: function () {
      this.currentScore++;
      curScore.textContent = this.currentScore;
    },
  };

  function updateGameState() {
    levelCurrent.textContent = level;
    curScore.textContent = currentScore;
    bestScoreButton.textContent = bestScore;
    console.log("7", level);
  }

  let speed = coinSpeed(gameState.level);
  gameState.speed = speed;

  function levelIncrease() {
    console.log(level);
    gameState.level++;
    if (gameState.level <= 10) {
      levelCurrent.innerText = gameState.level;
      console.log("8", gameState.level);
    } else {
      clearInterval(intervalLevel);
      if (intervalCoinId !== null) {
        cancelAnimationFrame(intervalCoinId);
        intervalCoinId = null;
      }
      showResult(gameState.currentScore, gameState.bestScore);
      state.deactivate();
      return;
    }
  }
  function updateCoin(coin) {
    //console.log(coin, `${coin.offsetTop + gameState.speed}px`);
    const yNew = coin.offsetTop + gameState.speed;
    coin.style.top = `${yNew}px`;
    //console.log(yNew, distance);
    if (yNew > distance) {
      if (intervalCoinId !== null) {
        cancelAnimationFrame(intervalCoinId);
        intervalCoinId = null;
      }
      console.log(basket.style.left, coin.style.left);
      const basketLeft = parseInt(basket.style.left, 10);
      const coinLeft = parseInt(coin.style.left, 10);
      if (
        basketLeft <= coinLeft &&
        coinLeft <= basketLeft + BASKET_WIDTH - COIN_WIDTH
      ) {
        gameState.increaseCurrentScore();
      }
      coin.remove();
      startCoinFall();
      gameState.speed = coinSpeed(gameState.level);
      return;
    }
    requestAnimationFrame(() => updateCoin(coin));
  }

  function startLevelUpdate() {
    intervalLevel = setInterval(levelIncrease, LEVEL_PERIOD);
  }

  function startCoinFall() {
    console.log(2);
    const coin = createCoin();
    // console.log(coin, main);
    main.prepend(coin);
    intervalCoinId = requestAnimationFrame(() => updateCoin(coin));
  }

  updateGameState();
  startLevelUpdate();
  startCoinFall();
}
