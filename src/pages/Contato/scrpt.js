const form = document.getElementById('form');

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

function handleSubmit(e) {
  e.preventDefault();
  const inputs = [form.name, form.email, form.message];
  if (inputs.some((input) => input.classList.contains('error'))) {
    alert('Preencha os campos corretamente');
    return;
  }
  const formInfos = new FormData(e.target);
  alert(`
  Mensagem enviada com sucesso!
  Obrigado ${formInfos.get('name')}`);
}

form.addEventListener('submit', handleSubmit);
form.name.onblur = nameValidation;
form.email.onblur = emailValidation;
form.message.onblur = messageValidation;
