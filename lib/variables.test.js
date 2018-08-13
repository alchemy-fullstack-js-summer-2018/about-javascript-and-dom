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
  });

  it.skip('', () => {
    
  });
});