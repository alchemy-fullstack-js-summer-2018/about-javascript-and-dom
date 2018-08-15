const Animal = require('./Animal');

describe.skip('Object prototype suite of tests', () => {
  const owl = new Animal('Wizzrobe', 'hoot');
  const frog = new Animal('Froppy', 'kero');
  const bonus = { 
    name: 'Fox',
    sound: 'toryah', 
    speak: Animal.prototype.speak
  };
 
  it('passes a test', () => {
    expect(true).toBe(true);
  });

  it('different instances of same class have same prototype', () => {
    expect(frog.__proto__).toBe(owl.__proto__);
  });

  it('have the same method', () => {
    expect(frog.speak).toBe(owl.speak);
  });

  it('have the same constructor name', () => {
    expect(frog.constructor.name).toBe(owl.constructor.name);
  });

  it('have different results when calling speak method', () => {
    expect(frog.speak()).not.toBe(owl.speak());
  });

  it('Fox goes toryah', () => {
    expect(bonus.speak()).toBe('Fox goes toryah');
  });

});