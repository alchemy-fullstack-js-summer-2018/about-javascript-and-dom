const TextComponent = require('./component');

describe('textNode class tests', () => {

  let text = new TextComponent('why hello there');
  let empty = new TextComponent();

  it('generates textNodes', () => {
    expect(text.text).toEqual('why hello there');
    expect(text.render().data).toEqual('why hello there');
  });
  
  it('assigns textNode data to empty when text is undefined', () => {
    expect(empty.render().data).toEqual('');
  });

  it('updates the text node value', () => {
    expect(text.update('awww yiss').data).toEqual('awww yiss');
    expect(text.render().data).toEqual('awww yiss');
  });

});