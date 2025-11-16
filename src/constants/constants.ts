import { determineGameFieldWidth } from "../helpers/helpers";

export const BASKET_WIDTH = 155;
export const SPEED_IN_PX: number[] = [1, 2, 3, 4, 5, 6, 6.5, 7, 7.5, 8];
export const LEVEL_PERIOD = 15000;
export const BASKET_HEIGHT = 146;
export const BASKET_STEP = 50;
const BODY_MAX_WIDTH = 1920;
export const COIN_HEIGHT = 50;
export const COIN_WIDTH = 50;

export let gameFieldWidth: number = determineGameFieldWidth(BODY_MAX_WIDTH);

export let basketPosition: number = gameFieldWidth / 2 - BASKET_WIDTH / 2;

export const sideIndent: number = (gameFieldWidth % BASKET_WIDTH) / 2;

export const leftSideEdge: number = sideIndent;
export const rightSideEdge: number = gameFieldWidth - sideIndent - BASKET_WIDTH;
export const coinClicksQuantity: number =
  (rightSideEdge - leftSideEdge) / COIN_WIDTH;
