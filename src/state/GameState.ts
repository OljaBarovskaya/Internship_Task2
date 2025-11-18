import { SPEED_IN_PX } from "../constants/constants";

let state = {
  view: "Start page",
  isActive: false,
  isMobile: false,
  level: 1,
  speed: SPEED_IN_PX[0],
  currentScore: 0,
  bestScore: 0,

  changeView: function (view: string) {
    this.view = view;
  },
  deactivateGameState: function () {
    this.isActive = false;
  },
  activateGameState: function () {
    this.isActive = true;
  },
  increaseLevel: function () {
    this.level++;
  },
  increaseCurrentScore: function () {
    this.currentScore++;
  },
  setBestScore: function (bestScore: number) {
    this.bestScore = bestScore;
  },

  resetState: function () {
    this.level = 1;
    this.currentScore = 0;
    this.speed = SPEED_IN_PX[0];
  },
};

export default state;
