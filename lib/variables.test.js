describe('variables, arguments, values, and references', () => {
  let x;
  let beer;
  beforeEach(() => {
    x = 6;
    beer = { name: 'Rainier' };
  });

  it('changes the number value of the variable', () => {
    x = 2;
    expect(x).toBe(2);
  });
  it('changes the value of object', () => {
    beer = { name: 'Montucky' };
    expect(beer.name).toBe('Montucky');
  });
  it('does not change the value of the variable', () => {
    //How to make this a better test?
    beer.stock = 6;
    expect(beer.name).toBe('Rainier');
  });
  it('copies a variable holding a number in function', () => {
    function check(y) {
      expect(y).toBe(6);
      y = 4;
    }
    check(x);
    expect(x).toBe(6);
  });
  it('copies a variable holding an object in function', () => {
    function check(zip) {
      expect(zip).toEqual({ name: 'Rainier' });
      zip = { zap: 'zoop' };
    }
    check(beer);
    expect(beer).toEqual({ name: 'Rainier' });
  });
  it('alters the object inside a function', () => {
    function alter(zip) {
      zip.stock = 6;
    }
    alter(beer);
    expect(beer).toEqual({
      name: 'Rainier',
      stock: 6
    });
  });

});