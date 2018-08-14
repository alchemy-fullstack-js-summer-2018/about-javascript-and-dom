const Animal = require('./AnimalClass');

describe('tests on 2 object instances created from same class', () => {
  const chipmunk = new Animal('Alvin', 'chipchip');
  const bird = new Animal('Tweety', 'chirpchirp');

  it('validates 2 object instances of Animal', () => {
    expect(chipmunk.name).toBe('Alvin');
    expect(bird.name).toBe('Tweety');
    expect(chipmunk.sound).toBe('chipchip');
    expect(bird.sound).toBe('chirpchirp');

  });

});