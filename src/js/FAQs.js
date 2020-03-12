import React, { useState } from "react";
import { Helmet } from "react-helmet";
import FAQ from "./components/FAQ";

const FAQs = () => {

    return (
        <div className="page-wrappers legal faqs">
            <section>
                <div className="container2">
                    <h1>Frequently Asked Questions</h1>
                    <div className="items">
                        <FAQ title="Lorem ipsum dolor sic amet." description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." />
                        <FAQ title="Consectetur adipiscing elit." description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." />
                        <FAQ title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." />
                        <FAQ title="Lorem ipsum dolor sic amet." description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." />
                        <FAQ title="Consectetur adipiscing elit." description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." />
                        <FAQ title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." />
                        <FAQ title="Lorem ipsum dolor sic amet." description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." />
                        <FAQ title="Consectetur adipiscing elit." description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." />
                        <FAQ title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." />
                    </div>
                </div>
            </section>

            <Helmet>
                <title>{"Red Rock Deli®"}</title>
                <meta name="description" content={"Red Rock Deli® - Feed Your Curiosity™"} />
            </Helmet>
        </div>
    );

}

export default FAQs;


