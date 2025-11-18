import state from "../state/GameState";
import createButton from "./Buttons";
import controller from "./Game";
import { setStorageBestScore } from "../helpers/helpers";

const body = document.querySelector("body") as HTMLBodyElement;

function createResultTable(message: string) {
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
    state.resetState();
    controller("Start game");
  }

  restartButton.addEventListener("click", restartGame);

  return resultTable;
}

export default function showResult(currentScore: number, bestScore: number) {
  const newRecordMessage = `Congratulations! You set a new record! Your Score is ${currentScore}`;
  const defaultMessage = `The game is over. Your score is ${currentScore}`;
  const bestScoreButton = document.querySelector(".best-score") as HTMLElement;

  if (bestScore < currentScore) {
    state.bestScore = currentScore;
    createResultTable(newRecordMessage);
    setStorageBestScore();
    bestScoreButton.textContent = String(state.bestScore);
  } else {
    createResultTable(defaultMessage);
  }
}
