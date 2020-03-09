import React, { useState, useEffect, useLayoutEffect } from "react";
import ProductsData from "./carousel.json";

const Carousel = props => {

  // on Window Resize;
  useEffect(() => {
    const resize = (e) => {
      console.log(e.target.innerWidth, e.target.innerHeight);
    }
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [])

  // parse JSON
  const products = [];
  ProductsData.map(p => {
    products.push(p)
  })


  // set initila state
  let _storedCurrent = 0;
  if (localStorage.getItem("current")) {
    _storedCurrent = localStorage.getItem("current");
  }
  const [current, setCurrent] = useState(_storedCurrent);

  // check value is within range of products array
  const checkRange = (n, i) => {
    n = parseInt(n) + i;
    n < 0 ? (n += products.length) : (n %= products.length);
    return n;
  };

  // update curren tcarousel items
  const updateCarousel = increment => {
    setCurrent(checkRange(current, increment));
    localStorage.setItem("current", current);

    products.map(product => {
      product.productClass = "";
      return null;
    });
    // console.log(products);


    products[current].productClass = "isActive current";
    products[checkRange(current, -2)].productClass = "isActive far-left";
    products[checkRange(current, -1)].productClass = "isActive near-left";
    products[checkRange(current, 1)].productClass = "isActive near-right";
    products[checkRange(current, 2)].productClass = "isActive far-right";
  };

  useLayoutEffect(
    () => {
      // console.log("CURRENT: ", current);
      updateCarousel(0)
    },
    []
  );


  return (
    <div className="Carousel">
      <div className="items">
        <div>
          {products.map((product, i) => {
            return <Item key={i} id={i} {...product} />;
          })}
        </div>
      </div>
      <div className="controls">
        <div>
          <button
            className="previous"
            onClick={() => {
              updateCarousel(-1);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M16.85,26.31l8.62,8.35a1.21,1.21,0,0,0,1.68,0,1.12,1.12,0,0,0,0-1.63L19.37,25.5,27.15,18a1.11,1.11,0,0,0,0-1.62,1.21,1.21,0,0,0-1.68,0l-8.62,8.34A1.12,1.12,0,0,0,16.85,26.31Z" />
            </svg>
          </button>
          <button
            className="next"
            onClick={() => {
              updateCarousel(1);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path d="M33.15,24.68l-8.62-8.34a1.21,1.21,0,0,0-1.68,0,1.11,1.11,0,0,0,0,1.62l7.78,7.54L22.85,33a1.12,1.12,0,0,0,0,1.63,1.21,1.21,0,0,0,1.68,0l8.62-8.35A1.12,1.12,0,0,0,33.15,24.68Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

const Item = props => {
  return (
    <div className={`item ${props.productClass}`}>
      <div className="particles particles-background" />
      <div className="product-image">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="particles particles-foreground" />
    </div>
  );
};
