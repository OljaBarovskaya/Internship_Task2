import createButton from "../components/Buttons";
import state from "../state/GameState";
import createGameView from "./GameView";
import controller from "../components/Game";
import {
  rightSideEdge,
  leftSideEdge,
  basketPosition,
  DIMENSIONS,
} from "../constants/constants";
import { BASKET_MOVE } from "../constants/constants";

const body = document.querySelector("body") as HTMLElement;
const wrapper = document.querySelector(".wrapper") as HTMLElement;

function setupTouchControls(basket: HTMLElement) {
  let initialTouchX: number | null = null;

  document.addEventListener("touchstart", (event: TouchEvent) => {
    initialTouchX = event.touches[0]!.clientX;
  });

  document.addEventListener("touchmove", (event: TouchEvent) => {
    if (initialTouchX === null || !state.isActive) {
      return;
    }
    const currentTouchX = event.touches[0]!.clientX;
    const diffX = currentTouchX - initialTouchX;
    const SWIPE_THRESHOLD = DIMENSIONS!.BASKET_STEP / 2;
    if (Math.abs(diffX) > SWIPE_THRESHOLD) {
      if (diffX > 0) {
        moveBasket("right", basket);
      } else {
        moveBasket("left", basket);
      }
      initialTouchX = currentTouchX;
    }
  });
}

function createHeading(text: string) {
  const h1 = document.createElement("h1");
  h1.innerText = text;
  return h1;
}

function createHeader(): HTMLElement {
  const header = document.createElement("header");
  const h1 = createHeading("Bank Vault Robbery");
  header.appendChild(h1);
  return header;
}

export function moveBasket(dir: "left" | "right", basket: HTMLElement) {
  let left = Number(basket.style.left.slice(0, -2));
  console.log(left, dir === "right", basket);
  if (dir === "left" && left - DIMENSIONS!.BASKET_STEP > leftSideEdge) {
    left = left - DIMENSIONS!.BASKET_STEP;
  }
  if (dir === "right" && left + DIMENSIONS!.BASKET_STEP < rightSideEdge) {
    left = left + DIMENSIONS!.BASKET_STEP;
  }
  basket.style.left = `${left}px`;
}

function createBasket() {
  const basket = document.createElement("div");
  basket.classList.add("basket");
  basket.style.left = `${basketPosition}px`;
  basket.style.width = `${DIMENSIONS!.BASKET_WIDTH}px`;
  basket.style.height = `${DIMENSIONS!.BASKET_HEIGHT}px`;
  console.log("mobile", state.isMobile);
  if (!state.isMobile) {
    document.addEventListener("keydown", (event) => {
      if (state.isActive) {
        if (event.code === BASKET_MOVE.left) {
          moveBasket("left", basket);
        }
        if (event.code === BASKET_MOVE.right) {
          moveBasket("right", basket);
        }
      }
    });
  } else {
    setupTouchControls(basket);
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
    if (header.firstElementChild) {
      header.removeChild(header.firstElementChild);
    }
    buttonMain.remove();
    state.changeView("game");

    createGameView();
    controller("Start game");
  });
}
