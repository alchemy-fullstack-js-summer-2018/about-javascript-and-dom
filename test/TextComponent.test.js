const TextComponent = require('../lib/TextComponent');

describe('TextComponent suite', () => {

  let newTextComponent = new TextComponent('something');

  it('takes an optional initial text value in its constructor', () => {
    expect(newTextComponent.text).toBe('something');
  });
  
  it('returns TextNode from its render method', () => {
    let textNode = newTextComponent.render();
    expect(textNode.data).toBe('something');
  });
  
  it('updates the text node via .data', () => {
    let textNode = newTextComponent.update('hello');
    expect(textNode.data).toBe('hello');
  });

  it('calling render again returns the same text node', () => {
    let textNode = newTextComponent.render();
    expect(textNode.data).toBe('hello');
  });

});