module.exports = class ElementClasses {
  constructor(element) {
    if(element instanceof HTMLElement) {
      this.element = element;
    }
    else throw 'Argument must be an HTML Element';
  }

  add(className) {
    this.element.classList.add(className);
    return this.element;
  }

  remove(className) {
    this.element.classList.remove(className);
    return this.element;
  }
};