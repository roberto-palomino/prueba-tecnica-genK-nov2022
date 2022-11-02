function createButton() {
  const body = document.querySelector("body");
  const button = document.createElement("button");
  button.innerText = "1 botón";

  body.appendChild(button);

  button.onmouseover = () => {
    button.innerText = "1 botóN";
  };
  button.onmouseout = () => {
    button.innerText = "1 botón";
  };
}
createButton();
