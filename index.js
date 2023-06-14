const mainSection = document.querySelector('.main-section');
const success = document.querySelector('.success');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('.error-message');

function ValidateEmail(input) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    mainSection.style.display = 'none';
    success.style.display = 'flex';

    return true;
  } else {
    errorMessage.style.display = 'block';
    email.style.backgroundColor = 'hsl(4, 100%, 90%)';
    email.style.outlineColor = 'red';
    email.style.color = 'red';

    return false;
  }
}

function DismissMessage() {
  window.location.reload();
}
