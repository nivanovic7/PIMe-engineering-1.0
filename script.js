

window.onload=function(){
    const toggleButton = document.getElementsByClassName('toggle__button')[0];
const navbarLinks = document.getElementsByClassName('nav__menu')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})
  }