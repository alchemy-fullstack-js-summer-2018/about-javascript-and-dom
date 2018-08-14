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

  it('Renders proper data to text node', () => {
    expect(textNode2.data).toBe('');
  });

  // it('Returns empty string if no argument');
  
  // it('updates data on a text node');

  // it('returns same TextNode on second render');

  

});