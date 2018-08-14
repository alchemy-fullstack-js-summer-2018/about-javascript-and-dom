/* eslint no-console: off */
describe('DOM text tests', () => {
  // it('takes an (optional) initial text value in its constructor(text)', () => {

  // }),

  // it('returns a DOM TextNode from its render method that has its .data property set to the initial text value (otherwise '')(text)', () => {

  // }),

  it('has an update(text) method that will update the text value of the node (via the .data property)', () => {
    const textNode = document.createTextNode('wazzup');
    textNode.data = 'hey dummy';
    expect(textNode.data).toBe('hey dummy');
    console.log(textNode.data);

  // }),

  // it('calling render() a second time should return the same TextNode', () => {
 
  });

});