
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

  const lion = new Animal();
  const giraffe = new Animal();

  it('Proves two objects have the same prototype', () => {
    expect(lion.__proto__).toBe(giraffe.__proto__);
  });
});