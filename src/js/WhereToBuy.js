import React from "react";

import logo1 from "../img/logos/logo-iga-white.png";
import logo2 from "../img/logos/logo-woolworths-white.png";
import logo3 from "../img/logos/logo-coles-white.png";

import { Link } from "react-router-dom";

const WhereToBuy = props => {
  return (
    <section className="WhereToBuy">
      <div className="container2">
        <div className="content">
          <h2>Available To Buy</h2>
          <p>
            Our products are available for purchase at most leading supermarket retailers and many more. Check our your local
            supermarket for our products.
          </p>
        </div>
        <div className="stores">
          <Store logoUrl={logo1} alt="IGA" storeURL="https://www.iga.com.au" />
          <Store logoUrl={logo2} alt="Woolwoths" storeURL="https://www.woolworths.com.au" />
          <Store logoUrl={logo3} alt="Coles" storeURL="https://www.coles.com.au" />
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;

const Store = props => {
  return (
    <Link className="store" to={props.storeUrl}>
      <img src={props.logoUrl} alt={props.alt} />
    </Link>
  );
};
