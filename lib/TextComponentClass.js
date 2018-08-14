class TextComponent {
  constructor(text) {
    this.text = text || '';
  }
      
  render(textNode) {
    textNode.data = this.text;
  }

  update(text) {
    this.text = text;
  }
}

module.exports = TextComponent;