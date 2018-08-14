describe('variable tests', () => {
  it('validates reassigned variable holds new value', () => {
    let x = 10;
    x = x - 1;
    expect(x).toBe(9);
  });
});