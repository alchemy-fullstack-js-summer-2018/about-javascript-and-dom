module.exports = class TextComponent {
  constructor(text = '') {
    this.text = text;
    this.node = null;
  }
  render() {
    this.node = document.createTextNode(this.text);
    return this.node;
  }

  update(txt) {
    this.text = txt;
    this.node.data = this.text;
    return this.node;
  }
};