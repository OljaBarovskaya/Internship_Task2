import createButton from "../components/Buttons";
import state from "../state/GameState";
import { moveBasket } from "./StartPage";

function setTouchListeners() {
  const main = document.querySelector("main") as HTMLElement;
  const basket = document.querySelector(".basket") as HTMLElement;

  const MIN_SWIPE_DISTANCE = 50;
  let touchStartX = 0;

  main.addEventListener("touchstart", (event: TouchEvent) => {
    touchStartX = event.touches[0]!.clientX;
    console.log("touch");
  });

  main.addEventListener("touchend", (event: TouchEvent) => {
    const touchEndX = event.changedTouches[0]!.clientX;
    const distanceX = touchEndX - touchStartX;

    if (Math.abs(distanceX) > MIN_SWIPE_DISTANCE) {
      if (distanceX > 0) {
        moveBasket("right", basket);
      } else {
        moveBasket("left", basket);
      }
    }
    touchStartX = 0;
  });
}

// function createArrowButtons() {
//   const main = document.querySelector("main") as HTMLElement;
//   const basket = document.querySelector(".basket") as HTMLElement;

//   const leftButton = createButton(["left-arrow"], "<") as HTMLElement;
//   const rightButton = createButton(["right-arrow"], ">") as HTMLElement;

//   leftButton.addEventListener("click", () => {
//     moveBasket("left", basket);
//   });

//   rightButton.addEventListener("click", () => {
//     moveBasket("right", basket);
//   });

//   main.append(leftButton);
//   main.append(rightButton);
// }

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
  if (state.isMobile) {
    setTouchListeners();
  }
}
