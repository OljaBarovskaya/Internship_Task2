import state from "../state/GameState";
import { createButton } from "./Buttons";
import startGame from "./Game";
import gameStartState from "../state/GameStartState";

const body = document.querySelector("body");

function createResultTable(message) {
  const resultTable = document.createElement("div");
  resultTable.classList.add("result-table");

  const h2 = document.createElement("h2");
  h2.textContent = message;

  const restartButton = createButton(["restart-button"], "Restart the game");

  resultTable.append(h2);
  resultTable.append(restartButton);

  body.append(resultTable);

  function restartGame() {
    resultTable.remove();

    const coin = document.querySelector(".coin");
    coin.remove();
    state.activate();
    startGame(
      gameStartState.level,
      gameStartState.currentScore,
      state.bestScore
    );
  }

  restartButton.addEventListener("click", restartGame);

  return resultTable;
}

export default function showResult(currentScore, bestScore) {
  const newRecordMessage = `Congratulations! You set a new record! Your Score is ${currentScore}`;
  const defaultMessage = `The game is over. Your score is ${currentScore}`;
  const bestScoreButton = document.querySelector(".best-score");

  if (bestScore < currentScore) {
    state.bestScore = currentScore;
    createResultTable(newRecordMessage);

    bestScoreButton.textContent = state.bestScore;
  } else {
    createResultTable(defaultMessage);
  }
}
