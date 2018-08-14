const Animal = require('../lib/AnimalClass');


describe('Object prototypes: Two object instances...', () => {
  
  let frank;
  let fido;

  beforeEach(() => {
    frank = new Animal('Frank', 'woof!');
    fido = new Animal('Fido', 'ruff!');
  });
  
  it('Have the same prototype', () => {
    expect(frank.__proto__).toEqual(fido.__proto__);
  });
  
  it('Have the same \'speak\' method', () => {
    expect(frank.speak).toEqual(fido.speak);
  });
  
  it('Have the same obj.constructor.name value of Animal', () => {
    expect(frank.constructor.name).toEqual(fido.constructor.name);
  });

  it('Have different results from calling the \'speak\' method', () => {
    expect(frank.speak()).toBe('Frank sez woof!');
    expect(fido.speak()).toBe('Fido sez ruff!');
  });

});