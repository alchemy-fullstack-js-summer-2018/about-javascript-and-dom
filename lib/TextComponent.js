class TextComponent {
  constructor(text = '') {
    this.text = text;
  }

  render() {
    return document.createTextNode(this.text);
  }

  update(newText) {
    return this.render().data = newText;
  }
}

module.exports = TextComponent;