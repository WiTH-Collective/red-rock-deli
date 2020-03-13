import React from "react";
import { Helmet } from "react-helmet";

import DiscoverTheRange from "./components/DiscoverTheRange";

const ParticlePlayground = () => {
  return (
    <div className="page-wrapper home-page">
      <DiscoverTheRange showCanvas={true} />

      <Helmet>
        <title>{"Red Rock Deli® : PARTICLE TEST"}</title>
        <meta name="description" content={"Red Rock Deli® - Feed Your Curiosity™"} />
        <meta name="keywords" content={"Red, Rock, Deli, Chips, Nuts, Feed your curiosity, curious chips and nuts"} />
      </Helmet>
    </div>
  );
};

export default ParticlePlayground;
