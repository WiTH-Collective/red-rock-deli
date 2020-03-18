import React from "react";
import { Helmet } from "react-helmet";
import { HeroStatic } from "./components/Hero";
import { BlackBlockTitle } from "./components/BlackBlockTitle";

const EventPageSydney = () => {
    return (
        <div className="page-wrappers event-page">
            <HeroStatic
                backgroundUrl={"/images/secret-suppers-shhh-hero.jpg"}
                title={"Earthly Delights"}
            />
            <BlackBlockTitle
                heading="September 21, 2020"
                subHeading="Secret location in Sydney"
            />
            <section className="stone-wall-bakground">
                <div className="scroll-prompt scroll-prompt-top  scroll-prompt-black " />
                <div className="container">
                    <div className="content">
                        <h1>...</h1>
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
    );
};

export default EventPageSydney;
