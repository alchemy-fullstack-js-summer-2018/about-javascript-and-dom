const ElementClasses = require('./elementClass');

describe('Element class tests', () => {

  let element = new ElementClasses('span');

  test('throws on empty', () => {
    function createClass(){
      return new ElementClasses();
    } 

    expect(createClass).toThrow(Error);
  });

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