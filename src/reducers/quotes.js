import uuid from 'uuid';
 
const id = uuid();

export default function quotes(state = [], action) {

  switch(action.type) {

    case 'ADD_QUOTE':
      
      let newState = state.concat({ 
        id: id,
        content: action.quote.content,
        author: action.quote.author
      });
      console.log(newState)
      return newState

    case 'REMOVE_QUOTE':
      console.log("REMOVE")
      return null

    case 'UPVOTE_QUOTE':
      console.log("UPVOTE")
      return null

    case 'DOWNVOTE_QUOTE':
      console.log("DOWNVOTE")
      return null

    default:
      return state
  }

}

