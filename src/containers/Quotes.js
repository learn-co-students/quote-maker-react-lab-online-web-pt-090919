import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {addQuote, upVote} from '../actions/quotes'
class Quotes extends Component { 

  upVote=(e)=>{
    e.preventDefault  
    let {upVote} = this.props  
    let {id} = e.target 
    let {quotes} = this.props   
    debugger
    quotes.quotes.filter(ele => ele.id === id)[0].votes ? quotes.quotes.filter(e=>e.id ===id)[0] : quotes.quotes.filter(e=>e.id ===id)[0].votes =  0  
    debugger
    //.votes ? 0 : quotes.filter(ele => ele.id === id)[0].votes = 0; 
    debugger
    upVote(id)
    debugger
  }

  makeQuoteCards =()=>{ 
    
    return this.props.quotes.quotes.map(quote=> <QuoteCard quote={quote} upVote={this.upVote}/>)
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
    upVote: (quote) => dispatch(upVote(quote))

  }
}
//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
