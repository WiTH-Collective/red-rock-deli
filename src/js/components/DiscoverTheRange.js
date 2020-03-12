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
  const checkRange = (n, i) => {
    let num = parseInt(n) + i;
    num < 0 ? (num += productsList.length) : (num %= productsList.length);
    return num;
  };

  const setClassNames = () => {
    productsList[current].productClass = "isActive current";
    productsList[checkRange(current, -2)].productClass = "isActive far-left";
    productsList[checkRange(current, -1)].productClass = "isActive near-left";
    productsList[checkRange(current, 1)].productClass = "isActive near-right";
    productsList[checkRange(current, 2)].productClass = "isActive far-right";
  };

  // set initila state
  const [current, setCurrent] = useState(2);
  setClassNames();

  return (
    <section className="DiscoverTheRange">
      {/* <Particles current={current} data={ProductsData[0]} /> */}
      <div className="scroll-prompt scroll-prompt-top" />
      <h2>Discover The Range</h2>

      <div className="Carousel">
        <div className="items">
          <div>
            {productsList.map((product, i) => {
              return <Item key={i} id={i} {...product} />;
            })}
          </div>
        </div>
        <div className="controls">
          <div>
            <button
              className="previous"
              onClick={() => {
                setCurrent(checkRange(current, -1));
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M16.85,26.31l8.62,8.35a1.21,1.21,0,0,0,1.68,0,1.12,1.12,0,0,0,0-1.63L19.37,25.5,27.15,18a1.11,1.11,0,0,0,0-1.62,1.21,1.21,0,0,0-1.68,0l-8.62,8.34A1.12,1.12,0,0,0,16.85,26.31Z" />
              </svg>
            </button>
            <button
              className="next"
              onClick={() => {
                setCurrent(checkRange(current, 1));
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M33.15,24.68l-8.62-8.34a1.21,1.21,0,0,0-1.68,0,1.11,1.11,0,0,0,0,1.62l7.78,7.54L22.85,33a1.12,1.12,0,0,0,0,1.63,1.21,1.21,0,0,0,1.68,0l8.62-8.35A1.12,1.12,0,0,0,33.15,24.68Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <ButtonPrimary buttonText="Button Primary" />
      </div>
    </section>
  );
};

export default DiscoverTheRange;



const Item = props => {
  return (
    <div className={`item ${props.productClass}`}>
      <div className="product-image">
        <img src={props.imageUrl} alt={props.title} />
      </div>
    </div>
  );
};