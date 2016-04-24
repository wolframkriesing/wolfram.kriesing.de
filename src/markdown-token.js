const types = {
  LIST_START: 'list_start',
  LIST_END: 'list_end',
  LIST_ITEM_START: 'list_item_start',
  BLOCK_QUOTE_START: 'blockquote_start',
  PARAGRAPH: 'paragraph',
  CODE: 'code',
};

const tokenHasType = (token) =>
  token && 'type' in token;

const isTokenOfType = (token, type) =>
  tokenHasType(token) && token.type === type;

const isListStart = (token) =>
  isTokenOfType(token, types.LIST_START);

const isListEnd = (token) =>
  isTokenOfType(token, types.LIST_END);

const isListItemStart = (token) =>
  isTokenOfType(token, types.LIST_ITEM_START);

const isBlockquoteStart = (token) =>
  isTokenOfType(token, types.BLOCK_QUOTE_START);

const isParagraph = token =>
  isTokenOfType(token, types.PARAGRAPH);

const isCode = token =>
  isTokenOfType(token, types.CODE);

const mdToken = {
  types,
  isBlockquoteStart,
  isParagraph,
  isCode,
  isListStart,
  isListEnd,
  isListItemStart,
};

export default mdToken;
