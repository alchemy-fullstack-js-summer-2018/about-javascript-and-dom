describe('Testing Variables, Arguments, Values, and References', () => {
  let i = 5;
  let walrus = {};

  beforeEach(() => {
    walrus = { name: 'Wilford' };
  });

  it('Changes the value of a number variable', () => {
    i = 1;
    expect(i).toBe(1);
  }),

  it('Changes the value of an object property', () => {
    walrus.name = 'Wally';
    expect(walrus.name).toBe('Wally');
  }),

  it('Assigning a value to a property of an object stored in a variable does not change the value of the variable', () => {
    walrus.type = 'Pacific';
    expect(walrus.name).toBe('Wilford');
  }),

  it('Passing a variable that holds a number as an argument to a function copies the value to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable value', () => {
    function numberArg(x) {
      expect(x).toBe(5);
      x = 2;
    }
    numberArg(i);
    expect(i).toBe(5);
  }),

  it('Passing a variable that holds an object as an argument to a function copies the object reference to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable', () => {

  }),

  it('Passing a variable that holds an object as an argument to a function and then assigning a property to the object inside the function will alter the original object to have the new property value', () => {
    function alter(obj) {
      obj.tusks = 2;
    }
    alter(walrus);
    expect(walrus).toEqual({
      name: 'Wilford',
      tusks: 2
    });
  });

});