export default class {
  constructor() {
    this.pulseEffect();
    this.selectNavItem();
  }

  pulseEffect() {
    const allChip = document.querySelectorAll('div.chip');
    allChip.forEach((e) => {
      e.classList.remove('js-selected');
    });
    allChip[1].classList.add('js-selected');
  }

  selectNavItem() {
    const allLink = document.querySelectorAll('li.nav-list__item');
    allLink.forEach((e) => {
      e.classList.remove('js-navItemSelected');
    });
    allLink[1].classList.add('js-navItemSelected');
  }
}
