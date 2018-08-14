const Animal = require('./javascript');

// Object Prototype Tests //
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

// Variables, Arguments, Values, and References Tests //
describe('tests variables, args, values, and references', () => {
  
  it('reassigning a variable holding a num changes value of variable', () => {
    var x = 3;
    x = 4;
    expect(x).toBe(4);
  });

  it('reassigning a variable that holds an object changes value of variable', () => {
    let cat = {
      name: 'Garfield'
    };
    cat.name = 'Felix';
    
    expect(cat).toEqual({ name: 'Felix' });
  });
  
  it('assigning a value to a property of an object does not change value of variable', () => {
    const cat = {
      name: 'Garfield'
    };
    const x = cat.name;
    cat.name = 'Zoe';
    expect(x).toEqual('Garfield');
  });
  it('Parameter arguments holding a number cannot be reassigned and will not alter original declared value', () => {
    var num1 = 3;
    function add(num1) {
      num1 = 10;
      return num1 + 2;
    };
    expect(num1).toBe(3);
  });

  it('Parameter arguments holding an object cannot be reassigned and will not alter original declared value', () => {
    var pet1 = {
      type: 'fish'
    };
    function pet(pet1) {
      pet1 = {
        type: 'snake'
      };
      return pet1;
    };
    expect(pet1.type).toBe('fish');    
  });
  it('Assigning a property to an object inside a function after already assigning it to a variable alters original object', () => {
    
    let cat = {
      name: 'Syd' 
    };
    function pet2(cat) {
      cat.name = 'Garfield';
      return cat.name;
    };
    pet2(cat);

    // console.log('** cat.name', cat.name);
    expect(cat.name).toEqual('Garfield');
  });
});
// TexComponent Tests //
// describe.only('TextComponent tests', () => {

//     it('takes an optional initial value in its constructor(text)', () => {
//       let dog = new Animal('spot', 'woof', 'I am an animal');
//     });
// });
