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

// number count for stats, using jQuery animate

$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
  
  });
