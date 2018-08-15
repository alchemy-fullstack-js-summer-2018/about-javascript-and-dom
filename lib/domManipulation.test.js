const TextComponent = require('./TextComponent');
const ElementClass = require('./ElementClasses');

describe('Tests TextComponent and ElementClasses', () => {
  let p;
  let element;
  let textComponent;
  let textNode;
  beforeEach(() => {
    p = document.createElement('p');
    element = new ElementClass(p);
    textComponent = new TextComponent('hello');
    textNode = textComponent.render();
  });
  it('defaults to empty string', () => {
    const textComponent = new TextComponent();
    expect(textComponent.text).toBe('');
  });

  it('constructs component with given text', () => {
    expect(textComponent.text).toBe('hello');
  });

  it('checks render method', () => {
    expect(textNode.data).toBe('hello');
  });

  it('checks update method', () => {
    textComponent.update('hey');
    textComponent.render();
    expect(textNode.data).toBe('hey');
  });

  it('throws error on invalid argument', () => {
    expect(() => {
      element = new ElementClass('bad');
    }).toThrow('Needs a valid HTML element');
  });

  it('add a class to an element', () => {
    element.add('aClass');
    expect(element.element.classList[0]).toBe('aClass');
  });

  it('removes class', () => {
    element.add('aClass');
    element.remove('aClass');
    expect(element.element.classList[0]).toBeUndefined;
  });

  it('is safe to call remove on a classless element', () => {
    element.remove('noClass');
    expect(element.element.classList[0]).toBeUndefined;
  });
});