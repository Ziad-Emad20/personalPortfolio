let menuIcon = document.querySelector('#icon-menu');
let nav = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

//? Nav Active
window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let sectionTop = section.offsetTop - 150;
    let sectionHeight = section.offsetHeight;

    let id = section.getAttribute('id');
    if (top >= sectionTop && top < sectionTop + sectionHeight){
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  })
};

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('icon-close-outline');
  nav.classList.toggle('active');
});

//? Slides
var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      centerSlides: true,
      loop: true,
      fade: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
      }
    });