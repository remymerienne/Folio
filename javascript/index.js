const menuIcon = document.querySelector('div.menu-icon');
const bars = document.querySelector('i.fa-bars');
const xmark = document.querySelector('i.fa-xmark');

menuIcon.addEventListener('click', () => {
  bars.classList.toggle('move-bars');
  xmark.classList.toggle('move-xmark');
});
