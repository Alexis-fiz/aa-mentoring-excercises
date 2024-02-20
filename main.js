var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var usernameLabel = document.getElementById("label-username");
var emailLabel = document.getElementById("label-email");
var passwordLabel = document.getElementById("label-password");
var submitButton = document.getElementById("submit-button");

const allElements = [username, email, password, usernameLabel, emailLabel, passwordLabel, submitButton];

savePositionLocalStorage(allElements);


function togglePassword() {
  var passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

function validateForm() {

  var isValid = true;

  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  if (username.value.length < 4) {
    document.getElementById("usernameError").textContent = "Username is not long enough";
    isValid = false;
  }
  if (username.value === "") {
    document.getElementById("usernameError").textContent = "Username is required";
    isValid = false;
  }

  if (!isValidEmail(email.value)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    isValid = false;
  }
  
  if (!/\d/.test(password.value)) {
    document.getElementById("passwordError").textContent = "Password must contain at least one number";
    isValid = false;
  }
  if (password.value.length < 8) {
    document.getElementById("passwordError").textContent = "Password needs to be more than 8 characters";
    isValid = false;
  }
  if (password.value === "") {
    document.getElementById("passwordError").textContent = "Password is required";
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

username.addEventListener('focus', function() {
  document.getElementById("usernameError").textContent = "";
});

email.addEventListener('focus', function() {
  document.getElementById("emailError").textContent = "";
});

password.addEventListener('focus', function() {
  document.getElementById("passwordError").textContent = "";
});

username.addEventListener('blur', function() {
  if (username.value === "") {
    document.getElementById("usernameError").textContent = "Username is required";
  }
  if (username.value.length < 4) {
    document.getElementById("usernameError").textContent = "Username is not long enough";
  }
});

email.addEventListener('blur', function() {
  if (!isValidEmail(email.value)) {
    document.getElementById("emailError").textContent = "Invalid email format";
  }
});

password.addEventListener('blur', function() {
  if (password.value === "") {
    document.getElementById("passwordError").textContent = "Password is required";
  }
  if (!/\d/.test(password.value)) {
    document.getElementById("passwordError").textContent = "Password must contain at least one number";
  }
  if (password.value.length < 8) {
    document.getElementById("passwordError").textContent = "Password needs to be more than 8 characters";
  }
});

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  if (!validateForm()) {
    return;
  }
  alert('Congratulations')
});


function animateElements(elements) {
  elements.forEach(element => {
    // Move element to a new location
    var newX = Math.random() * window.innerWidth + 20;
    var newY = Math.random() * window.innerHeight + 10;
    element.style.left = newX + "px";
    element.style.top = newY + "px";
  
    // Rotate element
    var newRotation = Math.random() * 360; // Rotate randomly between 0 and 360 degrees
    element.style.transform = "translate(-50%, -50%) rotate(" + newRotation + "deg)";
  })
}

function saveElements(elements) {
  elements.forEach(element => {
    // Move element to a saved location
    var newX = localStorage.getItem(`${element.id}X`);
    var newY = localStorage.getItem(`${element.id}Y`);
    element.style.left = newX + "px";
    element.style.top = newY + "px";
  
    // Un-Rotate element
    element.style.transform = "";

  })
}

function savePositionLocalStorage(elements) {
  elements.forEach(element => {
    var rect = element.getBoundingClientRect();
    var x = rect.left + window.pageXOffset;
    var y = rect.top + window.pageYOffset;
    localStorage.setItem(`${element.id}X`, x.toString());
    localStorage.setItem(`${element.id}Y`, y.toString());

  });
}

document.getElementById('snap').addEventListener('click', function() {
animateElements(allElements);
});


document.getElementById('save').addEventListener('click', function() {
saveElements(allElements);
});
