import React, { useRef, useState } from "react";
import ButtonPrimary from "./ButtonPrimary";

const FeatureVideoItem = props => {
    const videoRef = useRef();
    const [canPlay, setCanPlay] = useState(false);

    return (
        <div className="FeaturedVideoHolder">
            <div
                className={
                    props.blackBackground
                        ? "background wide black"
                        : "background wide"
                }
            >
                <div className="container">
                    <div
                        className={
                            canPlay ? "video-holder has-video" : "video-holder"
                        }
                    >
                        <video
                            ref={videoRef}
                            poster={props.posterImageUrl}
                            muted
                            loop
                            onCanPlay={() => {
                                setCanPlay(true);
                                videoRef.current.play();
                            }}
                        >
                            {/* <source src="/videos/placeholder-video-sq.mp4" /> */}
                        </video>
                    </div>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default FeatureVideoItem;
