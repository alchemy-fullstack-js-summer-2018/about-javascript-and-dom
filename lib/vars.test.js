describe.skip('Variables, Arguments, Values, and References suite', () => {
  let number;
  let myObj;
  const sum = (a, b) => a = a + b;
  const copyObject = (obj1, obj2) => obj1 = obj2;
  const addProp = (obj, val) => obj.sound = val;
  beforeEach(() => {
    number = 1;
    myObj = {
      name: 'a'
    };
  });

  it('reassigning variable holding number changes value of variable', () => {
    number = 2;
    expect(number).toEqual(2);
  });

  it('reassigning variable holding object changes value of variable', () => {
    myObj = 'a';
    expect(myObj).toBe('a');
  });

  it('Assigning a value to a property of an object stored in a variable does not change the value of the variable', () => {
    const otherObj = myObj;
    otherObj.name = 'b';
    myObj.age = 600;
    let prop = myObj.name;
    prop = 'c';
    expect(myObj).toEqual(otherObj);
    expect(myObj.name).not.toBe(prop);
  });

  it('Passing a var with number val as an argument to a func and reassigning the argument in the function will not alter the original variable value.', () => {
    const result = sum(number, 6);
    expect(result).toBe(7);
    expect(number).toBe(1);
  });

  it('Passing a var with obj val as an arg to a func copies the obj ref to the corresponding param and reassigning the arg in the func doesnt alter the original var.', () => {
    const anObj = { smell: 'rage' };
    const anotherObj = { flavor: 'hope' };
    copyObject(anObj, anotherObj);
    expect(anObj).not.toBe(anotherObj);
    // console.log(result, anObj, anotherObj);
  });

  it('Passing a var that holds an obj as an arg to a func and then assigning a prop to the obj inside the func will alter the original obj to have the new prop val.', () => {
    const anObj = { smell: 'rage' };
    addProp(anObj, 'spicy');
    expect(anObj.sound).toBe('spicy');
  });
});