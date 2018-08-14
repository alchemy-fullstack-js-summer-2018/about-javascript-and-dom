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

describe('Element class tests', () => {

  let element = new ElementClasses('span');

  it('creates elements', () => {
    expect(element.element instanceof HTMLElement).toBe(true);
  });
    
  it('adds a classname to the element', () => {
    element.add('ultraClass');
    expect(element.element.classList[0]).toBeTruthy();
    expect(element.element.classList[0]).toEqual('ultraClass');
    element.add('superDuperClass');
    expect(element.element.classList[1]).toEqual('superDuperClass');

  });

  it('removes a class name from the element', () => {
    element.remove('superDuperClass');
    expect(element.element.classList[1]).toBeFalsy();
    expect(element.element.classList[0]).toEqual('ultraClass');
    element.remove('ultraClass');
    expect(element.element.classList[0]).toBeFalsy();
  });
});