describe('DOM manipulation of Text Component', () => {
  
  class TextComponent {
    constructor(text = '') {
      this.text = text;
    }
    render() {
      this.node = document.createTextNode(this.text);
      return this.node;
    }
    update(text) {
      this.text = text;
      this.render();
    }
  }

  it('takes an optional text value', () => {
    let textComponent = new TextComponent(); 
    expect(textComponent.text).toBe('');

    let textComponent2 = new TextComponent('wheee');
    expect(textComponent2.text).toBe('wheee');
  });

  it('returns a text node with data prop set to initial text value or empty', () => {
    let textComponent = new TextComponent('hello');
    let textNode = document.createTextNode('hello');

    expect(textComponent.render()).toEqual(textNode);
  });

  it('updates the text value of the node', () => {
    let textComponent = new TextComponent('hello');
    let textNode = document.createTextNode('goodbye');
    textComponent.update('goodbye');

    expect(textComponent.render()).toEqual(textNode);
    
  });

});