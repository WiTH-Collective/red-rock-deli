import React, { useState } from "react";
import { Helmet } from "react-helmet";
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion";

const FAQs = () => {
  return (
    <div className="page-wrappers legal faqs">
      <section>
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <div className="items">
            <FrequentlyAskedQuestion
              title="Lorem ipsum dolor sic amet."
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />
            <FrequentlyAskedQuestion
              title="Consectetur adipiscing elit."
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />
            <FrequentlyAskedQuestion
              title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />
            <FrequentlyAskedQuestion
              title="Lorem ipsum dolor sic amet."
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />
            <FrequentlyAskedQuestion
              title="Consectetur adipiscing elit."
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />
            <FrequentlyAskedQuestion
              title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />
            <FrequentlyAskedQuestion
              title="Lorem ipsum dolor sic amet."
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />
            <FrequentlyAskedQuestion
              title="Consectetur adipiscing elit."
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />
            <FrequentlyAskedQuestion
              title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />
          </div>
        </div>
      </section>

      <Helmet>
        <title>{"Red Rock Deli®"}</title>
        <meta name="description" content={"Red Rock Deli® - Feed Your Curiosity™"} />
      </Helmet>
    </div>
  );
};

export default FAQs;
