export default (state = [], quote) => { 

  let {type, quoteId} = quote 
  switch(type){
    case 'ADD_QUOTE': 
      debugger
    return state.concat(Object.assign({}, quote.quote)); 
    case 'UPVOTE_QUOTE': 
    
    // need to make a clone of state modify it and return the clone state for redux to work propertly
    return state.filter(ele => ele.id === quoteId)[0].votes ++ ; 
    
    case 'DOWNVOTE_QUOTE': 
      state.filter(ele => ele.id === quoteId)[0].votes === 0 ? null : 
      state.filter(ele => ele.id === quoteId)[0].votes--; 
      return state; 
    case 'REMOVE_QUOTE':   
    debugger 
    //index of wanted quote
      let x = state.findIndex(e => e === state.filter(q => q.id === quoteId)[0])  
      state.splice(x, 1) 
      return state   
     

    default: 
    return state; 
  } 

  

}
 

// 7) should handle REMOVE_QUOTE
// 8) should handle UPVOTE_QUOTE