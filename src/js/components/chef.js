import React from "react";
import { Link } from "react-router-dom";

const Chef = props => {
  return (
    <Link
      className="Chef"
      to={"/"}
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    >
      <div className="chefName">
        <span className="chevron" />
        <h3>{props.chefName}</h3>
      </div>
    </Link>
  );
};

export default Chef;
