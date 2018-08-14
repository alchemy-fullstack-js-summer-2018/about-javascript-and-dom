describe('DOM manipulation of Text Component', () => {
  
  class TextComponent {
    constructor(text = '') {
      this.text = text;
    }
  }

  it('takes an optional text value', () => {
    let textComponent = new TextComponent(); 
    expect(textComponent.text).toBe('');

    let textComponent2 = new TextComponent('wheee');
    expect(textComponent2.text).toBe('wheee');
  });

});