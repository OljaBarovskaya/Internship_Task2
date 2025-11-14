export const WRAPPER_WIDTH = 95;
export const BASKET_WIDTH = 100;
export const SPEED_IN_PX = [100, 200, 300, 300, 300, 300, 300, 300, 300, 300];
export const LEVEL_PERIOD = 1500;

export let clientMainWidth =
  (document.documentElement.clientWidth * WRAPPER_WIDTH) / 100;

export const clicksQuantity = Math.floor(clientMainWidth / 100);

export const sideIndent = (clientMainWidth - 100 * clicksQuantity) / 2;
export const leftSideEdge = sideIndent;
