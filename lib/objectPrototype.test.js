const Animal = require('./objectPrototype');

describe('Animal class tests', () => {
  
  let cat = new Animal('Cat', 'Meow');
  let dog = new Animal('Dog', 'Woof');
  let lion = {
    name: 'lion',
    sound: 'roar'
  };
  lion.speak = Animal.prototype.speak;
  
  it('has a prototype property', () => {
    expect(dog.__proto__).toBeTruthy();
    expect(cat.__proto__).toBeTruthy();
  });

  it('gives each object the same proto property', () => {
    expect(dog.__proto__).toEqual(cat.__proto__);
  });

  it('has and can call the speak method', () => {
    expect(dog.speak).toEqual(cat.speak);
    expect(dog.speak()).not.toEqual(cat.speak());
    expect(lion.speak).toEqual(cat.speak);
    expect(lion.speak()).toBe('lion sez roar');
  });

  it('assigns constructor names', () => {
    expect(dog.constructor.name).toBe(cat.constructor.name);
  });

});