module.exports = class ElementClasses {
  constructor(element) {
    if(element === undefined) {
      throw new Error('invalid input');
    }
    this.element = element;
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