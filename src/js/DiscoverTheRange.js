import React, { useRef, useEffect } from "react";
import ButtonPrimary from "./components/ButtonPrimary";
import Carousel from "./components/Carousel";

const DiscoverTheRange = props => {
  return (
    <section className="DiscoverTheRange">
      <div className="scroll-prompt scroll-prompt-top" />
      <h2>Discover The Range</h2>
      <Carousel />
      <div>
        <ButtonPrimary buttonText="Button Primary" />
      </div>
    </section>
  );
};

export default DiscoverTheRange;
