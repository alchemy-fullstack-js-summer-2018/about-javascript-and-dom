
describe('A suite of tests on memory', () => {

  let someObject;
  beforeEach(() => {
    someObject = {
      name: 'Bob',
      age: 33
    };
  });

  it('reassigning a variable that hold a number changes the value of the variable', () => {
    let num = 10;
    num = 33;
    expect(num).toBe(33);
  });

  it('reassigning a variable that holds an object changes the value of the variable', () => {
    someObject = {
      name: 'ACL',
      type: 'School'
    };

    expect(someObject).toEqual({ name: 'ACL', type: 'School' });
  });

  it('assigning a value to a property of an object stored in a variable does not change value of the variable', () => {
    let name = someObject.name;
    name = 'Archer';
    expect(someObject.name).toEqual('Bob');
    expect(name).not.toEqual('Bob');
  });

  it('passing a variable that holds an object as an argument to a function copies the object reference to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable.', () => {
    function noChange(object) {
      object = {
        name: 'Archer',
        age: 44
      };
      return object;
    }
    expect(noChange(someObject)).not.toStrictEqual(someObject);
  });

  it('passing a variable that holds an object as an argument to a function and then assigning a property to the object inside the function will alter the original object to have the new property value.', () => {
    function change(object) {
      object.name = 'Bobby';
      object.age = 28;
      return object;
    }
    expect(change(someObject)).toStrictEqual(someObject);
  });

});