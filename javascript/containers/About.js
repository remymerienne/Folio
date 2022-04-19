export default class {
  constructor() {
    this.pulseEffect();
  }

  resetPulseEffect() {
    const allChip = document.querySelectorAll('div.chip');
    allChip.forEach((e) => {
      e.classList.remove('js-selected');
    });
  }

  pulseEffect() {
    const chipSelected = document.querySelector('div.chip');
    chipSelected.classList.add('js-selected');
  }
}
