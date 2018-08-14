const TextComponent = require('../lib/TextComponentClass');

describe('Text component class', () => {

  let textNode;
  let comp1;

  beforeEach(() => {
    textNode = document.createTextNode('');
    comp1 = new TextComponent('Hello World!');
  });
  
  it('Returns a DOM TextNode with value set as \'text\' argument otherwise \'\'', () => {
    expect(textNode.data).toBe('');
    comp1.render(textNode);
    expect(textNode.data).toBe('Hello World!');
  });

  it('Updates the same TextNode', () => {
    comp1.render(textNode);
    expect(textNode.data).toBe('Hello World!');
    comp1.update('Goodbye cruel world!');
    comp1.render(textNode);
    expect(textNode.data).toBe('Goodbye cruel world!');
  });

});