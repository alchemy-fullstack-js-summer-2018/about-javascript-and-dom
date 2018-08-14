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


});