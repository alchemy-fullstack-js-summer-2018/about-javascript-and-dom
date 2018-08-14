class TextComponent {
  constructor(text = '') {
    this.text = text;
  }

  render() {
    return document.createTextNode(this.text);
  }

  update(newText) {
    this.text = newText;
    return this.render().data;
  }
}

module.exports = TextComponent;