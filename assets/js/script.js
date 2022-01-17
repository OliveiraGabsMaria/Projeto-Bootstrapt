let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOK = false;
let emailOK = false;
let assuntoOK = false;

function validaNome() {
    let txt = document.querySelector('#txtNome');

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Invalido';
        txtNome.style.color = 'red';
    } else {
        txtNome.innerHTML = 'Quantidade de Caracteres Aceita';
        nomeOK = true;
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "Email Inválido";
        txt.style.color = "red";
        emailOK = false;
    } else {
        txtEmail.innerHTML = 'Email válido';
        emailOK = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto Ultrapassou o Limite de Caracteres (100)";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = 'block';
        assuntoOK = false;
    } else {
        txtAssunto.style.display = 'none';
        assuntoOK = true;
    }
}

function enviar() {
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
        alert('Enviado com Sucesso');
    } else {
        alert('Algo deu errado! Revise as informações, por favor..');
    }
}