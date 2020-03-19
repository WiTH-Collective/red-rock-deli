import React from "react";
import { Helmet } from "react-helmet";
// import { HeroStatic } from "./components/Hero";
import ScrollReveal from "./utils/ScrollReveal";
import DiscoverTheRange from "./components/DiscoverTheRange";

const OurRange = () => {
    return (
        <ScrollReveal>
            <div className="page-wrappers chef-page">
                <DiscoverTheRange hideButton={true} />

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

export default OurRange;
