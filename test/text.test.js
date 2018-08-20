const TextComponent = require('../lib/dom');

describe('Testing TextComponent', () => {

  let newText = new TextComponent('Nissan');
  let textComponent = new TextComponent('Skyline');
  let textNode = textComponent.render();
  
  it('Takes an (optional) initial text value in its `constructor(text)`', () => {
    console.log(newText.text);
    expect(newText.text).toBe('Nissan');
  });

  it('Returns a DOM TextNode from its `render` method that has its `.data` property set to the initial text value (otherwise empty string).', () => {
    expect(textNode.data).toBe('Skyline');
  });

  it('Has an `update(text)` method that will update the text value of the node (via the `.data` property).', () => {
    
    textComponent.update('Subaru');
    expect(textNode.data).toBe('Subaru');
  });

  it('Calling render() a second time should _return the same TextNode_', () => {
    
    expect(textComponent.render().data).toBe('Subaru');
  });

});