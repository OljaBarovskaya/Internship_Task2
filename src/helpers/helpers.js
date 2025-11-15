export default function determineGameFieldWidth(BODY_MAX_WIDTH) {
  let gameFieldWidth;
  if (document.documentElement.clientWidth < BODY_MAX_WIDTH) {
    gameFieldWidth = document.documentElement.clientWidth;
  } else {
    gameFieldWidth = BODY_MAX_WIDTH;
  }
  return gameFieldWidth;
}
