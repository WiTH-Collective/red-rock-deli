import React, { useRef, useEffect } from "react";
import FeedYourCuriosity from "../../img/lockups/feed-your-curiosity---165x550-x39sprites.png";
import SecretSuppersLockup from "../../img/lockups/secret-suppers-header-lockup-wide.png";
import { TweenMax, SteppedEase } from "gsap";

function Hero(props) {
    const videoRef = useRef(null);
    const lockup = useRef(null);

    useEffect(() => {
        TweenMax.from(lockup.current, 1.5, {
            y: "-100%",
            ease: SteppedEase.config(40),
            delay: 0.33
        });
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
                    {/* <source src="/videos/placeholder-video-sq.mp4" /> */}
                </video>
            </div>

            <div className="absolute-overlay-container">
                <div className="container">
                    <div className="feed-your-curiosity">
                        <img
                            ref={lockup}
                            className="lockup"
                            src={FeedYourCuriosity}
                            alt="Red Rock Deli"
                        />
                    </div>
                    <div className="scroll-prompt" />
                </div>
            </div>
        </section>
    );
}

export default Hero;

export function HeroStatic(props) {
    return (
        <section
            className="Hero HeroStatic"
            style={{ backgroundImage: `url(${props.backgroundUrl})` }}
        >
            <div className="container">
                <div className="title">
                    <img
                        className="lockup"
                        src={SecretSuppersLockup}
                        alt="Secret Suppers"
                    />
                    <h1>{props.title}</h1>
                </div>
            </div>
        </section>
    );
}
