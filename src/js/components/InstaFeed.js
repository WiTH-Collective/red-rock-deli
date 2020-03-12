import React from "react";

import { Link } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";

const InstaFeed = props => {
  return (
    <section className="InstaFeed">
      <div className="container2">
        <div className="content">
          <h2>@RED_ROCK_DELI</h2>
        </div>
        <div className="feed">
          <FeedItem
            description={`<span class="">Here is a sneak peak into the flavour-packed menu served at our latest Secret Supper. <a class="notranslate" href="/whoismsfrankie/">@whoismsfrankie</a> Head Chef Giorgio Distefano crafted a mouth-watering feast inspired by our new Chilli, Roast Garlic and Lemon Oil Deluxe crisps where each course was thoughtfully and carefully infused with these bold flavours. <a class=" xil3i" href="/explore/tags/redrockdelisecretsuppers/">#redrockdelisecretsuppers</a></span>`}
            itemUrl="/"
            imageUrl="https://instagram.fmel10-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/72780550_949458878747060_1968613544910104331_n.jpg?_nc_ht=instagram.fmel10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=YYJsEg9uFlYAX8SXe31&oh=41a7de870284c202c3c5847037ddc1ac&oe=5E900533"
          />
          <FeedItem
            description={`<span class="">Hosted by <a class="notranslate" href="/whoismsfrankie/">@whoismsfrankie</a> Head Chef Giorgio Distefano, our latest Secret Supper was a feast full of flavour. Guests were whisked away to a mystery location and indulged in a menu inspired by our new Chilli, Roast Garlic and Lemon Oil Deluxe crisp flavour. Here’s a glimpse into the event! <a class=" xil3i" href="/explore/tags/redrockdelisecretsuppers/">#redrockdelisecretsuppers</a></span>`}
            itemUrl="/"
            imageUrl="https://instagram.fmel10-1.fna.fbcdn.net/v/t51.2885-15/e35/71524205_2943009105726833_5627643656038038315_n.jpg?_nc_ht=instagram.fmel10-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=tuHM6swMtBgAX-JapKl&oh=6d830af4ece0209081ac8e7c5319689b&oe=5E8E9BB4"
          />
          <FeedItem
            description={`<span class="">Melbourne foodies united at a secret location for a decadent foraged flavour feast inspired by our Deluxe Parmesan and Black Truffle flavour. Here’s a glimpse into our Secret Supper featuring <a class="notranslate" href="/chefpaulturner/">@chefpaulturner</a> of <a class="notranslate" href="/lover3181/">@lover3181</a> <a class=" xil3i" href="/explore/tags/redrockdelisecretsuppers/">#redrockdelisecretsuppers</a></span>`}
            itemUrl="/"
            imageUrl="https://instagram.fmel10-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/69710178_2391010617807262_127912733086687594_n.jpg?_nc_ht=instagram.fmel10-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Z3mtoOD4ZV4AX_EvE75&oh=6fc4a0de12081917d23507c5f5b796c2&oe=5E8DEAC8"
          />
        </div>
      </div>

      <div className="showMore">
        <ButtonPrimary isBlack hideChevron buttonText="Show me more" />
      </div>
    </section>
  );
};

export default InstaFeed;

const FeedItem = props => {
  return (
    <Link className="item" to={props.itemUrl}>
      <img src={props.imageUrl} alt="Red Rock Deli Instagram Feed" />
      <div>
        <p dangerouslySetInnerHTML={{ __html: props.description }} />
      </div>
    </Link>
  );
};
