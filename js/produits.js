const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const navLinks = document.querySelectorAll('.menu ul li'); 
const menu = document.querySelector('.menu');

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

navLinks.forEach( (link, index) => {
    if (link.style.animation) {
        link.style.animation = ''
    }
    else {
        link.style.animation = ` navLinkFade 0.5s ease forwards ${(index / 7) + 0.5}s` ;
    }
} )

// Wrap every letter in a span
var textWrapper = document.querySelector('.gamme h1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.gamme h1 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.gamme h1 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });


