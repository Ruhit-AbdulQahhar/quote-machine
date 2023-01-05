import React from "react";
import Button from "./Button";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteMachine = (props) => (
  <p id="text">
    {props.selectedQuote.quote} -{" "}
    <span id="author">{props.selectedQuote.author}</span>
    <Button buttonName="Next Quote" clickHandler={props.assignNewQuoteIndex} />
    <IconButton
      id="tweet-quote"
      target="_blank"
      href={`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}&hastags=MrLegend246`}
    >
      <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
    </IconButton>
  </p>
);

export default QuoteMachine;
