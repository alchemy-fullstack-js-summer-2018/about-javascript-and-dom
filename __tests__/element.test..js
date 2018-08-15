const Element = require('../lib/ElementClass');

describe('Element Class', () => {
  
  let div;
  let createDiv;

  beforeEach(() => {
    div = document.createElement('div');
    createDiv = new Element(div);
  });

  it('Creates an element', () => {
    expect(createDiv.element).toBeInstanceOf(HTMLElement);
  });

  it('Throws an error if argument is not an instance of element', () => {
    const string = 'hello';
    const notElement = () => new Element(string);
    expect(notElement).toThrow('Required: HTML Element');
  });

  it('Throws an error if no argument', () => {
    const notElement = () => new Element();
    expect(notElement).toThrow('Required: HTML Element');
  });

  it('Adds a class to the element', () => {
    createDiv.add('some_class');
    expect(createDiv.element.classList).toContain('some_class');
  });
  
  it('Removes a class from the element', () => {
    createDiv.add('some_class');
    createDiv.add('other_class');
    expect(createDiv.element.classList).toContain('some_class');
    createDiv.remove('some_class');
    expect(createDiv.element.classList).not.toContain('some_class');
  });

});