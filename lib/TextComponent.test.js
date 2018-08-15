const TextComponent = require('./TextComponent');

describe('TextComponent test', () => {

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
    expect(noText.render().data).toEqual('');
  });

  it('updates the text using the update method', () => {
    let text = new TextComponent('world');
    expect(text.update('').data).toEqual('');
    expect(text.update('hello').data).toBe('hello');
    expect(text.render().data).toBe('hello');
  });

});