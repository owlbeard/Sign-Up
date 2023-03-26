const pw = document.getElementById("password").value;
const confpw = document.getElementById("confirm-password").value;
const pwError = document.querySelector("#password + span.error");
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  if (pw !== confpw) {
    pwError.textContent = "*Şifreler aynı değil.";
    event.preventDefault();
  }
  else {
    pwError.textContent = "";
  }
});