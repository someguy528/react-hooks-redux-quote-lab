import React from "react";
import { useDispatch } from "react-redux";
import { upvoteQuote, downvoteQuote } from "./quotesSlice";

function QuoteCard({quote}) {
  const dispatch = useDispatch()
  function handleUpvoteClick(){
    dispatch(upvoteQuote(quote.id))
  }
  function handleDownvoteClick(){
    dispatch(downvoteQuote(quote.id))
  }
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{/*Render Quote Content*/}{quote.content}</p>
            <footer>
              - author{" "}{quote.author}
              <cite title="Source Title">{/*Render Quote Author*/}{quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button onClick={handleUpvoteClick} type="button" className="btn btn-primary">
              Upvote
            </button>
            <button onClick={handleDownvoteClick} type="button" className="btn btn-secondary">
              Downvote
            </button>
            <button type="button" className="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {/*Render Quote Votes*/}{quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
