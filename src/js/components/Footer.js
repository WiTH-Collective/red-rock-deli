import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logos/rrd-logo-01.svg";

function Footer() {


    return (
        <section className="Footer">
            <div className="container2">
                <div className="top">
                    <div className="left">
                        <img className="logo" src={Logo} alt="Red Rock Deli™" />
                        <div className="lockup"></div>
                    </div>
                    <div className="right">
                        <Link className="facebook" to="/facebook" />
                        <Link className="instagram" to="/instagram" />
                    </div>
                </div>
                <div className="middle">
                    <div className="left">
                        <h3>WANT TO GET IN CONTACT?</h3>
                        <div>
                            <div className="item">
                                <div className="icon">
                                    <span className="location" />
                                </div>
                                <div className="description">
                                    <p>The Red Rock Deli Chip Company<br />
                                    553-567 South Road,<br />
                                    Regency Park, SA, 5010, Australia</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <span className="phone" />
                                </div>
                                <div className="description">
                                    <p>1800 500 502</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <span className="email" />
                                </div>
                                <div className="description">
                                    <p>info@redrockdeli.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h3>HAVE AN ENQUIRY?</h3>
                        <p className="hide-mobile">What would you like to enquire about?</p>
                        <div>
                            <button>Select enquiry option</button>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <Link to="/faq">FAQs</Link>|
                        <Link to="/privacy-policy">Privacy Policy</Link>|
                        <Link to="/terms-of-use">Terms of Use</Link>
                    </div>
                    <div className="right">
                        <p>&copy;Red Rock Deli™ 2020</p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Footer;
