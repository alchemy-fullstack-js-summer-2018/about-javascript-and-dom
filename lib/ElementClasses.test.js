const ElementClasses = require('./ElementClasses');

describe('ElementClasses class test', () => {
  let element = document.createElement('span');
  let span = new ElementClasses(element);
  
  it('takes an element in its constructor', () => {
    expect(span.element.constructor).toBe(HTMLSpanElement);
  });

  it('throws an error on invalid input', () => {
    function createClasses() {
      return new ElementClasses();
    }

    expect(createClasses).toThrow('invalid');
  });

  it('adds class with given class name to element', () => {
    span.add('cool-class');
    span.add('awesome-class');
    expect(span.element.classList[0]).toBe('cool-class');
  });

  it('removes class with given class name', () => {
    span.remove('cool-class');
    expect(span.element.classList[0]).toBe('awesome-class');
  });

  it('does not remove if class name does not exist', () => {
    span.remove('yay-class');
    expect(span.element.classList[0]).toBe('awesome-class');
  });
});