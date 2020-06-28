export function addQuote(action){ 
        debugger
    return {type: 'ADD_QUOTE', action}
} 

export function upVote(quote){ 
    debugger
   
    return {type: 'UP_VOTE', quoteId: quote}
}
