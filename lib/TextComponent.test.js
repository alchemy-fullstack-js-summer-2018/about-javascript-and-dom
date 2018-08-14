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
  
  it('updates the .data', () => {
    textComponent.update('water');
    expect(textNode.data).toBe('water');
    const updatedRender = textComponent.render();
    expect(updatedRender.data).toBe('water');
  });


});