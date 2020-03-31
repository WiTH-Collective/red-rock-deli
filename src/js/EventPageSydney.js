import React from "react";
import { Helmet } from "react-helmet";
import { HeroStatic } from "./components/Hero";
import ScrollReveal from "./utils/ScrollReveal";
import MeetTheChefs from "./components/MeetTheChefs";
import WideFooterImage from "./components/WideFooterImage";
import FeatureVideoItem from "./components/FeatureVideoItem";
import ImageSlider from "./components/ImageSlider";
import ButtonPrimary from "./components/ButtonPrimary";

const EventPageSydney = () => {
    return (
        <ScrollReveal>
            <div className="page-wrappers SecretSuppersPage">
                <HeroStatic
                    backgroundUrl={
                        "/images/secret-suppers/ss-event1-hero-wide.jpg"
                    }
                    title={"Earlthy delights"}
                    h3="MONTH XX, YYYY"
                    p="Location details"
                />
                <section className="SecretSuppersCarousel sr-item line-top line-top-black">
                    <div className="container">
                        <div className="content intro">
                            <p>Your exclusive chef for the evening</p>
                            <h2>Colin Fassnidge</h2>
                        </div>
                    </div>

                    <FeatureVideoItem
                        blackBackground
                        posterImageUrl="/images/secret-suppers/colin-fassnidge-hero.jpg"
                    >
                        <div className="container" style={{ paddingTop: 0 }}>
                            <div className="copy">
                                <p className="large">
                                    Born in Dublin and trained by the legendary
                                    Raymond Blanc, Colin Fassnidge was the
                                    Executive Chef at the Four in Hand for over
                                    ten years.
                                </p>
                                <ButtonPrimary linkTo="/chef1/">
                                    Learn about Colin
                                </ButtonPrimary>
                            </div>
                        </div>
                    </FeatureVideoItem>
                </section>

                <MeetTheChefs onSecretSuppersPage />
                <WideFooterImage imageUrl="/images/secret-suppers/ss-event1-footer-wide.jpg" />
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

export default EventPageSydney;
