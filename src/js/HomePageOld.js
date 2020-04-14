import React, { Suspense } from "react";
import { Helmet } from "react-helmet";

import Hero from "./components/Hero";
// import SecretSuppers from "./components/SecretSuppers";
// import MeetTheChefs from "./components/MeetTheChefs";
// import DiscoverTheRange from "./components/DiscoverTheRange";
// import WhereToBuy from "./components/WhereToBuy";
// import InstaFeed from "./components/InstaFeed";
import ScrollReveal from "./utils/ScrollReveal";
import LoadingAnimation from "./utils/LoaderAnimation";

const HomePage = () => {
    const DiscoverTheRange = React.lazy(() =>
        import("./components/DiscoverTheRange")
    );
    const SecretSuppers = React.lazy(() =>
        import("./components/SecretSuppers")
    );
    const MeetTheChefs = React.lazy(() => import("./components/MeetTheChefs"));
    const WhereToBuy = React.lazy(() => import("./components/WhereToBuy"));
    // const InstaFeed = React.lazy(() => import("./components/InstaFeed"));

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
                    <MeetTheChefs />
                </Suspense>
                <Suspense fallback={<LoadingAnimation />}>
                    <WhereToBuy />
                </Suspense>
                <Suspense fallback={<LoadingAnimation />}>
                    {/* <InstaFeed /> */}
                </Suspense>
            </div>
        </ScrollReveal>
    );
};

export default HomePage;
