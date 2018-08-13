const Animal = require('./animal');

let velma = new Animal('Velma', 'Meow');
let sidney = new Animal('Sidney', 'Mrrp');

test('Object prototypes are equal', () => {
  expect(velma.__proto__).toEqual(sidney.__proto__);
});

test('Both object contain the same speak method', () => {

});

test('Objects constructor name is equal', () => {

});

test('Both objects speak methods return different results', () => {

});

test('Assigning speak method to object literal returns proper result', () => {

});