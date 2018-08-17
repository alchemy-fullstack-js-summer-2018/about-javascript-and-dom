

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  
  speak() {
    return `${this.name} sez ${this.sound}`;
  }
}
// Text Component
class TextComponent {
  constructor(text) {
    this.text = text;
    this.node = null;
  }
  
  render() {
  
    this.node = document.createTextNode(this.text);
    return this.node;
  }

  updateText(text) {
    this.text = text;
    this.node.data = this.text;
    return this.node;

  }
}


module.exports = { Animal, TextComponent };

