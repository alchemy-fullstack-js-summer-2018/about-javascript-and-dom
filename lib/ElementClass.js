class ElementComponent {
  constructor(element) {
    if(element instanceof HTMLElement) this.element = element;
    else throw 'Required: HTML Element';
  }
      
  add(className) {
    this.element.classList.add(className);
  }

  remove(className) {
    this.element.classList.remove(className);
  }
}

module.exports = ElementComponent;