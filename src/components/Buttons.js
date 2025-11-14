export function createButton(styles, text) {
  const button = document.createElement("button");
  button.classList.add(...styles);
  button.textContent = text;

  return button;
}
