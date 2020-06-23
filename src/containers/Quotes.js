import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard.js';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  // renderQuotes = () => this.props.quotes.map((quote) => <QuoteCard quote={quote} />)

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props

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
              {/*
                    TODO:
                    Render Quotes With QuoteCard component
                    and pass down callback props for removing, upvoting and downvoting quotes
                  */}
              {quotes.map(quote => <QuoteCard key={quote.id} quote={quote} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MapStateToProps = state => {
  // console.log(state)
  return {
    quotes: state.quotes
  }
}

//add arguments to connect as needed
export default connect(MapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
