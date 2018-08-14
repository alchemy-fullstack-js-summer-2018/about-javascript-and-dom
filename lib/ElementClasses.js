class ElementClasses {
  constructor(element) {
    this.element = element ? element instanceof HTMLElement : false;
  }
}

module.exports = ElementClasses;