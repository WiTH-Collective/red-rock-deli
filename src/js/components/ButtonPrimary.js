import React from "react";
import { Link } from "react-router-dom";

const ButtonPrimary = props => {
    let classes = "button-primary";
    if (props.isBlack) classes += " button-black";
    return (
        <Link to={props.linkTo ? props.linkTo : ""} className={classes}>
            <button>
                {props.children}
                {!props.hideChevron ? <span /> : null}
            </button>
        </Link>
    );
};

export const ButtonSubmit = props => {
    return (
        <div className="button-primary">
            <button>
                {props.children}
                {!props.hideChevron ? <span /> : null}
            </button>
        </div>
    );
};

export default ButtonPrimary;
