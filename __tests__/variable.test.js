
describe('Variables, arguments, values, and references', () => {

  let numberFive;
  let frank;
  let newFrank;

  beforeEach(() => {
    numberFive = 5;
    frank = { name: 'Frank', age: 4, type: 'Dog' };
    newFrank = frank;
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
    frank.name = 'NEW Frank';
    expect(newFrank).toEqual(frank);
    expect(frank).toEqual({ name: 'NEW Frank', age: 4, type: 'Dog' });
  });

  it.skip('Passing a variable (number as argument) to function copies the value to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable value', () => {

  });

  it.skip('Passing a variable (object as argument) to function copies the object reference to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable', () => {

  });

  it.skip('Passing a variable (object as argument) to function and then assigning a property to the object inside the function will alter the original object to have the new property value', () => {

  });

});