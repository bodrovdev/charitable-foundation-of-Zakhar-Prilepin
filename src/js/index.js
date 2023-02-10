import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// --- Мобильное меню
let burger = document.getElementById('burger');
let mobile_menu = document.getElementById('mobile_menu');
let nav_list = document.querySelector('.main-nav__nav-list');

// - Открытие по по клику на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');
  mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');

  if (burger.classList.contains('main-nav__burger--active')) {
    disableBodyScroll(mobile_menu);
  }
  else {
    enableBodyScroll(mobile_menu);
  }
})

// - Закрытие по клику на пункт меню
nav_list.onclick = function (event) {
  let target = event.target;

  if (target.tagName != 'a') return;

  burger.classList.toggle('main-nav__burger--active');
  mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');

  if (mobile_menu.classList.contains('main-nav__nav-menu--mobile--active')) {
    enableBodyScroll(mobile_menu);
  }
};

// --- Открытие и закрытие модального меню с формой для оплаты
window.addEventListener('load', () => {
  if (document.getElementById('payModal') === null) {
    return;
  }
  else {
    let modal = document.getElementById('payModal');
    let modal_close = document.getElementById('payModal_close');
    let button_list = document.querySelector('.donation-main__donation-list');

    // - Открытие модалки по клику на кнопку оплаты
    button_list.addEventListener('click', function (event) {
      let target = event.target;

      console.log(target);

      if (!target.classList.contains('donation-main__donation-button')) return;

      modal.classList.add('donation-modal--active');
      disableBodyScroll(modal);
    })

    // - Закрытие модалки по клику на кнопку закрытия
    modal_close.addEventListener('click', () => {
      modal.classList.remove('donation-modal--active');
      enableBodyScroll(modal);
    })

    // - Закрытие модалки по клику на на пустое пространство
    modal.addEventListener('click', (event) => {
      if (event.target !== event.currentTarget) {
        return;
      }
      else {
        modal.classList.remove('donation-modal--active');
        enableBodyScroll(modal);
      }
    })
  }
});

//Определение высоты первого блока
// const setHeight = () => {
//   document.getElementById("index_heading").style.minHeight = window.innerHeight + "px";
// };

// let deviceWidth = window.matchMedia("(max-width: 1024px)");

// if (deviceWidth.matches) {
//   window.addEventListener("resize", setHeight);
//   setHeight();
// }