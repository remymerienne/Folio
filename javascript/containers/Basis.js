export default class {
  constructor() {
    this.handleCLickMenu();
  }

  handleCLickMenu() {
    const iconsBox = document.querySelector('div.icon-box');
    const lines = document.querySelector('i.icon-box__lines');
    const cross = document.querySelector('i.icon-box__cross');
    const nav = document.querySelector('nav.nav');
    const header = document.querySelector('header.header');
    const folio = document.querySelector('header .folio-header');
    const wrap = document.querySelector('div.wrap');

    iconsBox.addEventListener('click', () => {
      lines.classList.toggle('js-lines');
      cross.classList.toggle('js-cross');
      nav.classList.toggle('js-nav');
      header.classList.toggle('js-header');
      folio.classList.toggle('js-folio');
      wrap.classList.toggle('js-wrap');
    });
  }
}
