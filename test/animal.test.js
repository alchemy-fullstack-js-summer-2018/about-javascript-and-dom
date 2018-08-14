const Animal = require('../lib/animal');

describe('Testing object prototypes', () => {

  let cat = new Animal('kitty', 'meow');
  let dog = new Animal('doggy', 'woof');

  it('Passes Jest init', () => {
    expect(true).toBe(true);
  });

  it('Objects has same prototype', () => {
    expect(cat._proto_).toBe(dog._proto_);
  });

  it('Objects have the same speak method', () => {
    expect(cat.speak).toBe(dog.speak);
  });
  
  it('Objects have the same obj.constructor.name value', () => {
    expect(cat.constructor.name).toBe(dog.constructor.name);
  });

  it('Objects have different results from speak method', () => {
    expect(cat.speak()).not.toEqual(dog.speak());
  });

});