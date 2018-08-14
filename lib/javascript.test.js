const Animal = require('./javascript');

describe('Testing object prototypes', () => {

  let cat = new Animal('kitty', 'meow');
  let dog = new Animal('doggy', 'woof');

  it('Passes a test', () => {
    console.log(cat, dog);
    expect(true).toBe(true);
  });
});