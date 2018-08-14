describe('DOM Manipulation Tests', () => {
  class Text {
    constructor(text = '') {
      this.text = text;
    }

    render() {
      const textNode = document.createTextNode(this.text);
      return textNode;      
    }

    update(text) {
      this.text = text;
      this.render();  
    }
  }  
  
  it('takes an (optional) initial text value in its constructor(text)', () => {
    const text = new Text('This is a test');
    expect(text.text).toEqual('This is a test');
  });

  it('returns a DOM TextNode from its render method that has its .data property set to the initial text value otherwise', ()  => {
    const text = new Text('This is a test');
    const textNode = text.render(); 
    expect(textNode.data).toBe('This is a test');
  });

  it('updates the text value of the node (via the .data property)', () => {
    const text = new Text('This is a test');
    const textNode = document.createTextNode('This is a test');
    const newNode = document.createTextNode('This is a new test');
    expect(text.render()).toEqual(textNode);
    text.update('This is a new test');
    expect(text.render()).toEqual(newNode);
  }); 

});  