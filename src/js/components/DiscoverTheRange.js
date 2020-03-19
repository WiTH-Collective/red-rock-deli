import React, { useState, useEffect, useLayoutEffect } from "react";
import ProductsData from "../data/carouselData.json";
import ButtonPrimary from "./ButtonPrimary";
import Particles from "./Particles";

const DiscoverTheRange = props => {
    // parse JSON
    // console.log("productsList", ProductsData[0]);

    const productsList = ProductsData[0].products.map(p => {
        return p;
    });

    // console.log("productsList", productsList);

    // check value is within range of products array

    // const setClassNames = () => {
    //     productsList[current].productClass = "isActive current";
    //     productsList[checkRange(current, -2)].productClass =
    //         "isActive far-left";
    //     productsList[checkRange(current, -1)].productClass =
    //         "isActive near-left";
    //     productsList[checkRange(current, 1)].productClass =
    //         "isActive near-right";
    //     productsList[checkRange(current, 2)].productClass =
    //         "isActive far-right";
    // };

    // set initila state

    // const [current, setCurrent] = useState(2);
    // setClassNames();

    // const checkRange = (n, i) => {
    //     let num = parseInt(n) + i;
    //     num < 0 ? (num += productsList.length) : (num %= productsList.length);
    //     return num;
    // };

    // const [current, setCurrent] = useState(2);
    // setClassNames();

    // check CANVAS is supported
    const canUseCanvas = window.HTMLCanvasElement;
    let hideDomImages;
    canUseCanvas && props.showCanvas
        ? (hideDomImages = "hide-dom-images")
        : (hideDomImages = "");

    console.log("RENDERING DiscoverTheRange");

    return (
        <section className="DiscoverTheRange sr-item">
            <h2>Discover The Range</h2>

            {ProductsData ? <Particles data={ProductsData[0]} /> : null}
            <div className="scroll-prompt scroll-prompt-top" />

            <div className="Carousel">
                <div className="items">
                    <div>
                        {productsList.map((product, i) => {
                            return (
                                <Item
                                    hideDomImages={hideDomImages}
                                    key={i}
                                    id={i}
                                    {...product}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div>
                <ButtonPrimary>Button Primary</ButtonPrimary>
            </div>
        </section>
    );
};

export default DiscoverTheRange;

const Item = props => {
    return (
        <div className={`item ${props.productClass} ${props.hideDomImages}`}>
            <div className="product-image">
                <img src={props.imageUrl} alt={props.title} />
            </div>
        </div>
    );
};
