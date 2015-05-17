import assert from 'assert';
import marked from 'marked';

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
          {type: 'paragraph', text: 'paragraph 1'},
          {type: 'blockquote', text: 'quote\nquote\nquote'},
          {type: 'paragraph', text: 'paragraph 2'}
        ]
      };
      assert.deepEqual(parsed.articles[0], expected);
    });
  });
});


function parse(md) {
  const tokens = marked.lexer(md, {gfm: true});
  const headline = tokens[0].text;
  return {
    articles: [
      {
        headline: headline,
        content: extractContents(tokens),
        tags: extractTags(tokens)
      }
    ]
  };
}

function extractTags(tokens) {
  const hasTokenType = token => token && 'type' in token;
  const isListItemStart = token => hasTokenType(token) && token.type == 'list_item_start';
  return tokens
    .map((item, idx) => isListItemStart(tokens[idx-1]) ? item.text : null)
    .filter(item => item !== null)
  ;
}

function extractContents(tokens) {
  const hasTokenType = token => token && 'type' in token;
  const isBlockquoteStart = token => hasTokenType(token) && token.type == 'blockquote_start';
  const isParagraph = token => hasTokenType(token) && token.type == 'paragraph';
  const isCode = token => hasTokenType(token) && token.type == 'code';
  return tokens
    .map((item, idx) => 
      isBlockquoteStart(tokens[idx-1]) ? {type: 'blockquote', text: item.text} : 
      isParagraph(tokens[idx]) ? {type: 'paragraph', text: item.text} :
      isCode(tokens[idx]) ? {type: 'code', text: item.text} : null
    )
    .filter(item => item !== null)
  ;
}