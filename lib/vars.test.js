describe('Variables, Arguments, Values, and References suite', () => {
  let number;
  let obj;
  beforeEach(() => {
    number = 1;
    obj = {
      name: 'a'
    };
  });

  it('reassigning variable holding number changes value of variable', () => {
    number = 2;
    expect(number).toEqual(2);
  });

  it('reassigning variable holding object changes value of variable', () => {
    obj = 'a';
    expect(obj).toBe('a');
  });

  it('')

});