let state = {
  view: "Start page",
  isActive: false,
  isMobile: false,
  bestScore: 0,

  changeView: function (view: string) {
    this.view = view;
  },
  deactivate: function () {
    this.isActive = false;
  },
  activate: function () {
    this.isActive = true;
  },
};

export default state;
