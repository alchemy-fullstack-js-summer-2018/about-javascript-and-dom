const TextComponent = require('./TextComponent');

describe('Text Component', () => {

  let textComponent, textNode; 
  beforeEach(() => {
    textComponent = new TextComponent('coffee');
    textNode = textComponent.render();
  });

  it('makes a text node', () => {
    expect(textNode.data).toBe('coffee');
  });

  it('makes a textNode with empty string', () => {
    const emptyComponent = new TextComponent();
    const emptyNode = emptyComponent.render();
    expect(emptyNode.data).toBe('');
  });
  
  it('updates the .data, render returns the updated node', () => {
    textComponent.update('water');
    expect(textNode.data).toBe('water');

    const updatedNode = textComponent.render();
    expect(updatedNode.data).toBe('water');
  });


});