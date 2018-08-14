describe('variable tests', () => {
  it('validates reassigned variable holds new numberical value', () => {
    let x = 10;
    x = x - 1;
    expect(x).toBe(9);
  }),

  it('validates reassigned variable holds new object value', () => {
    let pet = {
      name: 'Benjamin Franklin'
    };
    pet.name = 'Milo';

    expect(pet.name).toBe('Milo');

  }),

  it('validates assigning a value to a property of an object stored in a variable does not change the value of the variable', () => {
    let pet = {
      name: 'Benjamin Franklin'
    };
    let kitty = pet.name;
    pet.name = 'Milo';

    expect(kitty).toBe('Benjamin Franklin');
    console.log(kitty);
  });
});