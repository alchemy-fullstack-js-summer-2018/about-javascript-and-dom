const Element = require('./Element');

describe('Element Classes', () => {


  let span, spanElement;
  beforeEach(() => {
    span = document.createElement('span');
    spanElement = new Element(span);
  });

  it('makes an element', () => {
    expect(spanElement.element instanceof HTMLElement).toBe(true);
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
    expect(spanElement.element.classList[0]).toEqual('content');
    expect(spanElement.element.classList[1]).toEqual('visible');
  });

  it('removes a class from the element', () => {
    spanElement.add('content');
    spanElement.add('visible');
    spanElement.remove('content');
    expect(spanElement.remove('asdf')).resolves;
    expect(spanElement.element.classList[0]).toEqual('visible');
  });

});