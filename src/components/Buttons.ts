export default function createButton(styles: string[], text: string) {
  const button = document.createElement("button");
  button.classList.add(...styles);
  button.textContent = text;

  return button;
}
