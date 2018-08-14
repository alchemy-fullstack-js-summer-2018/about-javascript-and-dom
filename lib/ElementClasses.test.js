const ElementClasses = require('./ElementClasses');

let spanHtml = document.write('<span>Hello World</span>');
let spanDom = document.querySelector('span');

describe('ElementClasses class test', () => {
  it('takes an element in its constructor', () => {
    let element = new ElementClasses(spanDom);
    let nonElement = new ElementClasses(spanHtml);
    expect(element.element).toBe(true);
    expect(nonElement.element).toBeFalsy();
  });
});