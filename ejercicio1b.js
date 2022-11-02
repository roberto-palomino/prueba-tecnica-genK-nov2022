function createButtonWithHoverEffect() {
  const body = document.querySelector("body");
  const button = document.createElement("button");
  const defaultText = "1 botón";
  button.innerText = defaultText;

  body.appendChild(button);

  button.onmouseover = () => {
    button.innerText = "1 botóN";
  };
  button.onmouseout = () => {
    button.innerText = defaultText;
  };
}
createButtonWithHoverEffect();
