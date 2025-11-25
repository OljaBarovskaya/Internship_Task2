import { determineGameFieldWidth } from "../helpers/helpers";

export const LEVEL_PERIOD = 10000;
const BODY_MAX_WIDTH = 1920;

export const gameFieldWidth: number = determineGameFieldWidth(BODY_MAX_WIDTH);

export const DIMENSIONS = countDimensions(gameFieldWidth);

export enum BASKET_MOVE {
  left = "ArrowLeft",
  right = "ArrowRight",
}

export let basketPosition: number =
  gameFieldWidth / 2 - DIMENSIONS!.BASKET_WIDTH / 2;

export const sideIndent: number =
  (gameFieldWidth % DIMENSIONS!.BASKET_WIDTH) / 2;

export const leftSideEdge: number = sideIndent;
export const rightSideEdge: number =
  gameFieldWidth - sideIndent - DIMENSIONS!.BASKET_WIDTH;
export const coinClicksQuantity: number =
  (rightSideEdge - leftSideEdge) / DIMENSIONS!.COIN_WIDTH;

function countDimensions(gameFieldWidth: number) {
  if (gameFieldWidth >= 800) {
    return {
      BASKET_WIDTH: 155,
      BASKET_HEIGHT: 146,
      BASKET_STEP: 50,
      COIN_HEIGHT: 50,
      COIN_WIDTH: 50,
    };
  }
  if (gameFieldWidth < 800 && gameFieldWidth >= 550) {
    return {
      BASKET_WIDTH: 119,
      BASKET_HEIGHT: 112,
      BASKET_STEP: 38.5,
      COIN_HEIGHT: 38.5,
      COIN_WIDTH: 38.5,
    };
  }

  if (gameFieldWidth < 550) {
    return {
      BASKET_WIDTH: 83,
      BASKET_HEIGHT: 78.5,
      BASKET_STEP: 27,
      COIN_HEIGHT: 27,
      COIN_WIDTH: 27,
    };
  }
}
