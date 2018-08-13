describe('Variables, arguments, values, and references tests', () => {

  let n, o, v;
  beforeEach(() => {
    n = 5;
    o = {
      value: 'who dat boi'
    };
    v = o.value;

  });

  function add2(number) {
    return number + 2;
  }

  function addProp(obj) {
    obj.prop = 'added this prop';
    return obj;
  }

  function changeValue(obj) {
    obj.value = 'VERSACE VERSACE';
    return obj;
  }

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
    o.value = 'what up doe';
    expect(v).toEqual('who dat boi');
  });

  it('will not let functions change original values', () => {
    let newN = add2(n);
    expect(newN).toBe(7);
    expect(n).toBe(5);
  });

  it('will add new properties onto the original object', () => {
    let newObj = addProp(o);
    expect(newObj.prop).toBeTruthy();
    expect(o.prop).toBeTruthy();
  });

  it.skip('will not alter original object values', () => {
    let newV = changeValue(o);
    expect(newV.value).toBe('VERSACE VERSACE');
    expect(o.value).toBe('who dat boi');
  });
});