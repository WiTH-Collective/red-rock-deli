import React from "react";
import { Helmet } from "react-helmet";
import { HeroStatic } from "./components/Hero";
import ScrollReveal from "./components/ScrollReveal";

const ChefPage01 = () => {
    return (
        <ScrollReveal>
            <div className="page-wrappers chef-page">
                <HeroStatic
                    backgroundUrl={"/images/colin-fassnidge-hero.jpg"}
                    title={"Colin Fassnidge"}
                />
                <section className="stone-wall-bakground">
                    <div className="scroll-prompt scroll-prompt-top  scroll-prompt-black " />
                    <div className="container">
                        <div className="content">
                            <h1>Meet The Chefs</h1>
                        </div>
                    </div>
                </section>

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
