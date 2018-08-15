/* eslint no-console: off */
const TextComponent = require('./TextComponent');

describe('DOM text tests', () => {
  it('takes an (optional) initial text value in its constructor(text)', () => {
    let question = new TextComponent('who are you?');
    expect(question.text).toBe('who are you?');
    console.log('$$$$$', question.text);
  }),

  it('returns a DOM TextNode from its render method that has its .data property set to the initial text value otherwise text', () => {
    let question = new TextComponent('who are you?');
    let textNode = question.render();
    expect(textNode.data).toBe('who are you?');
  }),

  it.skip('has an update(text) method that will update the text value of the node via .data)', () => {
    let question = new TextComponent('who are you?');
    let textNode = question.update('what your name?');
    expect(textNode).toBe('what your name?');
    console.log('&&&&&&&', textNode.data);
    // textNode.data = 'hey dummy';
    // expect(textNode.data).toBe('hey dummy');
    // console.log(textNode.data);
  });

  // it('calling render() a second time should return the same TextNode', () => {
 
  //  });

});