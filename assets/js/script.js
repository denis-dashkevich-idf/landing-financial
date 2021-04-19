// header
const burgerEl = document.querySelector('.header__burger');
const menuWrapEl = document.querySelector('.header__menu-wrap');

burgerEl.addEventListener('click', function(event) {
  menuWrapEl.classList.toggle('header__menu-wrap_visible');
});

// slider
let swiper = new Swiper('.reviews__slider', {
  loop: true,
});

// scroll animation
AOS.init();

// form validation
const contactsFormEl = document.querySelector('.contacts__form');
const formEmailEl = document.querySelector('.form-el__input[name=email]');
const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

contactsFormEl.addEventListener('submit', function(event) {
  event.preventDefault();
  let isMailChecked = emailRegEx.test(formEmailEl.value);
  // console.log(isMailChecked);

  if(!isMailChecked) {
    formEmailEl.classList.add('error');
  } else {
    formEmailEl.classList.remove('error');
  }

});