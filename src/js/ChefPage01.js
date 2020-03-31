import React from "react";
import { Helmet } from "react-helmet";
import { HeroStatic } from "./components/Hero";
import ScrollReveal from "./utils/ScrollReveal";
import MeetTheChefs from "./components/MeetTheChefs";
import WideFooterImage from "./components/WideFooterImage";
import FeatureVideoItem from "./components/FeatureVideoItem";
import ImageSlider from "./components/ImageSlider";
import ButtonPrimary from "./components/ButtonPrimary";
import Chef from "./components/chef";

const ChefPage01 = () => {
    return (
        <ScrollReveal>
            <div className="page-wrappers SecretSuppersPage">
                <HeroStatic
                    backgroundUrl={
                        "/images/secret-suppers/colin-fassnidge-hero.jpg"
                    }
                    title={"Colin Fassnidge"}
                />
                <section className="SecretSuppersCarousel sr-item line-top line-top-black">
                    <div className="container">
                        <div className="copy centered700 black">
                            <p>Your exclusive chef for the evening</p>
                            <h2>Colin Fassnidge</h2>
                        </div>
                    </div>

                    <div className="container1280">
                        <ImageSlider
                            images={[
                                "/images/meet-the-chefs/slider-1.jpg",
                                "/images/meet-the-chefs/slider-2.jpg",
                                "/images/meet-the-chefs/slider-3.jpg",
                                "/images/meet-the-chefs/slider-1.jpg"
                            ]}
                        />
                    </div>

                    <div className="MeetTheChefs no-background">
                        <div className="container">
                            <div className="copy centered700 black">
                                <h2>MEET THE CHEFS</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Enim ut tellus elementum sagittis vitae et.
                                </p>
                            </div>

                            <div className="black-background">
                                <div className="content">
                                    <div className="chef-holder">
                                        <Chef
                                            imageUrl="/images/meet-the-chefs/meet-the-chefs-placeholder-1.jpg"
                                            chefName="Chef Name 1"
                                            key={1}
                                            linkTo="/chef1"
                                        />
                                        <Chef
                                            imageUrl="/images/meet-the-chefs/meet-the-chefs-placeholder-2.jpg"
                                            chefName="Chef Name 2"
                                            key={2}
                                            linkTo="/chef1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <WideFooterImage imageUrl="/images/secret-suppers/ss-chef1-hero-wide.jpg" />
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

export default ChefPage01;
