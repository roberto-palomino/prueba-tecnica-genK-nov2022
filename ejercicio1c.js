const createButton = (i) => {
  const body = document.querySelector("body");
  const button = document.createElement("button");
  button.innerText = `${i} botón`;

  body.appendChild(button);
};

function duplicateButtoms(n) {
  for (let i = 1; i <= n; i++) {
    createButton(i);
  }
}
duplicateButtoms(10);

// Solución de Kairos:

const boton = document.createElement("button");
boton.textContent = "1 botón";
document.body.appendChild(boton);

for (let contadorBotones = 1; contadorBotones <= 10; contadorBotones += 1) {
  const boton = document.createElement("button");
  boton.textContent = `${contadorBotones} botón`;
  document.body.appendChild(boton);
}
