const Animal = require('../lib/objectPrototype');

describe('Object Prototype Suite', () => {

  const lion = new Animal('Simba', 'roar');
  const giraffe = new Animal('Manilla', 'hum');

  it('Proves two objects have the same prototype', () => {
    expect(lion.__proto__).toEqual(giraffe.__proto__);
  });

  it('Proves two objects have the same speak method', () => {
    expect(lion.speak).toEqual(giraffe.speak);
  });

  it('Proves two objects have the same obj.constructor.name value of Animal', () => {
    expect(lion.constructor.name).toBe(giraffe.constructor.name);
  });

  it('Proves two objects have different results from calling the speak method', () => {
    expect(lion.speak()).not.toEqual(giraffe.speak());
  });
});