
describe('Variables, Arguments, Values, References', () => {

  it('changes the value of a reassigned variable', () => {
    var x = 3;
    x = 6;
    expect(x).toBe(6);
  });

  it('changes the value of a variable holding an object when reassigned', () => {
    var hiker = {
      trailName: 'Cairn Killer'
    };
    hiker.trailName = 'Hawkeye';
    expect(hiker.trailName).toEqual('Hawkeye');
  });

  it('does not change the value of a variable if changing the property of the object it holds', () => {
    var pack = {
      style: 'frameless',
      hipbelt: false
    };
    let palente = pack.hipbelt;
    palente.hipbelt = true;

    expect(pack.hipbelt).toEqual(false);
  });

  it('does not alter original variable when argument holds a number and gets reassigned', () => {

  });

  it('does not alter original variable when argument holds an object that gets reassigned', () => {

  });

  it('alters the original object when assigning a property to the object inside the original function parameter', () => {

  });


});