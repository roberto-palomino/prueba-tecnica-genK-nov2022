// function duplicateButtomswithHoverEffect(n) {
//   for (let i = 1; i <= n; i++) {
//     createButtonWithHoverEffect(i);
//   }
// }

// const createButtonWithHoverEffect = (i) => {
//   const defaultText = `${i} botón`;
//   const body = document.querySelector("body");
//   const button = document.createElement("button");
//   button.innerText = defaultText;
//   button.onmouseover = () => {
//     button.innerText = `${i} botóN`;
//   };
//   button.onmouseout = () => {
//     button.innerText = defaultText;
//   };

//   body.appendChild(button);
// };

// duplicateButtomswithHoverEffect(1000);

// Solución de Kairos:

for (let contadorBotones = 1; contadorBotones <= 1000; contadorBotones += 1) {
  const boton = document.createElement("button");
  boton.textContent = `${contadorBotones} botón`;
  document.body.appendChild(boton);
}

document.body.addEventListener("mouseover", (e) => {
  const boton = e.target;
  if (boton.tagName === "BUTTON") {
    boton.textContent = boton.textContent.slice(0, -1) + "N";
  }
});
document.body.addEventListener("mouseout", (e) => {
  const boton = e.target;
  if (boton.tagName === "BUTTON") {
    boton.textContent = boton.textContent.slice(0, -1) + "n";
  }
});
