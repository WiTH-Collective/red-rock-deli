import React, { useRef, useEffect, useState } from "react";
import { TweenMax, Power3 } from "gsap";

const ScrollReveal = props => {
    const animationContainerReference = useRef();
    const itemsArray = [];

    const onScroll = () => {
        if (animationContainerReference) {
            itemsArray.map(item => {
                const itemBounds = item.getBoundingClientRect();

                if (itemBounds.bottom < 0) {
                    // check is not already above viewport:
                    TweenMax.set(item, {
                        opacity: 1,
                        visibility: "visible"
                    });
                } else if (window.innerHeight + 100 > itemBounds.y) {
                    // check if item is coming into view
                    if (!item.classList.contains("sr-item-showing")) {
                        console.log(item);

                        item.classList.add("sr-item-showing");

                        TweenMax.to(item, 0.5, {
                            opacity: 1,
                            visibility: "visible",
                            ease: Power3.easeIn
                        });
                    }
                }
                return "";
            });
        }
    };

    const [pageLoading, setPageLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            if (pageLoading && !props.pageIsLoading) {
                // console.log("LOADED");
                setPageLoading(false);
                // console.log("SCROLL LOADING!!!!!!");

                if (animationContainerReference) {
                    Array.from(
                        animationContainerReference.current.querySelectorAll(
                            "section"
                        )
                    ).map(item => {
                        itemsArray.push(item);
                    });
                    itemsArray.map(item => {
                        if (!item.classList.contains("sr-item-showing")) {
                            TweenMax.set(item, { opacity: 0 });
                        }
                    });

                    window.addEventListener("scroll", onScroll);
                    onScroll();
                }
            }
        }, 500);

        return () => {
            window.removeEventListener("scroll", onScroll);
            itemsArray.map(item => {
                TweenMax.killTweensOf(item);
                return null;
            });
        };
    }, [props.pageIsLoading, animationContainerReference]);

    return (
        <div
            ref={animationContainerReference}
            className="ScrollRevealContainer"
        >
            {props.children}
        </div>
    );
};

export default ScrollReveal;
