const body = document.querySelector("body") as HTMLElement;
const wrapper = document.querySelector(".wrapper") as HTMLElement;

let View: MyObjectType = {
  body: body,
  wrapper: wrapper,
};

export default View;

interface MyObjectType {
  body: HTMLElement;
  wrapper: HTMLElement;
  header?: HTMLElement;
  main?: HTMLElement;
  basket?: HTMLElement;
  level?: HTMLElement;
  curScore?: HTMLElement;
  bestScore?: HTMLElement;
}
