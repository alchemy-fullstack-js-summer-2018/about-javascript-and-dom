const Animal = require('./javascript');

// Object Prototype Tests
describe('tests Object prototypes', () => {
  let cat = new Animal('garfield', 'meow');
  let dog = new Animal('spot', 'woof');

  it('share the same prototype', () => {
    expect(cat.__proto__).toBe(dog.__proto__);
  });
  
  it('shares same speak method', () => {
    expect(cat.speak).toBe(dog.speak);
  });
  
  it('share same obj.constructor.name value', () => {
    expect(cat.constructor.name).toBe(dog.constructor.name);
  });
  
  it('has different results calling speak method', () => {
    expect(cat.speak()).not.toEqual(dog.speak());
  });   
});

// Variables, Arguments, Values, and References Tests
describe.only('tests variables, args, values, and references', () => {
  
  it('reassigning a variable holding a num changes value of variable', () => {
    var x = 3;
    x = 4;
    expect(x).toBe(4);
  });

  it('reassigning a variable that holds an object changes value of variable', () => {
    let cat = {
      name: 'Felix'
    };
    expect(cat).toEqual({ name: 'Felix' });
  });

  it('assigns a value to a property of an object does not change value of variable', () => {
    let cat = {
      name: 'Garfield'
    };
    cat.name = 'Zoe';
    expect(cat).toEqual({ name: 'Zoe' });
  });
  // ask questions about this one!!!!
  it('Parameter arguments cannot be reassigned and will not alter original declared value', () => {
    function add(num1) {
      const n1 = 3;
      var num1 = Object.freeze(n1);
      console.log('**w***', n1);
      return num1 + 2;
      n1 = 10;
    };
    console.log('** add', add());
    expect(add()).toBe(5);
  });


});