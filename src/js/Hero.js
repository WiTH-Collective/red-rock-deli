import React, { useRef, useState, useEffect } from "react";
import Player from "@vimeo/player";
import FeedYourCuriosity from "../img/lockups/feed-your-curiosity---white.png";

function Hero() {
  const videoRef = useRef(null);

  return (
    <section className="Hero">
      <div className="background-video full-width">
        <video
          ref={videoRef}
          muted
          loop
          onCanPlay={() => {
            videoRef.current.play();
          }}
        >
          <source src="/videos/placeholder-video-sq.mp4" />
        </video>
      </div>

      <div className="absolute-overlay-container">
        <div className="container">
          <img className="lockup" src={FeedYourCuriosity} alt="Red Rock Deli" />
          <div className="scroll-prompt" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
