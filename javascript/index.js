const menuIcon = document.querySelector('div.menu-icon');
const bars = document.querySelector('i.fa-bars');
const xmark = document.querySelector('i.fa-xmark');
const nav = document.querySelector('nav.nav');
const header = document.querySelector('header.header');
const modal = document.querySelector('div.modal');

menuIcon.addEventListener('click', () => {
  bars.classList.toggle('js-bars');
  xmark.classList.toggle('js-xmark');
  nav.classList.toggle('js-nav');
  header.classList.toggle('js-header');
  modal.classList.toggle('js-modal');
});

const title = document.querySelector('h3');
const txt = 'Bonjour les amis. ';

function typewriter(word, index) {
  if (index < word.length) {
    setTimeout(() => {
      if (index < 12) {
        title.innerHTML += `<span class="red">${word[index]}</span>`;
      } else {
        title.innerHTML += `<span class="blue">${word[index]}</span>`;
      }
      typewriter(txt, index + 1);
    }, 300);
  }
  if (index == word.length) {
    setTimeout(() => {
      title.innerHTML = '';
    }, 300);
    index = 0;
    setTimeout(() => {
      typewriter(txt, index);
    }, 1000);
  }
}

setTimeout(() => {
  typewriter(txt, 0);
}, 1000);
