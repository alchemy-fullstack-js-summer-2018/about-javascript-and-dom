const TextComponent = require('./TextComponent');

describe('text component tests', () => {

  let textComponent;
  let textNode;
  let textComponent2;
  let textNode2;

  beforeEach(() => {
    textComponent = new TextComponent('walrus');
    textComponent2 = new TextComponent();
    textNode = textComponent.render();
    textNode2 = textComponent2.render();
  });

  it('Renders proper data to text node', () => {
    expect(textNode.data).toBe('walrus');
  }),

  it('Returns empty string if no argument', () => {
    expect(textNode2.data).toBe('');
  }),

  
  it('updates data on a text node and returns updated data on second render', () => {
    textComponent.update('wombat');
    expect(textNode.data).toBe('wombat');
    const secondRender = textComponent.render();
    expect(secondRender.data).toBe('wombat');

  });

});