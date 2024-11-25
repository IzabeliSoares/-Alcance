const menumobile = document.querySelector ('.menumobile');
const MenuCabeçalho = document.querySelector ('.menu-cabeçalho');


menumobile.addEventListener('click', () => {
  menumobile.classList.toggle('ativo');
  MenuCabeçalho.classList.toggle('ativo');
  

})
