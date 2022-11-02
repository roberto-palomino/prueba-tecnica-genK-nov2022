function duplicateButtomswithHoverEffect(n) {
  for (let i = 1; i <= n; i++) {
    createButtonWithHoverEffect(i);
  }
}

const createButtonWithHoverEffect = (i) => {
  const defaultText = `${i} botón`;
  const body = document.querySelector("body");
  const button = document.createElement("button");
  button.innerText = defaultText;
  button.onmouseover = () => {
    button.innerText = `${i} botóN`;
  };
  button.onmouseout = () => {
    button.innerText = defaultText;
  };

  body.appendChild(button);
};

duplicateButtomswithHoverEffect(1000);
