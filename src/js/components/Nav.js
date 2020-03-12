import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logos/rrd-logo-01.svg";


function Nav() {

  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

  let navClass = null;
  if (isToggled) {
    navClass = "isActive"
  }

  return (
    <div className={"Nav " + navClass}>
      <div className="container">

        <nav>
          <ul>
            <li>
              <Link className="logo" to="/our-range">
                OUR RANGE
                </Link>
            </li>
            <li><div className="divider"></div></li>
            <li>
              <Link className="logo" to="/secter-suppers">
                SECRET SUPPERS
                </Link>
            </li>
            <li><div className="divider"></div></li>
            <li>
              <Link className="logo" to="/contact">
                CONTACT
                </Link>
            </li>
          </ul>
        </nav>

        <div className="hamburger" onClick={toggleTrueFalse}></div>

        <div className="logo-container">
          <Link className="logo" to="/">
            <img src={Logo} alt="Red Rock Deli" />
          </Link>
        </div>
      </div>
    </div>
  );

}

export default Nav;
