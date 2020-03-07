import React from "react";
import { Link } from "react-router-dom";

const ButtonPrimary = props => {
  let classes = "button-primary";
  if (props.isBlack) classes += " button-black";
  return (
    <Link to="/">
      <button className={classes}>
        {props.buttonText}
        <span />
      </button>
    </Link>
  );
};

export default ButtonPrimary;
