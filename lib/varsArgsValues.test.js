describe('Variables, arguments, values, and references tests', () => {

  let n = 5;
  let o = {
    value: 'who dat boi'
  };

  it('can reassign variable values', () => {
    n = 10;
    expect(n).toBe(10);
    expect(n).not.toBe(5);
  });

  it('can reassign variables holding objects', () => {
    expect(o.value).toEqual('who dat boi');
    o = null;
    expect(o).toBeFalsy();
    o = {
      value: 'ayyy lmao'
    };
    expect(o).toBeTruthy();
    expect(o.value).toEqual('ayyy lmao');
  });
});