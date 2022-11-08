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

// Solución de Kairos:

const boton = document.createElement("button");
boton.textContent = "1 botón";
document.body.appendChild(boton);

boton.addEventListener("mouseover", () => {
  boton.textContent = boton.textContent.slice(0, -1) + "N";
});
boton.addEventListener("mouseout", () => {
  boton.textContent = boton.textContent.slice(0, -1) + "n";
});
