module.exports = class ElementClass {
  constructor(element) {
    if(element instanceof HTMLElement) {
      this.element = element;
    }
    else throw new Error('Needs a valid HTML element');
  }

  add(className) {
    this.element.classList.add(className);
  }

  remove(className) {
    this.element.classList.remove(className);
  }
};