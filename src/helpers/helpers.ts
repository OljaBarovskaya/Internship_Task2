import state from "../state/GameState";

export function determineGameFieldWidth(BODY_MAX_WIDTH: number): number {
  let gameFieldWidth: number;
  if (document.documentElement.clientWidth < BODY_MAX_WIDTH) {
    gameFieldWidth = document.documentElement.clientWidth;
  } else {
    gameFieldWidth = BODY_MAX_WIDTH;
  }
  return gameFieldWidth;
}

export function isMobileDevice(): boolean {
  const userAgent: string = navigator.userAgent;

  const isMobile: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  );

  return isMobile;
}

export function getStorageBestScore() {
  return Number(localStorage.getItem("bestScore"));
}

export function setStorageBestScore() {
  if (state.bestScore) {
    localStorage.setItem("bestScore", String(state.bestScore));
  }
}
