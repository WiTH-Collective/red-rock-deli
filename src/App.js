import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/App.scss";
import Nav from "./js/Nav";
import HomePage from "./js/HomePage";
import PageNotFound from "./js/PageNotFound";
import PageTransition from "./js/components/PageTransition";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
      <PageTransition />
    </div>
  );
}

export default App;
