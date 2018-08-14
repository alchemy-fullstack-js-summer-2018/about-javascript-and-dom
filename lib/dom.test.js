describe('DOM suite', () => {

  describe('TextComponent class', () => {

    class TextComponent {
      constructor(text) {
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
      let textNode = newTextComponent.update('hello');
      expect(textNode.data).toBe('hello');
    });

    it('calling render again returns the same text node', () => {
      let textNode = newTextComponent.render();
      expect(textNode.data).toBe('hello');
    });

  });

  describe.only('ElementClasses class', () => {

    class ElementClasses {
      constructor(element) {
        this.element = element;
      }

    }

    this.element = document.createElement('p');
    let elemental = new ElementClasses(this.element);

    it('take an element in the constructor; otherwise, throw an error', () => {
      expect(elemental.data).toBeTruthy();
      //throw error
    });

    it.skip('', () => {

    });

    it.skip('', () => {

    });

  });

});