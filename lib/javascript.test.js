
describe('Object Prototype Suite', () => {
  class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
    
    speak() {
      return `${this.name} sez ${this.sound}`;
    }
  }

  const lion = new Animal('Simba', 'roar');
  const giraffe = new Animal('Manilla', 'hum');

  it('Proves two objects have the same prototype', () => {
    expect(lion.__proto__).toEqual(giraffe.__proto__);
  });

  it('Proves two objects have the same speak method', () => {
    expect(lion.speak).toEqual(giraffe.speak);
  });

  it.skip('Proves two objects have the same speak method', () => {

  });
});