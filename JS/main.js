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
        800: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
      }
    });