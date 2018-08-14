describe('Variables, Arguments, Values, & References suite', () => {
  
  it('changes the value of the variable', () => {
    let x = 23;
    x = 3;

    expect(x).toBe(3);
  });

  it('changes the value of an object variable', () => {
    let dragon = {
      name: 'Neville'
    };
    dragon.name = 'Valerian';

    expect(dragon.name).toBe('Valerian');
  });

  it('assigning a value to a property of an object stored in a variable does not change the value of the variable', () => {
    let wizard = {
      name: 'Merlin'
    };
    let mage = wizard.name;
    wizard.name = 'Harry';

    expect(mage).toBe('Merlin');
  });

  it('passing a variable that holds a number as an argument to a funciton copies the value to the corresponding parameter arguments and reassigning the argument in the function will not alter the original variable value', () => {
    let x = 42;

    function add(y) {
      return y + 2;
    }
    add(x);

    expect(x).toBe(42);
  });

  it('will not alter the original variable', () => {
    let x = {
      says: 'where is the coffee'
    };

    function doSomething(y) {
      y = {
        replies: 'why is the coffee gone'
      };
      return y;
    }

    doSomething(x);

    expect(x.says).toBe('where is the coffee');
  });

  it('will alter the original object to have the new prop value', () => {
    let lamington = {
      origin: 'Australia'
    };

    function alter(lamington) {
      lamington.origin = 'Queensland';
    }

    alter(lamington);

    expect(lamington.origin).toBe('Queensland');
  });
});