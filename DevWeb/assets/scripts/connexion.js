const form = document.querySelector("form");
const message = document.getElementById("message");
const smallMessage = document.getElementById("smallMessage");
const emailMessage = "Tapez votre email";
const passwordMessage = "Choisissez votre mot de passe";
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit");

function firstMessage() {
  message.innerHTML = emailMessage;
  smallMessage.innerHTML = "";
  document.body.style.background = "#88C9E8";
}

function secondMessage() {
  message.innerHTML = passwordMessage;
  document.body.style.background = "#D5F3A6";
}

function length() {
  if (password.value.length <= 3) {
    smallMessage.innerHTML = "Rendez-le fort";
  } else if (password.value.length > 3 && password.value.length < 10) {
    smallMessage.innerHTML = "Fort comme un taureau !";
  } else if (password.value.length >= 10) {
    smallMessage.innerHTML = "C'est incassable !!!";
  } else {
    smallMessage.innerHTML = "";
  }
}

function formValidation() {
  email.addEventListener("input", firstMessage);
  password.addEventListener("input", secondMessage);
  password.addEventListener("keyup", length);
  submitBtn.addEventListener("mouseover", function (event) {
    message.innerHTML = "Vous êtes à un clic";
    smallMessage.innerHTML = "Faites-le. C'est pour cela que vous êtes ici.";
    document.body.style.background = "#b4f8cd";
  });
  submitBtn.addEventListener("click", function (event) {
    form.innerHTML =
      '<h1>Bon travail !</h1><p class="success-message">Il y a un lien de confirmation dans votre boîte de réception.</p>';
    document.body.style.background = "#b4f8cd";
  });
}

formValidation();
