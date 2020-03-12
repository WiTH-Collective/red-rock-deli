import React, { useEffect } from "react";
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

function App() {
  let wrapperClass = "wrapper";

  useEffect(() => {
    wrapperClass = "wrapper";
  }, []);

  return (
    <div className={wrapperClass}>
      <BrowserRouter>
        <Nav />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/faq" exact component={FAQs} />
            <Route path="/privacy-policy" exact component={PrivacyPolicy} />
            <Route path="/terms-of-use" exact component={TermsOfUse} />
            <Route path="/particles" exact component={ParticlePlayground} />
            <Route path="/" component={PageNotFound} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
      <PageTransition />
    </div>
  );
}

export default App;
