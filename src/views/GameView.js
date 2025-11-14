import gameStartState from "../state/GameStartState";

function createInfoButtonSpan(value, className) {
  const span = document.createElement("span");
  span.classList.add(className);
  span.textContent = value;

  return span;
}

function createInfoButton(text, value, className) {
  const button = document.createElement("div");
  button.classList.add("information-button");
  button.textContent = text;

  const span = createInfoButtonSpan(value, className);
  button.append(span);

  return button;
}

function createInfoButtons() {
  const buttonCurrentLevel = createInfoButton(
    "Level ",
    gameStartState.level,
    "level"
  );
  console.log("level", gameStartState.level);
  const buttonCurrentScore = createInfoButton(
    "Score ",
    gameStartState.currentScore,
    "current-score"
  );
  const buttonBestScore = createInfoButton(
    "Best Score ",
    gameStartState.bestScore,
    "best-score"
  );

  console.log("6", gameStartState.level);
  const header = document.querySelector("header");
  header.append(buttonCurrentLevel);
  header.append(buttonCurrentScore);
  header.append(buttonBestScore);
}

export default function createGameView() {
  createInfoButtons();
}
