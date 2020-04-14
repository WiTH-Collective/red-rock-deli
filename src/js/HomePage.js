import React, { Suspense } from "react";
import { Helmet } from "react-helmet";

import Hero from "./components/Hero";
// import SecretSuppers from "./components/SecretSuppers";
// import MeetTheChefs from "./components/MeetTheChefs";
// import DiscoverTheRange from "./components/DiscoverTheRange";
// import WhereToBuy from "./components/WhereToBuy";
import ScrollReveal from "./utils/ScrollReveal";
import LoadingAnimation from "./utils/LoaderAnimation";

const HomePage = () => {
    const DiscoverTheRange = React.lazy(() =>
        import("./components/DiscoverTheRange")
    );
    const SecretSuppers = React.lazy(() =>
        import("./components/SecretSuppers")
    );
    const WhereToBuy = React.lazy(() => import("./components/WhereToBuy"));

    return (
        <ScrollReveal>
            <div className="page-wrapper home-page">
                <Hero />
                <Suspense fallback={<LoadingAnimation />}>
                    <DiscoverTheRange showCanvas={false} />
                </Suspense>
                <Suspense fallback={<LoadingAnimation />}>
                    <SecretSuppers />
                </Suspense>
                <Suspense fallback={<LoadingAnimation />}>
                    <WhereToBuy />
                </Suspense>

                <Helmet>
                    <title>Red Rock Deli© | Homepage</title>
                    <meta
                        name="description"
                        content="Red Rock Deli® offers gourmet, Deli-inspired potato crisps, dips, mixed nuts & tortilla chips. That's your snacking sorted. Find our products in store today."
                    />
                    <meta
                        name="keywords"
                        content="Red, Rock, Deli, Chips, Nuts, Feed your curiosity, curious chips and nuts"
                    />
                    <meta property="og:site_name" content="Red Rock Deli®" />
                    <meta name="og:title" content="Red Rock Deli© | Homepage" />
                    <meta
                        name="og:description"
                        content="Red Rock Deli® offers gourmet, Deli-inspired potato crisps, dips, mixed nuts & tortilla chips. That's your snacking sorted. Find our products in store today."
                    />
                    <meta
                        property="og:image"
                        content="https://red-rock-deli-2020.netlify.com/images/backgorund-secret-suppers.jpg"
                    />
                </Helmet>
            </div>
        </ScrollReveal>
    );
};

export default HomePage;
