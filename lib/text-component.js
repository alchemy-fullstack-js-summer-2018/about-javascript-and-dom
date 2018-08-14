class TextComponent {
  constructor(text) {
    this.name = name;
    this.contents = contents;
  }

  update(text) {
    return document.createTextNode(text);
  }
}

module.exports = TextComponent;