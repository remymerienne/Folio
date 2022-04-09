const menuIcon = document.querySelector('div.menu-icon');
const bars = document.querySelector('i.fa-bars');
const xmark = document.querySelector('i.fa-xmark');
const nav = document.querySelector('nav.nav');
const header = document.querySelector('header.header');
const main = document.querySelector('main.main');

menuIcon.addEventListener('click', () => {
  bars.classList.toggle('js-bars');
  xmark.classList.toggle('js-xmark');
  nav.classList.toggle('js-nav');
  header.classList.toggle('js-header');
  main.classList.toggle('js-main');
});
