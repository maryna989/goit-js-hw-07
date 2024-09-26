function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const containerEl = document.querySelector("#controls");
const inputEl = containerEl.querySelector("input[type='number']");
const btnCreate = containerEl.querySelector("[data-create]");
const btnDestroy = containerEl.querySelector("[data-destroy]");
const divAdd = document.querySelector("#boxes");

btnCreate.addEventListener("click", createClick);
btnDestroy.addEventListener("click", destroyBoxes);

function createClick(evt) {
  evt.preventDefault();
  const amount = Number(inputEl.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
}

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  divAdd.append(...boxes);
  inputEl.value = "";
}

function destroyBoxes(evt) {
  evt.preventDefault();
  divAdd.innerHTML = "";
}
