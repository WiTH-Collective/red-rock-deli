import React, { Component } from "react";
import ButtonPrimary from "./components/ButtonPrimary";

class PageNotFound extends Component {
  render() {
    return (
      <div className="PageNotFound">
        <section className="PageNotFound">
          <h1>404 Page not found.</h1>
          <div>
            <ButtonPrimary buttonText="Take me home" />
          </div>
        </section>
      </div>
    );
  }
}

export default PageNotFound;
