import React from "react";

const Button = ({ buttonName, clickHandler }) => (
  <button id="new-quote" onClick={clickHandler}>
    {buttonName}
  </button>
);

export default Button;
