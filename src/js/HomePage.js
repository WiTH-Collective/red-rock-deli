import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Hero from "./components/Hero";
import SecretSuppers from "./components/SecretSuppers";
import MeetTheChefs from "./components/MeetTheChefs";
import DiscoverTheRange from "./components/DiscoverTheRange";
import WhereToBuy from "./components/WhereToBuy";
import InstaFeed from "./components/InstaFeed";

const HomePage = () => {
  return (
    <div className="page-wrapper home-page">
      <Hero />
      <SecretSuppers />
      <MeetTheChefs />
      <DiscoverTheRange />
      <WhereToBuy />
      <InstaFeed />

      <Helmet>
        <title>{"Red Rock Deli®"}</title>
        <meta name="description" content={"Red Rock Deli® - Feed Your Curiosity™"} />
        <meta name="keywords" content={"Red, Rock, Deli, Chips, Nuts, Feed your curiosity, curious chips and nuts"} />
      </Helmet>
    </div>
  );
};

export default HomePage;
