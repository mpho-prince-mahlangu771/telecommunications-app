// Get the form element
var form = document.getElementById('new-account-form');

// Add an onsubmit event listener to the form
form.addEventListener('submit', function(event) {
  // Get the email and password input elements
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');
  var retypePasswordInput = document.getElementById('retype-password');

  // Get the error div elements
  var emailError = document.querySelector('#email + .error');
  var passwordError = document.querySelector('#password + .error');
  var retypePasswordError = document.querySelector('#retype-password + .error');

  // Flag variables to indicate if there are any errors
  var hasErrors = false;
  var emailErrorMessage = '';
  var passwordErrorMessage = '';
  var retypePasswordErrorMessage = '';

  // Validate the email
  if (!emailInput.value) {
    emailErrorMessage = 'Email is required';
    hasErrors = true;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
    emailErrorMessage = 'Invalid email';
    hasErrors = true;
  }

  // Validate the password
  if (!passwordInput.value) {
    passwordErrorMessage = 'Password is required';
    hasErrors = true;
  } else if (passwordInput.value.length < 8) {
    passwordErrorMessage = 'Password must have at least 8 characters';
    hasErrors = true;
  } else if (!/[A-Z]/.test(passwordInput.value)) {
    passwordErrorMessage = 'Password must have at least 1 uppercase letter';
    hasErrors = true;
  } else if (!/[a-z]/.test(passwordInput.value)) {
    passwordErrorMessage = 'Password must have at least 1 lowercase letter';
    hasErrors = true;
  } else if (!/[0-9]/.test(passwordInput.value)) {
    passwordErrorMessage = 'Password must have at least 1 number';
    hasErrors = true;
  }

  // Validate the retype password
  if (!retypePasswordInput.value) {
    retypePasswordErrorMessage = 'Retype password is required';
    hasErrors = true;
  } else if (retypePasswordInput.value !== passwordInput.value) {
    retypePasswordErrorMessage = 'Retype password does not match';
    hasErrors = true;
  }

  // If there are any errors, display them and prevent form submission
  if (hasErrors) {
    event.preventDefault();
    emailError.textContent = emailErrorMessage;
    passwordError.textContent = passwordErrorMessage;
    retypePasswordError.textContent = retypePasswordErrorMessage;
  }
});
