const TextComponent = require('./TextComponent');

describe.only('TextComponent test', () => {

  it('takes an optional text value in its constructor', () => {
    let text = new TextComponent('hello');
    let noText = new TextComponent();
    expect(text.text).toBe('hello');
    expect(noText.text).toBe('');
  });

  it('returns the constructor text as a TextNode element', () => {
    let text = new TextComponent('world');
    let noText = new TextComponent();
    expect(text.render().data).toBe('world');
  });

});