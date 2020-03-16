import React from "react";
import { Link } from "react-router-dom";

const ButtonPrimary = props => {
  let classes = "button-primary";
  if (props.isBlack) classes += " button-black";
  return (
    <Link to="/" className={classes}>
      <button>
        {props.buttonText}
        {!props.hideChevron ? <span /> : null}
      </button>
    </Link>
  );
};

export default ButtonPrimary;
