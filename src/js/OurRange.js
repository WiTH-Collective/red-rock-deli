import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { createBrowserHistory } from "history";
import ProductsData from "./data/productData.json";
import ScrollReveal from "./utils/ScrollReveal";
import OurRangeParticles from "./components/OurRangeParticles";
import history from "./history";
import { Link } from "react-router-dom";
import OurRangeIcons from "./components/OurRangeIcons";

const OurRange = props => {
    const data = ProductsData[0];
    const baseUrl = "/our-range/";
    const [modalShowing, setModalShowing] = useState(false);
    const [modalInfo, setModalInfo] = useState({
        type: "info",
        heading: "Nutritional Info",
        image: "",
        copy: null
    });
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

    // Show Modal
    const showModal = modalType => {
        console.log("SHOW MODAL");

        setModalShowing(true);
        // blurContainer.current.classList.add("blurred");
        // modal.current.classList.add("isActive");
        switchModal(modalType);
    };
    const switchModal = modalType => {
        if (modalType === "info") {
            setModalInfo({
                type: "info",
                heading: "Nutritional Info",
                image: current.product.nutritionalInfo.image,
                copy: null
            });
        } else {
            setModalInfo({
                type: "pairings",
                heading: "Flavour Pairings",
                image: current.product.flavourPairing.image,
                copy: current.product.flavourPairing.copy
            });
        }
    };
    const closeModal = () => {
        console.log("HIDE MODAL");
        setModalShowing(false);
        // blurContainer.current.classList.remove("blurred");
        // modal.current.classList.remove("isActive");
    };

    const [pageLoading, setPageLoading] = useState(true);
    useEffect(() => {
        setPageLoading(false);
    });

    //
    // Extract current product from URL.
    useEffect(() => {
        console.log("--> Getting current product");
        setCurrent({ ...getCurrentProduct() });
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
                <div
                    className={`blur-container ${
                        modalShowing ? "blurred" : ""
                    }`}
                >
                    {ProductsData && current.group ? (
                        <React.Fragment>
                            <section className="DiscoverTheRange">
                                <OurRangeParticles
                                    data={ProductsData[0]}
                                    current={current}
                                    onClickFunction={navigateTo}
                                    showModal={showModal}
                                    pageIsLoading={pageLoading}
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
                            <div className="hidden">
                                {current.products
                                    ? current.products.map((p, i) => {
                                          return (
                                              <Link
                                                  to={
                                                      baseUrl +
                                                      current.group +
                                                      "/" +
                                                      encodeURI(p.title)
                                                  }
                                                  key={9000 + i}
                                              />
                                          );
                                      })
                                    : ""}
                            </div>
                        </React.Fragment>
                    ) : null}
                </div>

                <div
                    className={`modal ${modalInfo.type} ${
                        modalShowing ? "isActive" : ""
                    }`}
                >
                    <div className="info">
                        <div className="black-box">
                            <div
                                className="header"
                                onClick={() => {
                                    closeModal();
                                }}
                            >
                                <h3>{modalInfo.heading}</h3>
                            </div>
                            <img
                                src={modalInfo.image}
                                alt={modalInfo.heading}
                                onClick={() => {
                                    closeModal();
                                }}
                            />
                            {modalInfo.copy ? (
                                <div
                                    onClick={() => {
                                        closeModal();
                                    }}
                                    className="copy"
                                    dangerouslySetInnerHTML={{
                                        __html: modalInfo.copy
                                    }}
                                />
                            ) : (
                                ""
                            )}
                        </div>
                        <OurRangeIcons onClickFunction={switchModal} />
                    </div>
                </div>
            </div>
            <Helmet>
                <title>{"Red Rock Deli®"}</title>
                <meta
                    name="description"
                    content={"Red Rock Deli® - Feed Your Curiosity™"}
                />
            </Helmet>
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
            <img src={props.imageUrl} alt="product" />
            <h3>{props.label}</h3>
            <Link className="hidden" to={props.rangeUrl + props.baseUrl} />
        </div>
    );
};
