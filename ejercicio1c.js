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
