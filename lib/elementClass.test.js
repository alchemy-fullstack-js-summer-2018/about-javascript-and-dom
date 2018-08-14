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
  });
});