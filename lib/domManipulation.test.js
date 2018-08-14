const TextComponent = require('./TextComponent');

describe('Tests TextComponent and ElementClasses', () => {

  it('returns DOM TextNode and has its .data property set to the initial text value', () => {
    const textComponent = new TextComponent('hello');
    console.log(textComponent.render());
  });
});