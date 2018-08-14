class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  
  speak() {
    return `${this.name} sez ${this.sound}`;
  }
} 

describe('Testing Animal Prototype', () => {
  const frog = new Animal('Froggy', 'ribbit');
  const cat = new Animal('Kitteh', 'mew');
  const speak = jest.fn();

  it ('confirms new Animals have the same prototype', () => {
    expect(frog.__proto__).toEqual(cat.__proto__);
  });

  it('confirms new Animals have the same speak method', () => {
   
  });

});