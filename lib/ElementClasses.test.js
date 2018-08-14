const ElementClasses = require('./ElementClasses');

describe('ElementClasses class test', () => {
  it('takes an element in its constructor', () => {
    let element = new ElementClasses('span');
    let nonElement = new ElementClasses('spandex');
    expect(element.element).toBe('span');
    expect(nonElement.element).toBeFalsy();
  });
});