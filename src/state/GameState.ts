let state = {
  view: "Start page",
  isActive: false,
  isMobile: false,
  level: 1,
  speed: 1,
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
  increaseSpeed: function () {
    this.speed++;
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
    this.speed = 1;
  },
};

export default state;
