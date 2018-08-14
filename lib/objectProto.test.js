
describe('Testing Animal Prototype', () => {
  class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
    
    speak() {
      return `${this.name} sez ${this.sound}`;
    }
  } 
  
  const frog = new Animal('Froggy', 'ribbit');
  const cat = new Animal('Kitteh', 'mew');

  it('confirms new Animals have the same prototype', () => {
    expect(frog.__proto__).toEqual(cat.__proto__);
  });

  it('confirms new Animals call the same speak method', () => {
    expect(frog.speak).toEqual(cat.speak);
  });

  it('confirms new Animals have the same object constructor name', () => {
    expect(frog.constructor.name).toBe(cat.constructor.name);
  });

  it('confirms each Animal returns a unique sound from speak()', () => {
    expect(frog.speak()).not.toEqual(cat.speak());
  });

});