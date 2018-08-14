const Animal = require('./javascript');

describe('Testing object prototypes', () => {

  let cat = new Animal('kitty', 'meow');
  let dog = new Animal('doggy', 'woof');

  it('Passes Jest', () => {
    console.log(cat, dog);
    expect(true).toBe(true);
  });

  it('Objects has same prototype', () => {
    console.log(cat._proto_, dog._proto_);
    expect(cat._proto_).toBe(dog._proto_);
  });

  it('Objects have the same speak method', () => {
    console.log(cat.speak, dog.speak);
    expect(cat.speak).toBe(dog.speak);
  });
  
  it('Objects have the same obj.constructor.name value', () => {
    console.log(cat.constructor.name, dog.constructor.name);
    expect(cat.constructor.name).toBe(dog.constructor.name);
  });

  it('Objects have different results from speak method', () => {
    console.log(cat, dog);
    expect(cat.speak()).not.toEqual(dog.speak());
  });

});