import React from "react";

const BlackBlockTitle = props => {
    return (
        <div class="black-block">
            {props.heading ? <h3>{props.heading}</h3> : null}
            {props.subHeading ? <p>{props.subHeading}</p> : null}
        </div>
    );
};

export default BlackBlockTitle;
