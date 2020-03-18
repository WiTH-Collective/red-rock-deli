import React from "react";

export const BlackBlockTitle = props => {
    return (
        <div class="black-block">
            {props.heading ? <h3>{props.heading}</h3> : null}
            {props.subHeading ? <p>{props.subHeading}</p> : null}
        </div>
    );
};
