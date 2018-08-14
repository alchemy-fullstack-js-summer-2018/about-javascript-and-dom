class Element {
  constructor(text) {
    if(text instanceof HTMLElement) this.element = text;
    else throw 'Missing HTML Element';
  }
  add(className) {
    this.element.classList.add(className);
  }
  remove(className) {
    this.element.classList.remove(className);
  }
}


module.exports = Element;