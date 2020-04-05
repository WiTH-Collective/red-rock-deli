import React from "react";
import secretSuppersHero from "../../img/backgrounds/backgorund-secret-suppers.jpg";
import secretSuppersLockup from "../../img/lockups/secret-suppers-lockup--white.png";
import EmailRegistration from "./EmailRegistrationForm";
import Instagram from "./InstagramStatic";

const SecretSuppers = () => {
    return (
        <section className="SecretSuppers sr-item">
            <div className="scroll-prompt scroll-prompt-top" />
            <div className="container intro">
                <div className="content">
                    <img
                        className="lockup"
                        src={secretSuppersLockup}
                        alt="Red Rock Deli, Secret Suppers"
                    />

                    <div className="copy">
                        <h3>SECRET DINING EXPERIENCES</h3>
                        <p>
                            A series of dining experiences hosted by some of
                            Australia's most loved chefs with specially crafted
                            menus inspired by Red Rock Deli's unique flavour
                            combinations.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container black-background">
                <div className="content">
                    <div className="image-holder content-cover">
                        <img
                            src={secretSuppersHero}
                            alt="Red Rock Deli, Secret Suppers"
                        />
                    </div>

                    <div className="copy">
                        <h2>Secret suppers 2020 is coming soon!</h2>
                        <p>
                            Are you interested in being part of our next edition
                            of Secret Suppers? We will keep you in the loop
                            about the new date, exclusive chefs and ticket
                            releases. Drop your email below to stay in the loop
                            about what’s coming up.
                        </p>

                        <EmailRegistration />
                    </div>
                </div>
            </div>
            <Instagram />
        </section>
    );
};

export default SecretSuppers;
