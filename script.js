const container = document.querySelector(".container");
const createGridButton = document.querySelector(".create-grid");

let randomColorR = 0;
let randomColorG = 0;
let randomColorB = 0;

function generateGrid() {
  container.innerHTML = "";

  randomColorR = Math.floor(Math.random() * 255);
  randomColorG = Math.floor(Math.random() * 255);
  randomColorB = Math.floor(Math.random() * 255);

  let num = 0;

  while (num < 0 || num === 0 || num > 100 || Number.isNaN(num)) {
    num = Number(prompt("Enter a grid size", 0));
  }

  for (let i = 1; i <= num ** 2; i++) {
    const div = document.createElement("div");
    div.style.width = `${960 / num}px`;
    div.style.height = `${960 / num}px`;
    container.appendChild(div);
  }
}

createGridButton.addEventListener("click", generateGrid);

const divs = document.querySelectorAll("div");

function onHover(e) {
  e.stopPropagation();
  e.target.style.backgroundColor = `rgb(${(randomColorR -=
    randomColorR * 0.1)}, ${(randomColorG -=
    randomColorG * 0.1)}, ${(randomColorB -= randomColorB * 0.1)})`;
}

divs.forEach(function (div) {
  div.addEventListener("mouseover", onHover);
});
