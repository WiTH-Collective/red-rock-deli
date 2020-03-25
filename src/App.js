import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/App.scss";
import Nav from "./js/components/Nav";
import HomePage from "./js/HomePage";
import PageNotFound from "./js/PageNotFound";
import PageTransition from "./js/components/PageTransition";
import ParticlePlayground from "./js/ParticlePlayground";
import Footer from "./js/components/Footer";
import FAQs from "./js/FAQs";
import TermsOfUse from "./js/TermsOfUse";
import PrivacyPolicy from "./js/PrivacyPolicy";
import ScrollToTop from "./js/components/ScrollToTop";
import ChefPage01 from "./js/ChefPage01";
import EventPageSydney from "./js/EventPage";
import ScrollReveal from "./js/utils/ScrollReveal";
import OurRange from "./js/OurRange";
import history from "./js/history";
import SecretSuppersPage from "./js/SecretSuppersPage";

function App() {
    const [wrapperClass, setWrapperClass] = useState("wrapper");
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        console.log("Mounting App");

        setWrapperClass("wrapper appHasLoaded");

        if (!hasLoaded) setHasLoaded(true);

        const loader = document.querySelector(".loader-logo");
        loader.classList.add("page-has-loaded");
        const root = document.querySelector("#root");
        root.classList.remove("isLoading");

        return () => {
            console.log("Unmounting App");
        };
    }, []);

    return (
        <div className={wrapperClass}>
            {hasLoaded ? (
                <BrowserRouter history={history}>
                    <ScrollReveal>
                        <Nav />
                    </ScrollReveal>
                    <ScrollToTop>
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/faq" exact component={FAQs} />
                            <Route path="/our-range" component={OurRange} />
                            <Route
                                path="/secret-suppers"
                                exact
                                component={SecretSuppersPage}
                            />
                            <Route path="/chef1" exact component={ChefPage01} />
                            <Route path="/chef2" exact component={ChefPage01} />
                            <Route
                                path="/events/sydney"
                                exact
                                component={EventPageSydney}
                            />
                            <Route
                                path="/events/melbourne"
                                exact
                                component={EventPageSydney}
                            />

                            <Route
                                path="/privacy-policy"
                                exact
                                component={PrivacyPolicy}
                            />
                            <Route
                                path="/terms-of-use"
                                exact
                                component={TermsOfUse}
                            />
                            <Route
                                path="/particles"
                                exact
                                component={ParticlePlayground}
                            />
                            <Route path="/" component={PageNotFound} />
                        </Switch>
                    </ScrollToTop>
                    <ScrollReveal>
                        <Footer />
                    </ScrollReveal>
                </BrowserRouter>
            ) : null}
            <PageTransition />
        </div>
    );
}

export default App;
