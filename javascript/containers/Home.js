export default class {
  constructor() {
    this.typeWritterEffect();
    this.pulseEffect();
    this.selectNavItem();
    this.showSecondaryNav();
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

  pulseEffect() {
    const allChip = document.querySelectorAll('div.chip');
    allChip.forEach((e) => {
      e.classList.remove('js-selected');
    });
    allChip[0].classList.add('js-selected');
  }

  selectNavItem() {
    const allLink = document.querySelectorAll('li.nav-list__item');
    allLink.forEach((e) => {
      e.classList.remove('js-navItemSelected');
    });
    allLink[0].classList.add('js-navItemSelected');
  }

  showSecondaryNav() {
    const SecondaryNav = document.querySelector('div.secondary-nav');
    SecondaryNav.style.display = 'flex';
  }
}
