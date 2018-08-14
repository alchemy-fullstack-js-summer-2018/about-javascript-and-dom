class ElementClasses {
  constructor(text) {
    if(text instanceof HTMLElement) this.text = text;
    else throw 'Missing HTML Element';
  }
  add(className) {
    this.test.classList.add(className);
  }
  remove(className) {
    this.test.classList.remove(className);
  }
}


module.exports = ElementClasses;