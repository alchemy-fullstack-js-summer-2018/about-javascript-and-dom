const TextComponent = require('./textComponent');

describe('A suite of tests on text components', () => {

  let textComponent = new TextComponent('Hello!');
  let textNode = textComponent.render();
  let noText = new TextComponent();

  it('takes an optional text value in the constructor', () => {
    expect(textComponent.text).toBe('Hello!');
    expect(noText.text).toBe('');
  });

  it('Returns a DOM TextNode from its render method that has its .data property set to the initial text value otherwise empty string', () => {
    expect(textNode.data).toBe('Hello!');
  });

  it('Has an update(text) method that will update the text value of the node (via the .data property)', () => {
    textComponent.update('Hi!');
    expect(textNode.data).toBe('Hi!');
  });

  it('Calling render() a second time should return the same TextNode', () => {
    expect(textComponent.render().data).toBe('Hi!');
  });

});