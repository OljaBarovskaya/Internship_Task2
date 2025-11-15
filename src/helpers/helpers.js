export function determineGameFieldWidth(BODY_MAX_WIDTH) {
  let gameFieldWidth;
  if (document.documentElement.clientWidth < BODY_MAX_WIDTH) {
    gameFieldWidth = document.documentElement.clientWidth;
  } else {
    gameFieldWidth = BODY_MAX_WIDTH;
  }
  return gameFieldWidth;
}

export function isMobileDevice() {
  const userAgent = navigator.userAgent;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  );

  return isMobile;
}
