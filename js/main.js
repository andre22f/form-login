const span = document.querySelectorAll('span');
const inputNome = document.querySelector("#nome");
const inputSenha = document.querySelector("#senha");
const button = document.querySelector('button');

function mensagemError(event) {
  if (inputNome.value !== "Administrador") {
    span[0].innerText = "ERRO, informe o nome corretamente!";
    event.preventDefault();
  }
  else {
    span[0].innerText = "";
  }
  if (inputSenha.value !== '123') {
    span[1].innerText = "ERRO, informe a senha corretamente!";
    event.preventDefault();
  }
  else {
    span[1].innerText = "";
  }
}

button.addEventListener('click', event => mensagemError(event));