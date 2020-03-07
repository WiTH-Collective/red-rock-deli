import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/App.scss";
import Nav from "./js/Nav";
import HomePage from "./js/HomePage";
import PageNotFound from "./js/PageNotFound";

function App() {
  return (
    <div className="wrapper">
      <div className="animationOverlay" />
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
