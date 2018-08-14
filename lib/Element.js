module.exports = class Element {
  constructor(element) {
    if(element instanceof HTMLElement) this.element = element;
    else throw 'HTML Element Required';
  }

  add(className) {
    this.element.classList.add(className);
  }
  remove(className) {
    this.element.classList.remove(className);
  }
};