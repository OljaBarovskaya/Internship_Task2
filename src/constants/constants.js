import determineGameFieldWidth from "../helpers/helpers";

export const WRAPPER_WIDTH = 95;
export const BASKET_WIDTH = 155;
export const SPEED_IN_PX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const LEVEL_PERIOD = 2000;
export const BASKET_HEIGHT = 146;
const BODY_MAX_WIDTH = 1920;
export const COIN_HEIGHT = 50;

export let gameFieldWidth = determineGameFieldWidth(
  WRAPPER_WIDTH,
  BODY_MAX_WIDTH
);

export let basketPosition = gameFieldWidth / 2 - BASKET_WIDTH / 2;
export const clicksQuantity = Math.floor(basketPosition / BASKET_WIDTH) * 2 + 1;
export const sideIndent = (gameFieldWidth - BASKET_WIDTH * clicksQuantity) / 2;
export const leftSideEdge = sideIndent;
export const rightSideEdge = gameFieldWidth - sideIndent;
