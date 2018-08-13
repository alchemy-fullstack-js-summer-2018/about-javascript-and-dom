describe('Variables, Arguments, Values, & References suite', () => {
  
  it('changes the value of the variable', () => {
    let x = 23;
    x = 3;

    expect(x).toBe(3);
  });

  it('changes the value of an object variable', () => {
    let dragon = {
      name: 'Neville'
    }
    dragon.name = 'Valerian'

    expect(dragon.name).toBe('Valerian');
  });

  it('assigning a value to a property of an object stored in a variable does not change the value of the variable', () => {
    let wizard = {
      name: 'Merlin'
    }
    let mage = wizard.name;
    wizard.name = 'Harry';

    expect(mage).toBe('Merlin');
  });
});