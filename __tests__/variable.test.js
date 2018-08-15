
describe('Variables, arguments, values, and references', () => {

  let numberFive;
  let frank;
  let newFrank;
  let newDog;

  function passANumber(numberFive) {
    numberFive = 10;
    frank.age = numberFive;
  }

  function copyFrank(frank) {
    frank = { name: 'Original Frank', age: 4, type: 'Dog' };
    newDog = frank;
  }

  function changeFrank(frank) {
    frank.favFood = 'Cheese';
  }

  beforeEach(() => {
    numberFive = 5;
    frank = { name: 'Frank', age: 4, type: 'Dog' };
    newFrank = frank.name;
  });

  it('Reassigning a variable (number) changes the value of the variable', () => {
    numberFive = 10;
    expect(numberFive).toEqual(10);
  });

  it('Reassigning a variable (object) changes the value of the variable', () => {
    frank = { name: 'FRANK', type: 'Dog' };
    expect(frank).toEqual({ name: 'FRANK', type: 'Dog' });
  });

  it('Assigning a value (property of object) does not change the value of the variable', () => {
    frank.name = 'TED';
    expect(newFrank).toEqual('Frank');
  });

  it('Passing a variable (number as argument) to function copies the value to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable value', () => {
    passANumber(numberFive);
    expect(frank.age).toEqual(10);
    expect(numberFive).toEqual(5);
  });

  it('Passing a variable (object as argument) to function copies the object reference to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable', () => {
    copyFrank(frank);
    expect(newDog.name).toBe('Original Frank');
    expect(frank.name).toBe('Frank');
  });

  it('Passing a variable (object as argument) to function and then assigning a property to the object inside the function will alter the original object to have the new property value', () => {
    expect(frank).toEqual({ name: 'Frank', age: 4, type: 'Dog' });
    changeFrank(frank);
    expect(frank).toEqual({ name: 'Frank', age: 4, type: 'Dog', favFood: 'Cheese' });
  });

});