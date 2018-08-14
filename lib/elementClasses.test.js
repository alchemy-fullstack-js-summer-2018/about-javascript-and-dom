const ElementClasses = require('./ElementClasses');

describe('A suite of tests on html elements', () => {

  let element = new ElementClasses(document.createElement('h1'));

  it('Takes an element in its constructor(element). It should throw if argument is missing or not an instance of HTMLElement', () => {
    expect(element.element).toBeInstanceOf(HTMLElement);
    expect(() => {
      return new ElementClasses('h1');
    }).toThrow();
  });

  it('Has an add(className) method that adds the className to the element', () => {
    element.add('groovy');
    expect(element.element.classList).toContain('groovy'); 
  });

  it('Has a remove(className) method that removes the className from the element (safe to call if class does not have that className)', () => {
    element.remove('groovy');
    expect(element.element.classList).not.toContain('groovy');
    expect(element.remove('blah')).not.toBeNull();
  });

});