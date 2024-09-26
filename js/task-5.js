function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector(".widget");
const spanText = document.querySelector(".color");
const colorBody = document.querySelector("body");

container.addEventListener("click", getColor);

function getColor(evt) {
  evt.preventDefault();

  const newColor = getRandomHexColor();

  colorBody.style.backgroundColor = newColor;

  spanText.textContent = newColor;
}
