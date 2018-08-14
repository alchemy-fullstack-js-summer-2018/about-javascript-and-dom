describe('Object Prototype Tests', () => {

  class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }

    speak() {
      return `${this.name} sez ${this.sound}`;
    }
  }

  let dog, bat;
  beforeEach(() => {
    dog = new Animal('dog', 'woof');
    bat = new Animal('bat', 'scree');
  });

  it('objects have same prototype', () => {
    expect(dog.__proto__).toBe(bat.__proto__);
  });

  it('objects have same speak method', () => {
    expect(dog.speak).toBe(bat.speak);
  });

  it('objects have same obj.constructor.name value of Animal', () => {
    expect(dog.constructor.name).toBe(bat.constructor.name);
  });

  it('objects have different results from calling speak method', () => {
    expect(dog.speak()).toBe('dog sez woof');
    expect(bat.speak()).toBe('bat sez scree');
  });
  
});