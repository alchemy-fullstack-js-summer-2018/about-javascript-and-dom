class TextComponent {
  constructor(text = '') {
    this.text = text;
    this.node = document.createTextNode(this.text);
  }

  render() {
    this.node.data = `${this.text}`;
    return this.node;
  }

  update(newText) {
    this.text = newText;
    return this.render();
  }
}

module.exports = TextComponent;