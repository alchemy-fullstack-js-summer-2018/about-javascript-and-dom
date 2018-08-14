class ElementClasses {
  constructor(element) {
    if(!element || (document.createElement(element) instanceof HTMLElement) === false){
      // 
      throw new Error('invalid input');
    }
    this.element = document.createElement(element);
  }
  
  add(className){
    this.element.classList.add(className);
    return this.element;
  }

  remove(className){
    this.element.classList.remove(className);
    return this.element;
  }
}

module.exports = ElementClasses;