/* eslint no-console: off */
class ElementClasses {
  constructor(element) {
    // this.element = document.createElement(element);
    if(element instanceof HTMLElement) this.element = element;
    else throw new Error('invalid');
  }

  add(className) {
    return this.element.classList.add(className);
  }
  
  remove(className) {
    return this.element.classList.remove(className);
  }
}

module.exports = ElementClasses;