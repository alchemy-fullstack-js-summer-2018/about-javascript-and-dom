describe('Variables, arguments, values, and references tests', () => {

  let n = 5;

  it('can reassign variable values', () => {
    n = 10;
    expect(n).toBe(10);
    expect(n).not.toBe(5);
  });
});