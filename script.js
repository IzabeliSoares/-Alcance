const menumobile = document.querySelector('.menumobile');


function toggleMenu(){
  const MenuCabeçalho = document.querySelector('.menu-cabeçalho');
  MenuCabeçalho.classList.toggle('active');

  const menumobile = document.querySelector('.menumobile');
  menumobile.classList.toggle('active');

}

menumobile.addEventListener('click', toggleMenu)




const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const escola = document.getElementById("escola")
const estado = document.getElementById("estado")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();
});

function checkInputUserName(){
  const usernameValue = username.value; 

   if(usernameValue === ""){
    errorInput(username, "Preencha um nome de usuário!")
   }


}


function errorInput (input, message ){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}


 function checkInputs()
 {
   const usernameValue = username.value
   const emailValue = email.value
   //const escolaValue = escola.value
   //const estadoValue = estado.value
   
 
 if(usernameValue === "")
 {
  setErrorFor(username, "O nome é obrigatório!");
 } else{
  setSuccesFor(username);
 }

 if(emailValue === "")
  {
   setErrorFor(email, "O email é obrigatório!");
  } else{
   setSuccesFor(email);
  }

}

 function setErrorFor(input, message){
  const formControl  = input.parentElement;
  const small = formControl.querySelector('small')

  //Adicionando a mensagem de erro
  small.innerText = message;

  //Adcionando a classe de error
  formControl.className = "controleformulario error"

}

 function setSuccesFor(input){
    const formControl  = input.parentElement;

    //Adcionando a classe de success

    formControl.className = "controleformulario success"

 }



const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 1000,
  reset: true,
 }) 

 scrollReveal.reveal(
  '.title-vantagens-projetos',
  {
 interval: 500,
 delay: 1000,
  },
 )

 scrollReveal.reveal(
  '.imagem-projetos',
  {
 interval: 500,
 delay: 1000,
  },
 )

 scrollReveal.reveal(
  '.descrição-vantagens',
  {
 interval: 500,
 delay: 1000,
  },
 )

 

 

 