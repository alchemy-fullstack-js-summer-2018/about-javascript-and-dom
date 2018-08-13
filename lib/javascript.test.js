class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  
  speak() {
    return `${this.name} sez ${this.sound}`;
  }
}

let cat = new Animal('Cat', 'Meow');
let dog = new Animal('Dog', 'Woof');

describe('Animal class tests', () => {

  it('has a prototype property', () => {
    expect(dog.__proto__).toBeTruthy();
    expect(cat.__proto__).toBeTruthy();
  });

  
});