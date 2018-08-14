const TextComponent = require('./TextComponent');

describe.only('TextComponent test', () => {

  it('takes an optional text value in its constructor', () => {
    let text = new TextComponent('hello');
    expect(text).toBe('hello');
  });
  
});