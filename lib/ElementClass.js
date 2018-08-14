class ElementComponent {
  constructor(element) {
    if(element instanceof HTMLElement) this.element = element;
    else throw 'Required: HTML Element';
  }
      
  add(className) {

  }

  reove(className) {

  }
}

module.exports = ElementComponent;