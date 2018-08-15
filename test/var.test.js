describe('Testing Variables, Arguments, Values, and References', () => {

  it('Reassigning a variable that hold a number changes the value of the variable', () => {
    let x = 2;
    x = 4;
    expect(x).toBe(4);
  });

  it('Reassigning a variable that holds an object changes the value of the variable', () => {
    let cat = {
      name: 'kitty'
    };

    cat.name = 'Whiskers';
    expect(cat.name).toBe('Whiskers');
  });

  it('Assigning a value to a property of an object stored in a variable does not change the value of the variable.', () => {
    let car = {
      model: 'Skyline'
    };

    let myCar = car.model;
    car.model = 'Legacy';
    expect(myCar).toBe('Skyline');
  });

  it('Passing a variable that holds a number as an argument to a function copies the value to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable value', () => {
    let x = 5;

    function add(y) {
      return y + 2; 
    }

    add(x);
    expect(x).toBe(5);
  });

  it('Passing a variable that holds an object as an argument to a function copies the object reference to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable', () => {
    let car = {
      model: 'Impreza'
    };

    function newModel(vehicle){
      vehicle = {
        model: 'gt40'
      };
      return vehicle;
    }

    newModel(car);
    expect(car.model).toBe('Impreza');
  });

  it('Passing a variable that holds an object as an argument to a function and then assigning a property to the object inside the function will alter the original object to have the new property value.', () => {
    let car = {
      model: 'Impreza'
    };

    function newModel(car){
      car.model = 'RX-7';
    }

    newModel(car);
    expect(car.model).toBe('RX-7');
  });

});