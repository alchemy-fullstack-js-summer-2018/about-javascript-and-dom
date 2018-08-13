const Animal = require('./animal');

let velma = new Animal('Velma', 'Meow');
let sidney = new Animal('Sidney', 'Mrrp');

test('Object prototypes are equal', () => {
  expect(velma.__proto__).toEqual(sidney.__proto__);
});