import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Nav() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    const showContact = () => {
        hideHamburger();
        window.scrollTo(
            0,
            document.getElementById("contact").offsetTop -
                document.body.scrollTop
        );
    };
    const hideHamburger = () => {
        console.log("toggling");
        setToggled(false);
    };
    let navClass = null;
    if (isToggled) {
        navClass = "isActive";
    }

    return (
        <div className={"Nav " + navClass}>
            <div className="container">
                <nav>
                    <ul>
                        <li className="our-range-dropdown">
                            <Link to="/our-range/" onClick={hideHamburger}>
                                OUR RANGE
                            </Link>
                            {/* <div className="dropdown our-range-nav">
                                <Link to="/our-range/potato-chips/">
                                    Potato Chips
                                </Link>
                                <Link to="/our-range/tortilla-chips/">
                                    Tortilla Chips
                                </Link>
                                <Link to="/our-range/deluxe-crisps/">
                                    Deluxe Crisps
                                </Link>
                                <Link to="/our-range/dips/">Dips</Link>
                                <Link to="/our-range/limited-edition/">
                                    Limited Edition
                                </Link>
                                <Link to="/our-range/nuts/">Nuts</Link>
                            </div> */}
                        </li>
                        <li>
                            <div className="divider"></div>
                        </li>
                        {/* <li>
                            <Link to="/secret-suppers/" onClick={hideHamburger}>
                                SECRET SUPPERS
                            </Link>
                        </li> 
                        <li>
                            <div className="divider"></div>
                        </li> */}
                        <li>
                            <div className="a" onClick={showContact}>
                                CONTACT
                            </div>
                        </li>
                    </ul>
                </nav>

                <div className="hamburger" onClick={toggleTrueFalse}></div>

                <Logo onClickFunction={hideHamburger} />
            </div>
        </div>
    );
}

export default Nav;
