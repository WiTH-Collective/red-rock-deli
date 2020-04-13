import React from "react";
import { Helmet } from "react-helmet";
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion";
import ScrollReveal from "./utils/ScrollReveal";

const FAQs = () => {
    return (
        <div className="page-wrappers legal faqs">
            <ScrollReveal>
                <section>
                    <div className="container">
                        <h1>Frequently Asked Questions</h1>
                        <div className="items">
                            <FrequentlyAskedQuestion
                                title="Do Red Rock Deli potato chips contain artificial colours or flavours?"
                                description="No, they contain natural flavours, natural colours and no added MSG."
                            />
                            <FrequentlyAskedQuestion
                                title="Are Red Rock Deli potato chips suitable for vegetarians?"
                                description="We recommend contacting our Consumer Information Centre on 1800 025 789 (Freecall number, available 9 am to 5 pm Sydney time - excluding public holidays) to obtain a list of products suitable for vegetarians. "
                            />
                            <FrequentlyAskedQuestion
                                title="Are Red Rock Deli potato chips suitable for vegans?"
                                description="We recommend contacting our Consumer Information Centre on 1800 025 789 (Freecall number, available 9 am to 5 pm Sydney time - excluding public holidays) to obtain a list of products suitable for vegans."
                            />
                            <FrequentlyAskedQuestion
                                title="Are Red Rock Deli potato chips Halal certified?"
                                description="Our products are not Halal certified however please call our Consumer Information Centre on 1800 025 789 (Freecall number, available 9 am to 5 pm Sydney time - excluding public holidays) for a list of products suitable for vegetarians."
                            />
                            <FrequentlyAskedQuestion
                                title="Are Red Rock Deli potato chips Kosher certified?"
                                description="Please call our Consumer Information Centre on 1800 025 789 (Freecall number, available 9 am to 5 pm Sydney time - excluding public holidays) for a list of products suitable for vegetarians."
                            />
                            <FrequentlyAskedQuestion
                                title="Are Red Rock Deli potato chips gluten free?"
                                description="We follow strict industry standards that mean consumers can be confident that Red Rock Deli productslabelled ‘gluten-free’ will be suitable. Please call our Consumer Information Centre on 1800 025 789 (Freecall number, available 9 am to 5 pm Sydney time - excluding public holidays) for a list of products which are gluten free."
                            />
                            <FrequentlyAskedQuestion
                                title="Are Red Rock Deli Corn and Nut ranges gluten free?"
                                description="Unfortunately, they are not gluten-free because they are manufactured on a line that also produces other products with gluten-containing ingredients."
                            />
                            <FrequentlyAskedQuestion
                                title="Do Red Rock Deli potato chips contain trans fatty acids?"
                                description="Red Rock Deli potato chips are not cooked in partially hydrogenated fats and hence contain negligible levels of trans fatty acids."
                            />
                            <FrequentlyAskedQuestion
                                title="Do Red Rock Deli products use any GMO ingredients?"
                                description="Red Rock Deli products use only raw materials that are specified as non-GMO, and we ensure that oursuppliers regularly confirm compliance to these specifications."
                            />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <Helmet>
                <title>{"FAQs | Red Rock Deli©"}</title>
                <meta
                    name="description"
                    content={
                        "Have a question about Red Rock Deli or our products? Whether it's about nutrition or safety, we've answered your questions here. Read all FAQs."
                    }
                />
                <meta
                    name="keywords"
                    content={
                        "Red, Rock, Deli, Chips, Nuts, Feed your curiosity, curious chips and nuts"
                    }
                />
                <meta property="og:site_name" content={"Red Rock Deli®"} />
                <meta name="og:title" content={"FAQs | Red Rock Deli©"} />
                <meta
                    name="og:description"
                    content={
                        "Have a question about Red Rock Deli or our products? Whether it's about nutrition or safety, we've answered your questions here. Read all FAQs."
                    }
                />
                <meta
                    property="og:image"
                    content={
                        "https://red-rock-deli-2020.netlify.com/images/backgorund-secret-suppers.jpg"
                    }
                />
            </Helmet>
        </div>
    );
};

export default FAQs;
