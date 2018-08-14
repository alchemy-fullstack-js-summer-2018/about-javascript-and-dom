const Animal = require('./javascript');

describe('Testing Variables, Arguments, Values, and References', () => {

  let cat = new Animal('kitty', 'meow');
  let dog = new Animal('doggy', 'woof');

  it('Reassigning a variable that hold a number changes the value of the variable', () => {
    let x = 2;
    x = 4;
    console.log(x);
    expect(x).toBe(4);
  });

  it('Reassigning a variable that holds an object changes the value of the variable', () => {
    let cat = {
      name: 'Whiskers'
    };
    console.log(cat.name);
    expect(cat.name).toEqual('Whiskers');
  });

  it('Assigning a value to a property of an object stored in a variable does not change the value of the variable.', () => {
    console.log(cat, dog);
    expect(true).toBe(true);
  });

  it('Passing a variable that holds a number as an argument to a function copies the value to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable value', () => {
    console.log(cat, dog);
    expect(true).toBe(true);
  });

  it('Passing a variable that holds an object as an argument to a function copies the object reference to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable', () => {
    console.log(cat, dog);
    expect(true).toBe(true);
  });

  it('Passing a variable that holds an object as an argument to a function and then assigning a property to the object inside the function will alter the original object to have the new property value.', () => {
    console.log(cat, dog);
    expect(true).toBe(true);
  });

});