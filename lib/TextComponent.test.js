/* eslint no-console: off */
const TextComponent = require('./TextComponent');

describe('DOM text tests', () => {

  it('defaults to empty string', () => {
    const question = new TextComponent();
    expect(question.text).toBe('');
  });

  it('takes initial text value in its constructor(text)', () => {
    let question = new TextComponent('who are you?');
    expect(question.text).toBe('who are you?');
  }),

  it('returns a DOM TextNode from its render method that has its .data property set to the initial text value otherwise text', () => {
    let question = new TextComponent('who are you?');
    let textNode = question.render();
    expect(textNode.data).toBe('who are you?');
  }),

  it('has an update(text) method that will update the text value of the node)', () => {
    let question = new TextComponent('hey');
    let textNode = document.createTextNode('hey');
    let notherNode = document.createTextNode('hey hey');

    expect(question.render()).toEqual(textNode);
    question.update('hey hey');
    expect(question.text).toEqual('hey hey');
    expect(question.render()).toEqual(notherNode);
  });
});