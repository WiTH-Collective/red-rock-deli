import React from "react";
import ChefImage1 from "../../img/meet-the-chefs/meet-the-chefs-placeholder-1.jpg";
import ChefImage2 from "../../img/meet-the-chefs/meet-the-chefs-placeholder-2.jpg";
import ChefImage3 from "../../img/meet-the-chefs/meet-the-chefs-placeholder-3.jpg";
import locationImage from "../../img/meet-the-chefs/secret-locations.jpg";
import ButtonPrimary from "./ButtonPrimary";
import Chef from "./chef";
import { Link } from "react-router-dom";

const MeetTheChefs = () => {
  return (
    <section className="MeetTheChefs">
      <div className="container2">
        <h2>MEET THE CHEFS</h2>

        <div className="black-background">
          <div className="content">
            <div className="chef-holder">
              <Chef imageUrl={ChefImage1} chefName="Chef Name 1" key={1} />
              <Chef imageUrl={ChefImage2} chefName="Chef Name 2" key={2} />
              <Chef imageUrl={ChefImage3} chefName="Chef Name 3" key={3} />
            </div>

            <div className="copy">
              <h2>SECRET SUPPERS</h2>
              <p>
                New flavour combinations, new secret locations - find out more below and enter the ballot for your chance to
                secure your tickets.
              </p>
            </div>

            <div className="locations">
              <div className="locations-list">
                <Location
                  date={"May 21, 2020"}
                  location={"Secret Sydney Location"}
                  chefName={"Chef Name 1"}
                  eventURL="events/e1"
                />
                <Location
                  date={"May 28, 2020"}
                  location={"Secret Melbourne Location"}
                  chefName={"Chef Name 2"}
                  eventURL="events/e2"
                />
                <Location
                  date={"Sept 16, 2020"}
                  location={"Secret Sydney Location"}
                  chefName={"Chef Name 3"}
                  eventURL="events/e3"
                />
                <Location
                  date={"Sept 18, 2020"}
                  location={"Secret Melbourne Location"}
                  chefName={"Chef Name 4"}
                  eventURL="events/e4"
                />
              </div>
              <img
                src={locationImage}
                className="locations-image"
                alt="Shhh, stay up to date with our latest secret locations."
              />
            </div>
          </div>
        </div>

        <div className="looking-for-a-ticket">
          <div>
            <div className="icon icon-ticket" />
            <h2>LOOKING FOR A TICKET?</h2>
            <ButtonPrimary buttonText="Buy your ticket" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = props => {
  return (
    <Link className="location" to={props.eventURL}>
      <div className="location-copy">
        <h3 className="date">{props.date}</h3>
        <p className="location-text">{props.location}</p>
        <br />
        <h5 className="name">
          <em>Hosted by </em>
          {props.chefName}
        </h5>
      </div>
      <div className="chevron" />
    </Link>
  );
};

export default MeetTheChefs;
