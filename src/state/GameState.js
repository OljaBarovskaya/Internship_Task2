let state = {
  view: "Start page",
  isActive: false,
  isMobile: false,

  changeView: function (view) {
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
