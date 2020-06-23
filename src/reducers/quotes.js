export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      // can't do this because id !== index
      // return [...state.slice(0, action.quoteId), ...state.slice(action.quoteId + 1)];
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];

      return [...state.slice(0, index), { ...quote, votes: quote.votes += 1 }, ...state.slice(index + 1)];

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      // do nothing if vote count is 0
      if (quote.votes > 0) {
        return [...state.slice(0, index), { ...quote, votes: quote.votes -= 1 }, ...state.slice(index + 1)]
      }

    default:
      return state;
  }
}
