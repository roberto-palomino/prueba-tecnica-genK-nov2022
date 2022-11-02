function duplicateButtoms(n) {
    
  const createButton = () => {
    for (let i = 1; i <= n; i++) {
      const body = document.querySelector("body");
      const button = document.createElement("button");
      button.innerText = `${i} botón`;

      body.appendChild(button);
    }
  };
  createButton();
}

duplicateButtoms(1000);
