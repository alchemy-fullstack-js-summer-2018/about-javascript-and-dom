const Animal = require('./animalClass');

describe('A suite of tests', () => {

  let dog = new Animal('Goofy', 'woof');
  let cat = new Animal('Garfield', 'meow');

  it('confirms two object instances have same prototype', () => {
    expect(dog.__proto__).toEqual(cat.__proto__);
  });

  it('confirms both instances have same speak method', () => {
    expect(dog.speak).toEqual(cat.speak);
  });

  it('confirms both instances have same obj.constructor.name value of Animal', () => {
    expect(dog.constructor.name).toEqual('Animal');
    expect(cat.constructor.name).toEqual('Animal');
  });

  it('confirms each instance outputs a different result from speak method', () => {
    expect(dog.speak()).not.toBe(cat.speak());
  });

});