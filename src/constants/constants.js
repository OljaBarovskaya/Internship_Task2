export const WRAPPER_WIDTH = 95;
export const BASKET_WIDTH = 100;
export const SPEED_IN_PX = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const LEVEL_PERIOD = 2000;
export const BASKET_HEIGHT = 100;

export let clientMainWidth =
  (document.documentElement.clientWidth * WRAPPER_WIDTH) / 100;
export const basketPosition = clientMainWidth / 2 - BASKET_WIDTH / 2;

export const clicksQuantity = Math.floor(basketPosition / BASKET_WIDTH) * 2 + 1;

export const sideIndent = (clientMainWidth - BASKET_WIDTH * clicksQuantity) / 2;
export const leftSideEdge = sideIndent;
