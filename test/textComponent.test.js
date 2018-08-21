const TextComponent = require('../lib/textComponent');

describe('Testing TextComponent', () => {

  let newText = new TextComponent('Skyline');
  
  it('Takes an (optional) initial text value in its `constructor(text)`', () => {
    expect(newText.text).toBe('Skyline');
  });

  it('Returns a DOM TextNode from its `render` method that has its `.data` property set to the initial text value (otherwise empty string).', () => {
    let textNode = newText.render();
    expect(textNode.data).toBe('Skyline');
  });

  it('Has an `update(text)` method that will update the text value of the node (via the `.data` property).', () => {
    let textNode = newText.update('Subaru');    
    expect(textNode.data).toBe('Subaru');
  });

  it('Calling render() a second time should _return the same TextNode_', () => {
    let textNode = newText.render();
    expect(textNode.data).toBe('Subaru');
  });

});