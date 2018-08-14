describe('DOM suite', () => {

  describe.only('TextComponent class', () => {

    class TextComponent {
      constructor(text) {
        this.text = text;
      }
    }

    let newTextComponent = new TextComponent();
    newTextComponent.constructor.text = 'something';

    it('takes an optional initial text value in its constructor', () => {
      expect(newTextComponent.constructor.text).toBe('something');
    });

    it.skip('', () => {
      
    });

    it.skip('', () => {

    });

    it.skip('', () => {

    });

  });

  describe('ElementClasses class', () => {


    it.skip('', () => {
      
    });

    it.skip('', () => {

    });

    it.skip('', () => {

    });

  });

});