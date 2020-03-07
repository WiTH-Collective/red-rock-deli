import React, { useRef, useEffect } from "react";
import ButtonPrimary from "./components/ButtonPrimary";

const DiscoverTheRange = props => {
  const carousel = useRef(null);

  useEffect(() => {
    // setTimeout(() => {
    //   videoRef.current.play();
    // }, 100);
  }, []);

  return (
    <section className="DiscoverTheRange">
      <div className="scroll-prompt scroll-prompt-top" />
      <h2>Discover The Range</h2>
      <div ref={carousel} className="Carousel" />
      <div>
        <ButtonPrimary buttonText="Button Primary" />
      </div>
    </section>
  );
};

export default DiscoverTheRange;
