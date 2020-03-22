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
            {props.hideButton ? (
                ""
            ) : (
                <div>
                    <ButtonPrimary linkTo="/our-range">
                        Button Primary
                    </ButtonPrimary>
                </div>
            )}
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
