const Animal = require('./animals');

let cat = new Animal('felix', 'meow');
let dog = new Animal('journey', 'bark');

describe('Animal testing - the humane kind', () => {
  it('has the same prototype', () => {
    expect(cat.__proto__).toBe(dog.__proto__);
  });

  it('has the same prototype speak method', () => {
    expect(cat.__proto__.speak()).toBe(dog.__proto__.speak());
  });

  it('has the same constructor name value', () => {
    expect(cat.constructor.name).toBe('Animal');
    expect(dog.constructor.name).toBe('Animal');
  });

  it('properly renders appropriate responses with speak method', () => {
    expect(cat.speak()).toBe('felix sez meow');
    expect(dog.speak()).toBe('journey sez bark');
  });
});