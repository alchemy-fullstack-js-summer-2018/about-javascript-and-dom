# DOM and Classes

Use `jest` to write tests that prove the following

## 1. Object Prototype

Given the following class:

```js
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  
  speak() {
    return `${this.name} sez ${this.sound}`;
  }
}
```

Write tests that prove:

Two objects instances created from the same class (constructed via `new`), but with different
constructor arguments have:

1. The same prototype
1. The same `speak` method
1. Both have the same prototype.constructor value of `Animal`
1. Different results from calling the `speak` method

## 2. Variables, Arguments, Values, and References

Write tests that prove:

1. Reassigning a variable that hold a number changes the value of the variable
1. Reassigning a variable that holds an object changes the value of the variable
1. Assigning a value to a property of an object stored in a variable does not change the
value of the variable.
1. Passing a variable that holds a number as an argument to a function copies the value to the
corresponding parameter arguments and reassigning the argument in the function will not alter the original variable value.
1. Passing a variable that holds an object as an argument to a function copies the object reference to the
corresponding parameter arguments and reassigning the argument in the function will not alter the original variable.
1. Passing a variable that holds an object as an argument to a function and then assigning a property to the object inside
the function will alter the original object to have the new property value.

## Reentrant Code
