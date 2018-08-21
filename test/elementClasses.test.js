const elementClasses = require('../lib/ElementClasses');

describe('Testing ElementClasses', () => {

  this.element = document.createElement('p');
  let elementDom = new elementClasses(this.element);

  it('Takes an element in its `constructor(element)`. It should throw if argument is missing or not an instance of `HTMLElement`', () => {
   
    expect(elementDom.element instanceof HTMLElement).toBeTruthy();
  });

  it('Has an `add(className)` method that adds the `className` to the element', () => {
    elementDom.add('car');
    expect(elementDom.element.classList).toContain('car');
  });

  it('Has a `remove(className)` method that removes the `className` from the element (safe to call if class doesnt have that `className`)', () => {
    elementDom.remove('car');
    expect(elementDom.element.classList).not.toContain('car');
  });

});