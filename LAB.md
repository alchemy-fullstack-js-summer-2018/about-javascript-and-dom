# A Bit About JavaScript and The DOM

## Setup

* `package.json`, `.eslintrc`, `.gitignore`, `.travis.yml`, `lib` folder
* `package.json` scripts for testing (see classwork example)

## Objective

Use `jest` to write tests that prove the following.

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
1. Both have the same obj.constructor.name value of `Animal`
1. Different results from calling the `speak` method

BONUS: Assigning the `speak` method to a property called `speak` on an object literal of `{ name: 'literal', sound: 'meep' }`, and then test that calling it returns `'literal sez meep'`.

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

## DOM Manipulation

### TextComponent

Write a tested `TextComponent` class that:

1. Takes an (optional) initial text value in its `constructor(text)`
1. Returns a DOM TextNode from its `render` method that has it's `.data` property set to the initial text value (otherwise `''`)
1. Has an `update(text)` method that will update the text value of the node (via the `.data` property).
1. Calling render() a second time should _return the same TextNode_

### ElementClasses

Write a tested `ElementClasses` class that:

1. Takes an element in its `constructor(element)`. It should throw if argument is missing or not an instance of `HTMLElement`
1. Has an `add(className)` method that adds the `className` to the element
1. Has a `remove(className)` method that removes the `className` from the element (safe to call if class doesn't have that `className`)

## Rubric

* Object Prototype **3pts**
* Variable, Arguments, Values, References **3pts**
* DOM Manipulation **3pts**
* Clean, linted, readable code **1pt**
