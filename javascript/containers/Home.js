export default class {
  constructor() {
    this.typeWritterEffect();
  }
  typeWritterEffect() {
    const title = document.querySelector('h2');
    const message = ['I am A Developer.', 'I am A Freelancer.'];
    const typewriter = (word, index) => {
      if (index < word.length) {
        setTimeout(() => {
          if (index < 6) {
            title.innerHTML += `<span>${word[index]}</span>`;
          } else {
            title.innerHTML += `<span class="js-emphasis">${word[index]}</span>`;
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
  }
}
