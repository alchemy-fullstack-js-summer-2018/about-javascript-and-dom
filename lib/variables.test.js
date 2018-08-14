let x = 5;

describe('Variables, arguments, values, and references', () => {
  it('reassigns the value of a variable', () => {
    x = 10;
    expect(x).toBe(10);
  });
});