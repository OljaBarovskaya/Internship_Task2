import {
  leftSideEdge,
  coinClicksQuantity,
  DIMENSIONS,
} from "../constants/constants";

export default function createCoin() {
  let positionIndex = Math.floor(Math.random() * (coinClicksQuantity - 1)) + 1;

  let y = -50;
  let x = leftSideEdge + positionIndex * DIMENSIONS!.COIN_WIDTH;

  const div = document.createElement("div");
  div.classList.add("coin");
  console.log(DIMENSIONS?.COIN_HEIGHT);
  div.style.width = `${DIMENSIONS!.COIN_WIDTH}px`;
  div.style.height = `${DIMENSIONS!.COIN_HEIGHT}px`;
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;

  return div;
}
