import marked from 'marked';
import mdToken from './markdown-token';

const indexOfNextArticle = (tokens) => {
  let nextAt = -1;
  tokens.some((token, idx) => {
    if (idx === 0) {
      return false;
    } // Skip the first, it's the heading.
    const nextHeading = tokens[idx].type === 'heading';
    if (nextHeading) {
      nextAt = idx;
      return true;
    }
    return false;
  });
  return nextAt;
};

const splitTokensByArticle = (tokens) => {
  const nextAt = indexOfNextArticle(tokens);
  const hasAnotherArticle = nextAt > -1;
  if (hasAnotherArticle) {
    return [tokens.slice(0, nextAt), ...splitTokensByArticle(tokens.slice(nextAt))];
  }
  return [tokens];
};

const isJustHeadlineAndOneList = (tokens) => {
  const listCount = tokens
    .filter(mdToken.isListStart)
    .length
  ;
  const hasOnlyOneList = listCount === 1;
  if (!hasOnlyOneList) {
    return false;
  }

  const secondTokenIsListStart = mdToken.isListStart(tokens[1]);
  const lastToken = tokens[tokens.length - 1];
  const lastTokenIsListEnd = mdToken.isListEnd(lastToken);
  const hasJustOneList = secondTokenIsListStart && lastTokenIsListEnd;
  if (hasJustOneList) {
    return true;
  }
  return false;
};

const theLastList = (tokens) => {
  const startIndexes = tokens
    .map((token, idx) => mdToken.isListStart(token) ? idx : null)
    .filter(item => item !== null)
  ;
  const lastListStartIndex = startIndexes[startIndexes.length - 1];
  const ts = tokens.slice(lastListStartIndex);
  return ts
    .map((item, idx) => mdToken.isListItemStart(ts[idx - 1]) ? item.text : null)
    .filter(text => text !== null)
  ;
};

const extractTags = (tokens) => {
  if (isJustHeadlineAndOneList(tokens)) {
    return [];
  }
  return theLastList(tokens);
};

const extractContents = (tokens) =>
  tokens
    .map((item, idx) =>
      mdToken.isBlockquoteStart(tokens[idx - 1]) ? { type: 'blockquote', text: item.text } :
        mdToken.isParagraph(tokens[idx]) ? { type: 'paragraph', text: item.text } :
          mdToken.isCode(tokens[idx]) ? { type: 'code', text: item.text } : null
    )
    .filter(item => item !== null)
    ;

const parseArticle = (tokens) =>
  ({
    headline: tokens[0].text,
    content: extractContents(tokens),
    tags: extractTags(tokens),
  });

const parseArticles = (tokenSets) =>
  tokenSets.map(parseArticle);

const parse = (md) => {
  const tokenSets = splitTokensByArticle(marked.lexer(md, { gfm: true }));
  return { articles: parseArticles(tokenSets) };
};

export { parse };
