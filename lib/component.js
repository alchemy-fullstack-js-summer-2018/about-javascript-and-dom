class TextComponent {
  constructor(text) {
    this.text = text;
    this.textNode = document.createTextNode('');
  }
  
  render() {
    if(!this.text) this.textNode.data = '';
    else this.textNode.data = `${this.text}`;
    return this.textNode;
  }

  update(text) {
    this.text = text;
    return this.render();
  }
}

module.exports = TextComponent;