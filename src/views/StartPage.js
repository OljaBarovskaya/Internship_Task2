import { createButton } from "../components/Buttons";
import state from "../state/GameState";
import createGameView from "./GameView";
import startGame from "../components/Game";
import gameStartState from "../state/GameStartState";
import { WRAPPER_WIDTH, BASKET_WIDTH } from "../constants/constants";

const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");

let clientMainWidth =
  (document.documentElement.clientWidth * WRAPPER_WIDTH) / 100;
let startPositionBasket = clientMainWidth / 2 - BASKET_WIDTH / 2;
const clicksQuantity = Math.floor(clientMainWidth / BASKET_WIDTH);
const sideIndent = (clientMainWidth - BASKET_WIDTH * clicksQuantity) / 2;
const leftSideEdge = sideIndent;
const rightSideEdge = clientMainWidth - sideIndent;

function createHeading(text) {
  const h1 = document.createElement("h1");
  h1.innerText = text;
  return h1;
}

function createHeader() {
  const header = document.createElement("header");
  const h1 = createHeading("Catch money game");
  header.appendChild(h1);
  return header;
}

function createBasket() {
  const basket = document.createElement("div");
  basket.classList.add("basket");
  basket.style.left = `${startPositionBasket}px`;
  let left = startPositionBasket;
  document.addEventListener("keydown", (event) => {
    console.log(state.isActive, left);
    if (state.isActive) {
      if (event.code === "ArrowLeft" && left - BASKET_WIDTH > leftSideEdge) {
        left = left - BASKET_WIDTH;
      }
      if (event.code === "ArrowRight" && left + BASKET_WIDTH < rightSideEdge) {
        left = left + BASKET_WIDTH;
      }
      basket.style.left = `${left}px`;
    }
  });
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
