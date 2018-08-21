const ElementClasses = require('./ElementClass');

describe('ElementClasses tests', () => {
  this.element = document.createElement('p');
  let elements = new ElementClasses(this.element);

  it('takes element in constructor', () => {
    expect(elements.element instanceof HTMLElement).toBeTruthy();
  });

  it('throws error if not an instance of HTMLElement or no arg', () => {
    function noArgument() {
      return new ElementClasses();
    }
    expect(noArgument).toThrow(Error);
  });

  it('had method that adds class name', () => {
    elements.add('dummy');
    expect(elements.element.classList).toContain('dummy');
  });

  it('removes class name from element', () => {
    elements.remove('dummy');
    expect(elements.element.classList).not.toContain('dummy');
  });
});