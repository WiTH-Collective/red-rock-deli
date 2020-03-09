import React, { useRef, useEffect } from "react";
import FeedYourCuriosity from "../img/lockups/feed-your-curiosity---165x550-x39sprites.png";
import { TweenMax, SteppedEase } from "gsap";

function Hero() {
  const videoRef = useRef(null);
  const lockup = useRef(null);

  useEffect(() => {
    TweenMax.from(lockup.current, 1.5, {y: "-100%", ease: SteppedEase.config(40), delay: 0.33})
  }, []);

  return (
    <section className="Hero">
      <div className="background-video full-width">
        <video
          ref={videoRef}
          poster="/videos/placeholder-video.jpg"
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
          <div className="feed-your-curiosity">
            <img ref={lockup} className="lockup" src={FeedYourCuriosity} alt="Red Rock Deli" />
          </div>
          <div className="scroll-prompt" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
