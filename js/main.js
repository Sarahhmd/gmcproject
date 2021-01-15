const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const navLinks = document.querySelectorAll('.menu ul li'); 

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
  menu.classList.toggle('menu-active');
  
  navLinks.forEach( (link, index) => {
    if (link.style.animation) {
        link.style.animation = ''
    }
    else {
        link.style.animation = ` navLinkFade 0.5s ease forwards ${(index / 7) + 0.5}s` ;
    }
} )
} )


