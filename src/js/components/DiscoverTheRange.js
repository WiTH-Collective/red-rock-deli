import React, { useState, useEffect, useLayoutEffect } from "react";
import ProductsData from "../data/productData.json";
import ButtonPrimary from "./ButtonPrimary";
import HomePageParticles from "./HomePageParticles";

const DiscoverTheRange = props => {
    // check CANVAS is supported
    // const canUseCanvas = window.HTMLCanvasElement;
    return (
        <section className="DiscoverTheRange sr-item">
            <h2>Discover The Range</h2>

            {ProductsData ? <HomePageParticles data={ProductsData[0]} /> : null}
            <div className="scroll-prompt scroll-prompt-top" />
        </section>
    );
};

export default DiscoverTheRange;
