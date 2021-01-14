var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

var userEmail = localStorage.getItem();
var userPassword = localStorage.getItem();

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
  var userEmail = localStorage.getItem();
  userEmailSpan.textContent = userEmail;
  var userPassword = localStorage.getItem();
  userPasswordSpan.textContent = userPassword
}

signUpButton.addEventListener("click", function(event) {
  //prevent from clearing
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
    localStorage.setItem("email", email);
    localStorage.setItem("Password", password);
    renderLastRegistered();
  // TODO: Save email and password to localStorage and render the last registered user and render the last registered user
  }
});
