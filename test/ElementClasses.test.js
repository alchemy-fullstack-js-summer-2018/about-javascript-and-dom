const ElementClasses = require('../lib/ElementClasses');

describe('ElementClasses suite', () => {

  this.element = document.createElement('p');
  let elemental = new ElementClasses(this.element);
  
  it('take an element in the constructor', () => {
    expect(elemental.element instanceof HTMLElement).toBeTruthy();
  });
  
  it('throws error if there is no argument or not an instance of HTMLElement', () => {
    function noArg() {
      return new ElementClasses();
    }
    expect(noArg).toThrow(Error);
  });

  it('has a method that adds a class name to the element', () => {
    elemental.add('magic');
    expect(elemental.element.classList).toContain('magic');
  });

  it('removes the class name from the element (safe to call if class does not have that class name)', () => {
    elemental.remove('magic');
    expect(elemental.element.classList).not.toContain('magic');
  });

});