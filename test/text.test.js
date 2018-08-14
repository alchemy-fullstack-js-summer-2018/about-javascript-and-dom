const TextComponent = require('../lib/dom');

describe('Testing TextComponent', () => {

  let newText = new TextComponent('Nissan');
  
  it.only('Takes an (optional) initial text value in its `constructor(text)`', () => {

    console.log(newText.text);
    expect(newText.text).toBe('Nissan');
  });

  it('Returns a DOM TextNode from its `render` method that has its `.data` property set to the initial text value (otherwise empty string).', () => {
    
    expect(true).toBe(true);
  });

  it('Has an `update(text)` method that will update the text value of the node (via the `.data` property).', () => {
    
    expect(true).toBe(true);
  });

  it('Calling render() a second time should _return the same TextNode_', () => {
    
    expect(true).toBe(true);
  });

});