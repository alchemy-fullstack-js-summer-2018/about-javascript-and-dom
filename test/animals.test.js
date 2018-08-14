const Animal = require('../lib/models/animal.js');

describe('Two object instances from same class but with different arguments', () => {

  const cat = new Animal('Felix', 'meow');
  const lion = new Animal('Simba', 'roar');

  it('has the same prototype', () => {
    expect(cat.__proto__).toBe(lion.__proto__);
  });

  it('has same speak method', () => {
    expect(cat.speak).toBe(lion.speak);
  });

  it('has same object constructor name', () => {
    expect(cat.constructor.name).toBe(lion.constructor.name);
  });

  it('has different results for speak method', () => {
    expect(cat.speak()).not.toBe(lion.speak());
  });
  
});