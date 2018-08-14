/* eslint no-console: off */
class ElementClasses {
  constructor(element) {
    if(!(element instanceof HTMLElement) || !element) {
      throw console.error('new error');
    }
    else {
      this.element = element;
    }
  }

  add(className) {
    this.element.classList.add(className);
  }
}

module.exports = ElementClasses;