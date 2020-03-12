import React, { useState } from "react";

const FAQ = (props) => {
    const [isExpanded, toggleExpand] = useState(false);
    let classes;
    isExpanded ? classes = "expanded" : classes = "";
    return (
        <div className={'item ' + classes} onClick={() => { toggleExpand(!isExpanded) }}>
            <h3>{props.title}</h3>
            {isExpanded ?
                <p>{props.description}</p>
                : null}
        </div>
    )
}
export default FAQ;

