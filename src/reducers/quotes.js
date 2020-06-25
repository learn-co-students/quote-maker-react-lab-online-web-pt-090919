// import uuid from 'uuid';
 
// const id = uuid();

export default function quotes(state = [], action) {

  switch(action.type) {

    case 'ADD_QUOTE':
      let addState = state.concat(action.quote);
      return addState;

    case 'REMOVE_QUOTE':
      let remState = state.filter(quote => quote.id != action.quoteId);
      return remState;

    case 'UPVOTE_QUOTE':
      let upState = state.find(quote => quote.id === action.quoteId);
      upState.votes += 1
      return [...state]

    case 'DOWNVOTE_QUOTE':
      let downState = state.find(quote => quote.id === action.quoteId);
      if (downState.votes > 0) {downState.votes -= 1}
      return [...state]

    default:
      return state
  }

}

