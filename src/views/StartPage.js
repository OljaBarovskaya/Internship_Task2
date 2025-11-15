import { createButton } from "../components/Buttons";
import state from "../state/GameState";
import createGameView from "./GameView";
import startGame from "../components/Game";
import gameStartState from "../state/GameStartState";
import {
  rightSideEdge,
  leftSideEdge,
  basketPosition,
  BASKET_STEP,
} from "../constants/constants";

const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");

function createHeading(text) {
  const h1 = document.createElement("h1");
  h1.innerText = text;
  return h1;
}

function createHeader() {
  const header = document.createElement("header");
  const h1 = createHeading("Bank Vault Robbery");
  header.appendChild(h1);
  return header;
}

export function moveBasket(dir, basket) {
  let left = Number(basket.style.left.slice(0, -2));
  console.log(left, dir === "right", basket);
  if (dir === "left" && left - BASKET_STEP > leftSideEdge) {
    left = left - BASKET_STEP;
    console.log("k", left);
  }
  if (dir === "right" && left + BASKET_STEP < rightSideEdge) {
    left = left + BASKET_STEP;
    console.log("d", left + BASKET_STEP, BASKET_STEP, rightSideEdge);
  }
  basket.style.left = `${left}px`;
}

function createBasket() {
  const basket = document.createElement("div");
  basket.classList.add("basket");
  basket.style.left = `${basketPosition}px`;
  if (!state.isMobile) {
    document.addEventListener("keydown", (event) => {
      if (state.isActive) {
        if (event.code === "ArrowLeft") {
          moveBasket("left", basket);
        }
        if (event.code === "ArrowRight") {
          moveBasket("right", basket);
        }

        // if (event.code === "ArrowLeft" && left - BASKET_STEP > leftSideEdge) {
        //   left = left - BASKET_STEP;
        // }
        // if (event.code === "ArrowRight" && left + BASKET_STEP < rightSideEdge) {
        //   left = left + BASKET_STEP;
        // }
        // basket.style.left = `${left}px`;
      }
    });
  }

  return basket;
}

function createMain() {
  const main = document.createElement("main");
  const basket = createBasket();
  main.appendChild(basket);

  return main;
}

export default function createStartPage() {
  const buttonMain = createButton(["button", "button_main"], "Start game");
  const header = createHeader();
  const main = createMain();
  body.prepend(buttonMain);
  wrapper.appendChild(header);
  wrapper.appendChild(main);

  buttonMain.addEventListener("click", () => {
    header.removeChild(header.firstElementChild);
    buttonMain.remove();
    state.changeView("game");
    state.activate();
    createGameView();
    startGame(
      gameStartState.level,
      gameStartState.currentScore,
      gameStartState.bestScore
    );
    console.log("5", gameStartState.level);
  });
}
