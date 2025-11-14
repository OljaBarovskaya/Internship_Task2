export default function determineGameFieldWidth(WRAPPER_WIDTH, BODY_MAX_WIDTH) {
  let gameFieldWidth;
  if (document.documentElement.clientWidth < BODY_MAX_WIDTH) {
    gameFieldWidth =
      (document.documentElement.clientWidth * WRAPPER_WIDTH) / 100;
  } else {
    gameFieldWidth = (BODY_MAX_WIDTH * WRAPPER_WIDTH) / 100;
  }
  return gameFieldWidth;
}
