const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})


username.addEventListener("blur", () => {
  checkInputUsername();
})

escola.addEventListener("blur", () => {
  checkInputEscola();
})

estado.addEventListener("blur", () => {
  checkInputEstado();
})





function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Preencha seu nome!")
  }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "O email é obrigatório!")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }


}


function checkInputEscola(){
  const EscolaValue = escola.value;

  if(EscolaValue === ""){
    errorInput(escola, "A escola é obrigatória!")
  }else{
    const formItem = escola.parentElement;
    formItem.className = "form-content"
  }


}

function checkInputEstado(){
  const EstadoValue = estado.value;

  if(EstadoValue === ""){
    errorInput(estado, "O estado é obrigatório!")
  }else{
    const formItem = estado.parentElement;
    formItem.className = "form-content"
  }


}


function checkInputPasswordConfirmation(){
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if(confirmationPasswordValue === ""){
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
  }else if(confirmationPasswordValue !== passwordValue){
    errorInput(passwordConfirmation, "As senhas não são iguais.")
  }else{
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content"
  }


}


function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputEscola();
  checkInputEstado();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("CADASTRADO COM SUCESSO!")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}