import {
  leftSideEdge,
  coinClicksQuantity,
  COIN_WIDTH,
} from "../constants/constants";

export default function createCoin() {
  console.log(1);
  let positionIndex = Math.floor(Math.random() * (coinClicksQuantity - 1)) + 1;

  let y = -50;
  let x = leftSideEdge + positionIndex * COIN_WIDTH;

  const div = document.createElement("div");
  div.classList.add("coin");
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;

  return div;
}
