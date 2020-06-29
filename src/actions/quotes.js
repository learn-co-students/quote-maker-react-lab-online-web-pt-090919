export function addQuote(quote){ 
        debugger
    return {type: 'ADD_QUOTE', quote}
} 

export function upvoteQuote(quote){ 
    debugger
   
    return {type: 'UPVOTE_QUOTE', quoteId: quote}
} 

export function downvoteQuote(quote){  
    debugger
    return {type: 'DOWNVOTE_QUOTE', quoteId: quote}

} 

export function removeQuote(quote){ 
    debugger
    return {type: 'REMOVE_QUOTE', quoteId: quote}

}
