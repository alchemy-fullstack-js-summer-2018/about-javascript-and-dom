/* eslint no-console: off */
describe('variable tests', () => {
  it('validates reassigned variable holds new numerical value', () => {
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
  }),

  it('validates passing a var that holds a # as an arg to a funct copies the value to the corresponding parameter args and reassigning the arg in the function will not alter the original var value', () => {
    let x = 10;

    function multi(y) {
      return y * 2;
    }
    multi(x);

    expect(x).toBe(10);
    console.log(x);
  }),

  it('validates passing a var that holds an object as an argument to a function copies the object reference to the corresponding parameter args and reassigning the arg in the function will not alter the original var', () => {
    let x = {
      name: 'Dummy'
    };

    function trumpMe(y) {
      y = {
        newName: 'Trump Dummy'
      };
      return y;
    }
    trumpMe(x);

    expect(x.name).toBe('Dummy');
  }),

  it('...changes object to have new property value', () => {
    let kitten = {
      color: 'gray'
    };

    function newColor(kitten) {
      kitten.color = 'black';
    }

    newColor(kitten);
    expect(kitten.color).toBe('black');
    console.log(kitten.color);
  });
});