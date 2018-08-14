let x = 5;
let y = {
  animal: 'cat'
};

describe('Variables, arguments, values, and references', () => {
  beforeEach(() => {
    x = 5;
    y = {
      animal: 'cat'
    };
  });
  
  it('reassigns the value of a variable holding a number', () => {
    x = 10;
    expect(x).toBe(10);
  });

  it('reassigns value of variable holding an object', () => {
    y = 'dog';
    expect(y).toBe('dog');
  });

  it('does not change value of object property stored in variable', () => {
    let z = y.animal;
    y.animal = 'lemur';
    expect(y).toEqual({ animal: 'lemur' });
    expect(z).toBe('cat');
  });
});