import assert from 'assert';
import { parse } from './markdown-converter.js';

describe('markdown document parsing', function() {
  describe('containing one article', function() {
    const md = `
# headline

> quote

paragraph

    code

* tag1
* tag2
    `;

    let parsed;
    beforeEach(function() {
      parsed = parse(md);
    });

    it('finds 1 article', () => {assert.equal(parsed.articles.length, 1);});

    describe('the article has', function() {
      let article;
      beforeEach(function() {
        article = parsed.articles[0];
      });
      it('correct headline', () => {assert.equal(article.headline, 'headline');});
      it('two tags', () => {assert.deepEqual(article.tags, ['tag1', 'tag2']);});

      describe('the content has', function() {
        let content;
        beforeEach(function() {
          content = article.content;
        });
        it('3 items', () => {assert.equal(content.length, 3);});

        it('first a quote', () => {assert.equal(content[0].type, 'blockquote');});
        it('the right quote text', () => {assert.equal(content[0].text, 'quote');});

        it('second a paragraph', () => {assert.equal(content[1].type, 'paragraph');});
        it('pure paragraph', () => {assert.equal(content[1].text, 'paragraph');});

        it('third a code snippet', () => {assert.equal(content[2].type, 'code');});
        it('code content', () => {assert.equal(content[2].text, 'code');});
      });
    });
  });

  describe('differently structured article', function() {
    const md = `
# headline

paragraph 1

> quote
> quote
> quote

paragraph 2

* tags
    `;

    let parsed;
    beforeEach(function() {
      parsed = parse(md);
    });
    it('works', function() {
      const expected = {
        headline: 'headline',
        tags: ['tags'],
        content: [
          { type: 'paragraph', text: 'paragraph 1' },
          { type: 'blockquote', text: 'quote\nquote\nquote' },
          { type: 'paragraph', text: 'paragraph 2' }
        ]
      };
      assert.deepEqual(parsed.articles[0], expected);
    });
  });

  describe('multiple articles', function() {
    it('has two articles', function() {
      const md = `
# headline 1
paragraph 1
# headline 2
paragraph 2
      `;
      assert.deepEqual(parse(md).articles.length, 2);
    });
    describe('three articles', function() {
      const md = `
# headline 1
paragraph 1
# headline 2
paragraph 2
> quoted
# headline 3
paragraph 3
      `;
      it('has three articles',
        () => {assert.deepEqual(parse(md).articles.length, 3); });
      it('second has two contents',
        () => {assert.deepEqual(parse(md).articles[1].content.length, 2); });
      it('second article, content[1]=blockquote',
        () => {assert.deepEqual(parse(md).articles[1].content[1].type, 'blockquote'); });
    });
  });

  describe('article only with a list', () => {
    const md = `
# headline 1
* some tags
* as content
    `;
    it('has two tags', () => {
      assert.equal(parse(md).articles[0].tags.length, 0);
    });
  });
});
