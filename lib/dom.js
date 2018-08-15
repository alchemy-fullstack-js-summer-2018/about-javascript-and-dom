class TextComponent {
  constructor(text) {
    this.text = text;
    this.node = null;
  }

  //   render() {
  //     this.node = document.createTextNode(this.text);
  //     return this.node;
  //   }

  //   update() {
  //     this.text = text;
  //     this.node.data = this.text;
  //     return this.node;
  //   }

}

module.exports = TextComponent;