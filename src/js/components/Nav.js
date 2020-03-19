import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Nav() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
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
                        <li>
                            <Link
                                className="logo"
                                to="/our-range"
                                onClick={hideHamburger}
                            >
                                OUR RANGE
                            </Link>
                        </li>
                        <li>
                            <div className="divider"></div>
                        </li>
                        <li>
                            <Link
                                className="logo"
                                to="/secter-suppers"
                                onClick={hideHamburger}
                            >
                                SECRET SUPPERS
                            </Link>
                        </li>
                        <li>
                            <div className="divider"></div>
                        </li>
                        <li>
                            <Link
                                className="logo"
                                to="/contact"
                                onClick={hideHamburger}
                            >
                                CONTACT
                            </Link>
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
