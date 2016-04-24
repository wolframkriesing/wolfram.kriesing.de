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

const isListStart = ({ type }) =>
  type === types.LIST_START;

const isListItemStart = (token) =>
  tokenHasType(token) && token.type === types.LIST_ITEM_START;

const isBlockquoteStart = (token) =>
  tokenHasType(token) && token.type === types.BLOCK_QUOTE_START;

const isParagraph = token =>
  tokenHasType(token) && token.type === types.PARAGRAPH;

const isCode = token =>
  tokenHasType(token) && token.type === types.CODE;


const mdToken = {
  types,
  isBlockquoteStart,
  isParagraph,
  isCode,
  isListStart,
  isListItemStart,
};

export default mdToken;
