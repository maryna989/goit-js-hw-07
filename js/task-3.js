const inputEl = document.querySelector("#name-input");
const inputH1 = document.querySelector("h1");
inputH1.classList.add("int-H1");
inputEl.classList.add("int-Name");

const outPut = document.querySelector("#name-output");

inputEl.addEventListener("input", getName);

function getName(evt) {
  outPut.textContent =
    evt.target.value.trim() === "" ? "Anonymous" : evt.target.value;
}
