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

const title = document.querySelector('h2');
// eslint-disable-next-line quotes
const message = ["I'm A Developer.", "I'm A Freelancer."];

const typewriter = (word, index) => {
  if (index < word.length) {
    setTimeout(() => {
      if (index < 6) {
        title.innerHTML += `<span>${word[index]}</span>`;
      } else {
        title.innerHTML += `<span class="blue">${word[index]}</span>`;
      }
      typewriter(word, index + 1);
    }, 200);
  } else {
    setTimeout(() => {
      title.innerHTML = '';
    }, 1000);
  }
};

const altern = (message, index) => {
  if (index < message.length) {
    typewriter(message[index], 0);
    setTimeout(() => {
      altern(message, index + 1);
    }, 4600);
  }
  if (index == message.length) {
    index = 0;
    setTimeout(() => {
      altern(message, index);
    }, 1000);
  }
};

setTimeout(() => {
  altern(message, 0);
}, 1000);
