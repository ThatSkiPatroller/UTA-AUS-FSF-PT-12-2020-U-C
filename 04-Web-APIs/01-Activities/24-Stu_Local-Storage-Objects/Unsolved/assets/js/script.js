var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  var userObject = {
    firtName: firstNameInput.nodeValue.trim(),
    lastName: lastNameInput.nodeValue.trim(),
    email: emailInput.nodeValue.trim(),
    password: passwordInput.nodeValue.trim(),
  };
  // TODO: Set new submission to local storage 
  localStorage.setItem('userObject', JSON.stringify(userObject));
});

var obj = localStorage.getItem('userObject');
console.log('user object form local storage: ', obj);
console.log('user object parsed', JSON.parse(obj));