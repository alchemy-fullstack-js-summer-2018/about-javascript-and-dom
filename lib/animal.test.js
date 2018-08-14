const Animal = require('./animal');

let velma = new Animal('Velma', 'Meow');
let sidney = new Animal('Sidney', 'Mrrp');

test('Object prototypes are equal', () => {
  expect(velma.__proto__).toEqual(sidney.__proto__);
});

test('Both objects contain the same speak method', () => {
  expect(velma.__proto__.speak).toEqual(sidney.__proto__.speak);

});

test('Objects constructor name is equal', () => {
  expect(velma.__proto__.constructor.name).toEqual(sidney.__proto__.constructor.name);

});

test('Both objects speak methods return different results', () => {
  let x = velma.speak();
  let y = sidney.speak();
  expect(x).not.toEqual(y);
  console.log(sidney.speak());

});

test.skip('Assigning speak method to object literal returns proper result', () => {
  

});