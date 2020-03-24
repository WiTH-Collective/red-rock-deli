import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { createBrowserHistory } from "history";
// import { HeroStatic } from "./components/Hero";
import particleSprites from "../img/products/particle-sprites.png";
import ProductsData from "./data/productData.json";
import ScrollReveal from "./utils/ScrollReveal";
import OurRangeParticles from "./components/OurRangeParticles";
import history from "./history";
import { Link } from "react-router-dom";

const OurRange = props => {
    const data = ProductsData[0];
    const baseUrl = "/our-range/";
    const [pathname, setPathname] = useState(window.location.pathname);
    const [current, setCurrent] = useState({
        group: null,
        index: null,
        product: null,
        products: null,
        next: null,
        previous: null
    });

    const getCurrentProduct = () => {
        const urlArray = pathname.split("/");

        const obj = {
            group: "",
            index: 0,
            product: null,
            products: null,
            next: "",
            previous: "",
            productAnimationDirection: null
        };

        // if product group is not found in list of products, set to default value
        const group = Object.keys(data.product).find(
            key => key === urlArray[2]
        );
        group
            ? (obj.group = group)
            : (obj.group = Object.keys(data.product)[0]);

        obj.products = data.product[obj.group];

        // find product in list of products.
        const currentIndex = data.product[obj.group].findIndex(
            product => product.title === decodeURI(urlArray[3])
        );

        // if index not found, use default index
        currentIndex !== -1 ? (obj.index = currentIndex) : (obj.index = 0);

        // define current product
        obj.product = data.product[obj.group][obj.index];

        // check if direction is defined
        if (urlArray[4]) obj.productAnimationDirection = parseInt(urlArray[4]);

        return obj;
    };

    useEffect(() => {
        console.log("--> Getting current product");
        setCurrent({ ...getCurrentProduct() });
        // console.log("rendering:", ProductsData, "caca", current.product);
    }, [pathname]);

    const navigateTo = (url, direction = "") => {
        console.log("navigating to", url);
        history.push(baseUrl + url + "/" + direction);
        setPathname(window.location.pathname);
    };

    //

    return (
        <ScrollReveal>
            <div className="page-wrappers our-range">
                {ProductsData && current.group ? (
                    <React.Fragment>
                        <section className="DiscoverTheRange">
                            <OurRangeParticles
                                data={ProductsData[0]}
                                current={current}
                                onClickFunction={navigateTo}
                            />
                        </section>
                        <section className="range-nav">
                            <div className="container">
                                {data.nav.map((item, i) => {
                                    return (
                                        <NavItem
                                            {...item}
                                            rangeUrl={baseUrl}
                                            onClickFunction={navigateTo}
                                            pathname={pathname}
                                            key={3000 + i}
                                        />
                                    );
                                })}
                            </div>
                        </section>
                    </React.Fragment>
                ) : null}

                <Helmet>
                    <title>{"Red Rock Deli®"}</title>
                    <meta
                        name="description"
                        content={"Red Rock Deli® - Feed Your Curiosity™"}
                    />
                </Helmet>
            </div>
        </ScrollReveal>
    );
};

export default OurRange;

const NavItem = props => {
    // console.log("NAV ITEM: ", props);
    let isActive = "";
    props.pathname && props.pathname.split("/")[2] === props.baseUrl
        ? (isActive = "isActive")
        : (isActive = "");
    return (
        <div
            className={`nav-item ${isActive}`}
            onClick={() => {
                props.onClickFunction(props.baseUrl);
            }}
        >
            <img src={props.imageUrl} />
            <h3>{props.label}</h3>
            <Link className="hidden" to={props.rangeUrl + props.baseUrl} />
        </div>
    );
};
