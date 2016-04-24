import marked from 'marked';

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
    return [tokens.slice(0, nextAt), ...splitTokensByArticle(tokens.slice(nextAt))]
  }
  return [tokens];
};

const extractTags = (tokens) => {
  const hasTokenType = (token) =>
    token && 'type' in token;
  const isListItemStart = (token) =>
    hasTokenType(token) && token.type === 'list_item_start';
  return tokens
    .map((item, idx) => isListItemStart(tokens[idx - 1]) ? item.text : null)
    .filter(item => item !== null)
    ;
};

const extractContents = (tokens) => {
  const hasTokenType = (token) =>
    token && 'type' in token;
  const isBlockquoteStart = (token) =>
    hasTokenType(token) && token.type === 'blockquote_start';
  const isParagraph = token => hasTokenType(token) && token.type === 'paragraph';
  const isCode = token => hasTokenType(token) && token.type === 'code';
  return tokens
    .map((item, idx) =>
      isBlockquoteStart(tokens[idx - 1]) ? { type: 'blockquote', text: item.text } :
        isParagraph(tokens[idx]) ? { type: 'paragraph', text: item.text } :
          isCode(tokens[idx]) ? { type: 'code', text: item.text } : null
    )
    .filter(item => item !== null)
    ;
};

const parseArticle = (tokens) =>
  ({
    headline: tokens[0].text,
    content: extractContents(tokens),
    tags: extractTags(tokens)
  });

const parseArticles = (tokenSets) =>
  tokenSets.map(parseArticle);

const parse = (md) => {
  const tokenSets = splitTokensByArticle(marked.lexer(md, { gfm: true }));
  return { articles: parseArticles(tokenSets) };
};

export { parse };
