const Element = require('./Element');

describe('Element Classes', () => {


  let span, spanElement;
  beforeEach(() => {
    span = document.createElement('span');
    spanElement = new Element(span);
  });

  it('makes an element', () => {
    expect(spanElement.element).toBeInstanceOf(HTMLElement);
  });

  it('throws error if not element', () => {
    const fail = () => {
      return new Element('div');
    };
    expect(fail).toThrow('HTML Element Required');
  });

  it('throws error if not element', () => {
    const empty = () => {
      return new Element();
    };
    expect(empty).toThrow('HTML Element Required');
  });

  it('adds a class to the element', () => {
    spanElement.add('content');
    spanElement.add('visible');
    expect(spanElement.element.classList).toContain('content');
    expect(spanElement.element.classList).toContain('visible');
  });

  it('removes a class from the element', () => {
    spanElement.add('content');
    spanElement.add('visible');
    spanElement.remove('content');
    expect(spanElement.remove('asdf')).toBeUndefined();
    expect(spanElement.element.classList).not.toContain('content');
    expect(spanElement.element.classList).toContain('visible');
  });

});