import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {addQuote, upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes'
class Quotes extends Component { 
  // updateState = (state) =>{ 
    
  //   this.setState({ quotes: [...state] })
  // }  

  removeQuote = e =>{
    e.preventDefault 
    debugger 
    let { removeQuote } = this.props
    let { id } = e.target
    let { quotes } = this.props
    debugger
    removeQuote(id);
    // this.updateState(quotes)
  }
  downVote = e =>{
    e.preventDefault(); 
    let { downvoteQuote } = this.props
    let { id } = e.target
    let { quotes } = this.props   
    debugger
    quotes.quotes.filter(ele => ele.id === id)[0].votes ? quotes.quotes.filter(e => e.id === id)[0] : quotes.quotes.filter(e => e.id === id)[0].votes = 0  
    debugger 
    downvoteQuote(id); 
    // this.updateState(quotes)
  }
  // upvoteQuote=(e)=>{
  //   e.preventDefault  
  //   let {upvoteQuote} = this.props  
  //   let {id} =  
  //   let {quotes} = this.props   
  //   debugger
  //   quotes.quotes.filter(ele => ele.id === id)[0].votes ? quotes.quotes.filter(e=>e.id ===id)[0] : quotes.quotes.filter(e=>e.id ===id)[0].votes =  0  
    
  //   //.votes ? 0 : quotes.filter(ele => ele.id === id)[0].votes = 0; 
    
  //   upvoteQuote(id) 
    
  //   // this.updateState(quotes.quotes)
  // }

  makeQuoteCards =()=>{ 
    
    return this.props.quotes.quotes.map(quote=> <QuoteCard quote={quote} upvoteQuote={this.props.upvoteQuote} 
    downVote={this.downVote} removeQuote={this.removeQuote}
    />)
  }
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4"> 
            {this.makeQuoteCards()}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps =(state)=>{ 
  
  return {quotes: state}
} 
const mapDispatchToProps =(dispatch)=>{
  return{ 
    upvoteQuote: (quote) => dispatch(upvoteQuote(quote)), 
    downvoteQuote: quote => dispatch(downvoteQuote(quote)), 
    removeQuote: quote => dispatch(removeQuote(quote)),

  }
}
//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
