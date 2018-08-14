describe('Test Variables, Arguments, Values, and References', () => {

  
  it('changes value of variable when reassigned with a new one', () => {
    var x = 11;
    expect(x).toBe(11);
    x = 22;
    expect(x).toBe(22);
  });

  it('changes value of variable that holds an object when reassigned with a new one', () => {
    var flower = {
      name: 'Bird of Paradise'
    };
    expect(flower).toEqual({ name: 'Bird of Paradise' });
    flower = { name: 'Daffodil' } ;
    expect(flower).not.toEqual({ name: 'Bird of Paradise' });  
  });

  // it('does not change value of variable that holds an object when property is assigned a value', () => {
  //   var flower = {
  //     name: 'Bird of Paradise'
  //   };
  //   expect(flower).toEqual({ name: 'Bird of Paradise' });
  //   flower.name = 'Daffodil';
  //   expect(flower).toEqual({ name: 'Bird of Paradise' });
  // });
});  