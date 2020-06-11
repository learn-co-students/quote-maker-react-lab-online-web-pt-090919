import React from 'react';
import uuid from 'uuid';

export default function quotes (state = [], action) => {
  const id = uuid()
  let idx;
  switch(action.type){
    case 'ADD_QUOTE':
      return {...state, content: state.content, author: state.author, id: id}
    case 'REMOVE_QUOTE':
     idx = state.findIndex(quote => quote.id === action.id)
     return [...state.slice(0, idx), ...state.slice(idx + 1)]
    case 'UPVOTE_QUOTE':
      return {}
  }
  default:
  return state;
}
