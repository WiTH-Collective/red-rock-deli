import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/App.scss";
import Nav from "./js/components/Nav";
import HomePage from "./js/HomePage";
import PageNotFound from "./js/PageNotFound";
import PageTransition from "./js/components/PageTransition";
import ParticlePlayground from "./js/ParticlePlayground";

function App() {
  let wrapperClass = "wrapper";

  useEffect(() => {
    wrapperClass = "wrapper";
  }, []);

  return (
    <div className={wrapperClass}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/particles" exact component={ParticlePlayground} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
      <PageTransition />
    </div>
  );
}

export default App;
