function changeButtomsText(n) {
  
  const createButton = () => {
    for (let i = 1; i <= n; i++) {
      const body = document.querySelector("body");
      const button = document.createElement("button");
      button.innerText = `${i} botón`;

      button.onmouseover = () => {
        button.innerText = `${i} botóN`;
      };
      button.onmouseout = () => {
        button.innerText = `${i} botón`;
      };

      body.appendChild(button);
    }
  };
  createButton();
}

changeButtomsText(1000);
