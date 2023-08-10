function nameValidation(e) {
  if (e.target.value.length === 0) {
    e.target.classList.add('error');
    return;
  }
  if (e.target.classList.contains('error')) {
    e.target.classList.remove('error');
  }
}

function emailValidation(e) {
  const email = e.target.value;
  const regex = /\S+@\S+\.\S+/;
  const isValid = regex.test(email);
  if (!isValid) {
    e.target.classList.add('error');
    return;
  }
  if (e.target.classList.contains('error')) {
    e.target.classList.remove('error');
  }
}

function messageValidation(e) {
  if (e.target.value.length === 0) {
    e.target.classList.add('error');
    return;
  }
  if (e.target.classList.contains('error')) {
    e.target.classList.remove('error');
  }
}

const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);
form.name.onblur = nameValidation;
form.email.onblur = emailValidation;
form.message.onblur = messageValidation;
