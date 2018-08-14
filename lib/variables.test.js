let x = 2;
let y = {
  animal: 'cat'
};

function addFive(num) {
  return num + 5;
}

function changeAnimal(obj) {
  obj = {
    animal: 'alpaca'
  };
  return obj;
}

function changeAlpaca(obj) {
  return obj.animal = 'alpaca';
}

describe('Variables, arguments, values, and references', () => {
  beforeEach(() => {
    x = 2;
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

  it('passes variable as function parameter and keeps original variable', () => {
    expect(addFive(x)).toBe(7);
    expect(x).toBe(2);
  });

  it('takes object as function parameter and keeps original variable', () => {
    expect(changeAnimal(y)).toEqual({ animal: 'alpaca' });
    expect(y.animal).toBe('cat');
  });

  it('takes object as function parameter and changes property', () => {
    expect(changeAlpaca(y)).toBe('alpaca');
    expect(y).toEqual({ animal: 'alpaca' });
  });
});