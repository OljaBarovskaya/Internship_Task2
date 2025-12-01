import state from "../state/GameState";

function createInfoButtonSpan(value: number, className: string) {
  const span = document.createElement("span");
  span.classList.add(className);
  span.textContent = String(value);

  return span;
}

function createInfoButton(text: string, value: number, className: string) {
  const button = document.createElement("div");
  button.classList.add("information-button");
  button.textContent = text;

  const span = createInfoButtonSpan(value, className);
  button.append(span);

  return button;
}

function createInfoButtons() {
  const buttonCurrentLevel = createInfoButton("Level ", state.level, "level");

  const buttonCurrentScore = createInfoButton(
    "Score ",
    state.currentScore,
    "current-score"
  );
  const buttonBestScore = createInfoButton(
    "Best Score ",
    state.bestScore,
    "best-score"
  );

  const header = document.querySelector("header") as HTMLElement;
  header.append(buttonCurrentLevel);
  header.append(buttonCurrentScore);
  header.append(buttonBestScore);
}

export default function createGameView() {
  createInfoButtons();
}
