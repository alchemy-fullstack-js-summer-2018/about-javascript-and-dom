// const Animal = require('./animal.js'); 

describe('Testing Animal JS', () => {

  it ('has a constructor argument', () => {
    class Animal {}
    const zebra = new Animal();
    expect(zebra.constructor.name).toBe('Animal');
  });

});