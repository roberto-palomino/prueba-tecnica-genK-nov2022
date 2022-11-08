function createButton() {
  const body = document.querySelector("body");
  const button = document.createElement("button");
  button.innerText = "1 botón";

  body.appendChild(button);
}
createButton();

// Solución Kairos:

const boton = document.createElement("button");
boton.textContent = "1 botón";
document.body.appendChild(boton);
