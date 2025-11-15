import { determineGameFieldWidth } from "../helpers/helpers";

export const BASKET_WIDTH = 155;
export const SPEED_IN_PX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const LEVEL_PERIOD = 2000;
export const BASKET_HEIGHT = 146;
export const BASKET_STEP = 50;
const BODY_MAX_WIDTH = 1920;
export const COIN_HEIGHT = 50;
export const COIN_WIDTH = 50;

export let gameFieldWidth = determineGameFieldWidth(BODY_MAX_WIDTH);

export let basketPosition = gameFieldWidth / 2 - BASKET_WIDTH / 2;

export const sideIndent = (gameFieldWidth % BASKET_WIDTH) / 2;

export const leftSideEdge = sideIndent;
export const rightSideEdge = gameFieldWidth - sideIndent - BASKET_WIDTH;
export const coinClicksQuantity = (rightSideEdge - leftSideEdge) / COIN_WIDTH;
