const Animal = require('./javascript');

// Object Prototype Tests
describe('tests Object prototypes', () => {
  let cat = new Animal('garfield', 'meow');
  let dog = new Animal('spot', 'woof');

  it('share the same prototype', () => {
    // console.log('***cat', cat.__proto__);
    // console.log('***dog', dog.__proto__);
    expect(cat.__proto__).toBe(dog.__proto__);
  });

  it('shares same speak method', () => {
    expect(cat.speak).toBe(dog.speak);
  });


    
});