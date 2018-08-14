const ElementClasses = require('./ElementClasses');

let spanHtml = document.write('<span>Hello World</span>');
let span = document.querySelector('span');

describe('ElementClasses class test', () => {

  it('takes an element in its constructor', () => {
    let element = new ElementClasses(span);
    let nonElement = new ElementClasses(spanHtml);
    expect(element).toBe(true);
    expect(nonElement.element).toBeFalsy();
  });

  it('adds class with given class name to element', () => {
    let element = new ElementClasses(span);
    console.log(element);
    expect(element.add('cool-class')).toEqual('cool-class');
  });
});