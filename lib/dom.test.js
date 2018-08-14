describe('DOM suite', () => {

  describe.only('TextComponent class', () => {

    class TextComponent {
      constructor(text, node) {
        this.text = text;
        this.node = null;
      }

      render() {
        this.node = document.createTextNode(this.text);
        return this.node;
      }

      update(text) {
        this.text = text;
        this.node.data = this.text;
        return this.node;
      }
    }

    let newTextComponent = new TextComponent('something');
    
    it('takes an optional initial text value in its constructor', () => {
      expect(newTextComponent.text).toBe('something');
    });
    
    it('returns TextNode from its render method', () => {
      let textNode = newTextComponent.render();
      expect(textNode.data).toBe('something');
    });
    
    it('updates the text node via .data', () => {
      textNode = newTextComponent.update('hello');
      expect(textNode.data).toBe('hello');
    });

    it.skip('', () => {

    });

  });

  describe('ElementClasses class', () => {


    it.skip('', () => {
      
    });

    it.skip('', () => {

    });

    it.skip('', () => {

    });

  });

});;