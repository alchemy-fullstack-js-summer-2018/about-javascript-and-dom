class TextComponent {
  constructor(text) {
    this.text = text;
  }

  update(text) {
    this.text = text;
    this.node.data = this.text;
  }

  render() {
    this.node = document.createTextNode(this.text);
    return this.node;
  }
}

module.exports = TextComponent;