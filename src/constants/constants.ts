import { determineGameFieldWidth } from "../helpers/helpers";

export const BASKET_WIDTH = 155;
export const LEVEL_PERIOD = 10000;
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

export enum BASKET_MOVE {
  left = "ArrowLeft",
  right = "ArrowRight",
}
