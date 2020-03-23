import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { createBrowserHistory } from "history";
// import { HeroStatic } from "./components/Hero";
import ProductsData from "./data/carouselData.json";
import ScrollReveal from "./utils/ScrollReveal";
import OurRangeParticles from "./components/OurRangeParticles";
import history from "./history";

const OurRange = props => {
    const data = ProductsData[0];
    const baseUrl = "/our-range/";
    // const [currentPage, updateCurrentPage] = useState("");

    console.log("OUR RANGE RE-RENDERING");

    useEffect(() => {
        console.log("PATH: ", window.location.pathname);
    }, []);

    const selectProduct = (product, increment) => {
        // On click function, for Particle componenet
        console.log("ProductID: ", product, increment);
    };

    const navigateTo = url => {
        console.log("navigating to", url);
        history.push(baseUrl + url + "/");
    };

    return (
        <ScrollReveal>
            <div className="page-wrappers our-range">
                {ProductsData ? (
                    <React.Fragment>
                        <section className="DiscoverTheRange">
                            <OurRangeParticles
                                data={ProductsData[0]}
                                onClickFunction={selectProduct}
                            />
                        </section>
                        <section className="range-nav">
                            <div className="container">
                                {data.nav.map((item, i) => {
                                    return (
                                        <NavItem
                                            {...item}
                                            onClickFunction={navigateTo}
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
    console.log("NAV ITEM: ", props);

    return (
        <div
            className="nav-item"
            onClick={() => {
                props.onClickFunction(props.baseUrl);
            }}
        >
            <img src={props.imageUrl} />
            <h3>{props.label}</h3>
        </div>
    );
};
