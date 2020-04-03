import React, { Suspense } from "react";
import { Helmet } from "react-helmet";

import Hero from "./components/Hero";
import SecretSuppers from "./components/SecretSuppers";
import MeetTheChefs from "./components/MeetTheChefs";
// import DiscoverTheRange from "./components/DiscoverTheRange";
import WhereToBuy from "./components/WhereToBuy";
import InstaFeed from "./components/InstaFeed";
import ScrollReveal from "./utils/ScrollReveal";

const HomePage = () => {
    const DiscoverTheRange = React.lazy(() =>
        import("./components/DiscoverTheRange")
    );

    return (
        <ScrollReveal>
            <div className="page-wrapper home-page">
                <Hero />

                <Suspense
                    fallback={
                        <div>
                            <h1>LOADING...</h1>
                        </div>
                    }
                >
                    <DiscoverTheRange showCanvas={false} />
                </Suspense>
                <SecretSuppers />
                <MeetTheChefs />
                <WhereToBuy />
                <InstaFeed />

                <Helmet>
                    <title>{"Red Rock Deli®"}</title>
                    <meta
                        name="description"
                        content={"Red Rock Deli® - Feed Your Curiosity™"}
                    />
                    <meta
                        name="keywords"
                        content={
                            "Red, Rock, Deli, Chips, Nuts, Feed your curiosity, curious chips and nuts"
                        }
                    />
                    <meta property="og:site_name" content={"Red Rock Deli®"} />
                    <meta name="og:title" content={"Red Rock Deli®"} />
                    <meta
                        name="og:description"
                        content={"Red Rock Deli® - Feed Your Curiosity™"}
                    />
                    <meta
                        property="og:image"
                        content={
                            "https://red-rock-deli-2020.netlify.com/images/backgorund-secret-suppers.jpg"
                        }
                    />
                </Helmet>
            </div>
        </ScrollReveal>
    );
};

export default HomePage;
