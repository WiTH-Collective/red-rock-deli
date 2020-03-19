import React, { Component } from "react";
import ButtonPrimary from "./components/ButtonPrimary";
import ScrollReveal from "./components/ScrollReveal";

class PageNotFound extends Component {
    render() {
        return (
            <ScrollReveal>
                <section className="PageNotFound">
                    <section className="PageNotFound">
                        <h1>404 Page not found.</h1>
                        <div>
                            <ButtonPrimary>Take me home</ButtonPrimary>
                        </div>
                    </section>
                </section>
            </ScrollReveal>
        );
    }
}

export default PageNotFound;
