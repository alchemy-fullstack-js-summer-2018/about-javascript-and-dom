const Element = require('./Element');


describe('Element Classes Tests', () => {

  let newElement;
  let newDiv;

  beforeEach(() => {
    newElement = document.createElement('div');
    newDiv = new Element(newElement);

  });

  it('creates a new Element', () => {
    expect(newDiv.element).toBeInstanceOf(HTMLElement);
  });

  it('throws an error if element is missing', () => {
    const missing = () => {
      return new Element('div');
    };
    expect(missing).toThrow('Missing HTML Element');
  });

  it('throws an error if there is no element passed', () => {
    const none = () => {
      return new Element();
    };
    expect(none).toThrow('Missing HTML Element');
  });


});