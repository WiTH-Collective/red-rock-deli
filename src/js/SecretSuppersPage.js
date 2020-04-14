import React from "react";
import { Helmet } from "react-helmet";
import { HeroStatic } from "./components/Hero";
import ScrollReveal from "./utils/ScrollReveal";
import SecretSuppersCarousel from "./components/SecretSuppersCarousel";
import MeetTheChefs from "./components/MeetTheChefs";
import WideFooterImage from "./components/WideFooterImage";

const SecretSuppersPage = () => {
    return (
        <ScrollReveal>
            <div className="page-wrappers SecretSuppersPage">
                <HeroStatic
                    backgroundUrl={
                        "/images/secret-suppers/rrd-ss-hero-wide.jpg"
                    }
                    title={"Secret Suppers"}
                    h3="red rock deli secret suppers is back with 3 new chefs and 4 new secret locations!"
                    onSecretSupperPage
                />
                <SecretSuppersCarousel />

                <MeetTheChefs onSecretSuppersPage />
                <WideFooterImage imageUrl="/images/secret-suppers/rrd-ss-footer-wide.jpg" />
                <Helmet>
                    <title>Secret Suppers | Red Rock Deli©</title>
                    <meta
                        name="description"
                        content="An exclusive pop-up dining experience presented by Red Rock Deli. Take a seat at the table of some of the most inventive chefs for a unique experience. Read more."
                    />
                    {/* <meta
                        name="keywords"
                        content="Red, Rock, Deli, Chips, Nuts, Feed your curiosity, curious chips and nuts"
                    />
                    <meta property="og:site_name" content="Red Rock Deli®" />
                    <meta
                        name="og:title"
                        content="Secret Suppers | Red Rock Deli©"
                    />
                    <meta
                        name="og:description"
                        content="An exclusive pop-up dining experience presented by Red Rock Deli. Take a seat at the table of some of the most inventive chefs for a unique experience. Read more."
                    />
                    <meta
                        property="og:image"
                        content="https://red-rock-deli-2020.netlify.com/images/backgorund-secret-suppers.jpg"
                    /> */}
                </Helmet>
            </div>
        </ScrollReveal>
    );
};

export default SecretSuppersPage;
