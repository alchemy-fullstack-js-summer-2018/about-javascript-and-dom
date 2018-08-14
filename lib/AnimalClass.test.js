const Animal = require('./AnimalClass');

describe('tests on 2 object instances created from same class', () => {
  const chipmunk = new Animal('Alvin', 'chipchip');
  const bird = new Animal('Tweety', 'chirpchirp');

  it('validates 2 object instances of Animal', () => {
    expect(chipmunk.name).toBe('Alvin');
    expect(bird.name).toBe('Tweety');
    expect(chipmunk.sound).toBe('chipchip');
    expect(bird.sound).toBe('chirpchirp');

  }),

  it('validates same prototype', () => {
    expect(chipmunk.__proto__).toBe(bird.__proto__);
    console.log('CHIPPY', chipmunk.__proto__);
    console.log('BIRDY', bird.__proto__);
  });

  it('validates same speak method', () => {
    expect(chipmunk.speak).toBe(bird.speak);
    console.log('CHIPPY', chipmunk.speak);
    console.log('BIRDY', bird.speak);
  });

});