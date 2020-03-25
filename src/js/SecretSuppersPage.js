import React from "react";
import { Helmet } from "react-helmet";
import { HeroStatic } from "./components/Hero";
import ScrollReveal from "./utils/ScrollReveal";
import SecretSuppers from "./components/SecretSuppers";

const SecretSuppersPage = () => {
    return (
        <ScrollReveal>
            <div className="page-wrappers chef-page">
                <HeroStatic
                    backgroundUrl={"/images/colin-fassnidge-hero.jpg"}
                    title={"Secret Suppers"}
                />
                <SecretSuppers />
                <section className="stone-wall-bakground">
                    <div className="scroll-prompt scroll-prompt-top  scroll-prompt-black " />
                    <div className="container">
                        <div className="content">
                            <h1>Secret Suppers</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </section>

                <Helmet>
                    <title>{"Red Rock Deli®"}</title>
                    <meta
                        name="description"
                        content={"Red Rock Deli® - Feed Your Curiosity™"}
                    />
                </Helmet>
            </div>
        </ScrollReveal>
    );
};

export default SecretSuppersPage;
