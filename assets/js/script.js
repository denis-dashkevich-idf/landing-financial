// header
const burgerEl = document.querySelector('.header__burger');
const menuWrapEl = document.querySelector('.header__menu-wrap');

burgerEl.addEventListener('click', function(event) {
  menuWrapEl.classList.toggle('header__menu-wrap_visible');
});

// slider
var swiper = new Swiper('.reviews__slider', {
  loop: true,
});

// scroll animation
AOS.init();