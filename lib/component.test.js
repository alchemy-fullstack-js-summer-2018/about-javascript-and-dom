class TextComponent {
  constructor(text) {
    this.text = text;
    this.textNode = document.createTextNode('');
  }
  
  render() {
    if(this.text === undefined) this.textNode.data = '';
    else this.textNode.data = `${this.text}`;
    return this.textNode;
  }

  // update(text) {

  // }
}

describe('textNode class tests', () => {

  let text = new TextComponent('why hello there');
  let empty = new TextComponent();

  it('generates textNodes', () => {
    expect(text.text).toEqual('why hello there');
    expect(text.render().data).toEqual('why hello there');
  });
  
  it('assigsn textNode data to empty when text is undefined', () => {
    expect(empty.render().data).toEqual('');
  });

});