export default (state = [], action) => { 

  let {type, action: quote, quoteId} = action 
  switch(type){
    case 'ADD_QUOTE': 
    
    return state.concat(Object.assign({}, quote)); 
    case 'UP_VOTE':  
    debugger 
    return state.concat(Object.assign({}, { votes: state.filter(ele => ele.id === quoteId)[0].votes ++ })); 

    default: 
    return state; 
  } 

  return state; 

}
