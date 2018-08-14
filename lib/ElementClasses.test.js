const ElementClasses = require('./ElementClasses');

describe.only('ElementClasses class test', () => {
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
    expect(span.element.classList[0]).toEqual('cool-class');
  });
});