const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", getUserInput);

function getUserInput(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const { email, password } = form.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }

  const infoUser = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(infoUser);

  formEl.reset();
}
