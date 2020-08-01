const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Show input ereor message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';

  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Require validation
function requireValidation(input, fieldName) {
  if (input.value === '') {
    showError(input, `${fieldName} is required`);
  } else {
    showSuccess(input);
  }
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  requireValidation(username, 'User name');
  requireValidation(email, 'Email');
  requireValidation(password, 'Password');
  requireValidation(confirmpassword, 'Confirm password');
});
