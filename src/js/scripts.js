// Custom Scripts
import '@scss/style.scss'
import '@js/main.js';
import '@js/select.js';
import '@js/tabs.js';
import '@js/libs/swiper(lib).js';



const swiper = new Swiper('.swiper', {
    // Navigation arrows
    navigation: {
      nextEl: '.next__btn',
      prevEl: '.prev__btn',
    },
  
  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
  });
