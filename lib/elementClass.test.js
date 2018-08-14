class ElementClasses {
  constructor(element) {
    if(!element){
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
  // let empty = new ElementClasses();
  
  // it('return an error when input is wrong', () => {
  //   console.log('***CONSOLE.ELEMENT***', element.element);
  //   expect(element).toBe('<span />');
  // });
    
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