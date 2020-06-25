import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  renderQuotes = () => {
    return this.props.quotes.map( quote =>
      <QuoteCard 
        quote={quote}
        // upvote={this.handleUpvote}
        // downvote={this.handleDownvote}
        // delete={this.handleDelete}
        upvote={this.props.upvoteQuote.bind(null, quote.id)}
        downvote={this.props.downvoteQuote.bind(null, quote.id)}
        delete={this.props.removeQuote.bind(null, quote.id)}
      />
    )
  }

  // handleUpvote = () => this.props.upvoteQuote()

  // handleDownvote = () => console.log("DOWN")

  // handleDelete = () => console.log("BREAK")

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
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: (formData) => {
      dispatch(removeQuote(formData))
    }, 
    upvoteQuote: (formData) => {
      dispatch(upvoteQuote(formData))
    }, 
    downvoteQuote: (formData) => {
      dispatch(downvoteQuote(formData))
    }, 
  };
};

//add arguments to connect as needed
export default connect(state => { return {quotes: state.quotes} }, mapDispatchToProps)(Quotes);
