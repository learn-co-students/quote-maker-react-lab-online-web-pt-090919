export default (state = [], quote) => { 

  let {type, quoteId} = quote 
  switch(type){
    case 'ADD_QUOTE': 
      debugger
    return state.concat(Object.assign({}, quote.quote)); 
    case 'UPVOTE_QUOTE':  
    debugger
    state.filter(ele => ele.id === quoteId)[0].votes ++ ; 
    return [...state]
    case 'DOWNVOTE_QUOTE':  
    debugger 
      let stateClone2 = state
      stateClone2.filter(ele => ele.id === quoteId)[0].votes === 0 ? null : 
      stateClone2.filter(ele => ele.id === quoteId)[0].votes--; 
      return stateClone2; 
    case 'REMOVE_QUOTE':   
    debugger 
      let stateClone = state
      let x = stateClone.findIndex(e => e === stateClone.filter(q => q.id === quoteId)[0])  
      stateClone.splice(x, 1) 
      return [...stateClone]   
     

    default: 
    return state; 
  } 

  

}
 

// 7) should handle REMOVE_QUOTE
// 8) should handle UPVOTE_QUOTE