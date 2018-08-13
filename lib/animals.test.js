const Animal = require('./animals');

let cat = new Animal('felix', 'meow');
let dog = new Animal('journey', 'bark');

describe('Animal testing - the humane kind', () => {
  it('has the same prototype', () => {
    expect(cat.__proto__).toBe(dog.__proto__);
  });
});