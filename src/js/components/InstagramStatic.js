import React, { useEffect, useState } from "react";

import { ExternalLink } from "react-external-link";
import ButtonPrimary from "./ButtonPrimary";

const Instagram = (props) => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const onResizeIG = () => {
        setIsLargeScreen(window.innerWidth >= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", onResizeIG);
        onResizeIG();
        return () => {
            window.removeEventListener("resize", onResizeIG);
        };
    }, []);

    return (
        <div className={"Instagram"}>
            <div className="container">
                <div className="content">
                    <h2>@RED_ROCK_DELI</h2>
                </div>
                <div className="feed-holder">
                    <div className="feed">
                        <FeedItem
                            itemUrl="https://www.instagram.com/p/B4MVQ9Zgdgb/"
                            imageUrl="https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/72780550_949458878747060_1968613544910104331_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=GdEWqHGPpboAX9noUCZ&oh=130e431e809366f4ce08c5b058851d8c&oe=5EB19BFC"
                        />
                        <FeedItem
                            itemUrl="https://www.instagram.com/p/B4Jsw3ZAkL7/"
                            imageUrl="https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/71524205_2943009105726833_5627643656038038315_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Zo0B7P5qEYUAX9SBeD9&oh=34cb98cb105e69e3d220a2b9a4ce2c8d&oe=5EB259F2"
                        />
                        <FeedItem
                            itemUrl="https://www.instagram.com/p/B23EfjJgQQd/"
                            imageUrl="https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/69710178_2391010617807262_127912733086687594_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=110&_nc_ohc=zw7Od6siIw0AX95VWsJ&oh=7d448f929138d038a452e3d711e8379a&oe=5EB27601"
                        />
                        <FeedItem
                            itemUrl="https://www.instagram.com/p/B1VPhH7AxnW/"
                            imageUrl="https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/67940028_484449465620959_8739000662221063558_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=P2wSSfa4EIcAX-i1RaU&oh=ba3f0a3effa018cffb30cab474eec01f&oe=5EB4C9B7"
                        />
                        {isLargeScreen ? (
                            <React.Fragment>
                                <FeedItem
                                    itemUrl="https://www.instagram.com/p/B1NzCi3ArjL/"
                                    imageUrl="https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/69394742_138188957426128_4950214119624120438_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=g_fMFWt8tWIAX-n8e_R&oh=12c244b5000256bcf4d104cc4cc22697&oe=5EB22106"
                                />
                                <FeedItem
                                    itemUrl="https://www.instagram.com/p/Bzb408kAWty/"
                                    imageUrl="https://scontent-syd2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/64817242_1127543994121855_5626788281314801686_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=FRguNdpmL0cAX990haE&oh=ebdf6ea8adeffe23615f0fcbf2dff6cf&oe=5EB53EFE"
                                />
                            </React.Fragment>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>

            <div className="showMore">
                <ButtonPrimary
                    buttonText="Show me more"
                    linkTo="https://www.instagram.com/red_rock_deli/"
                    isExternalLink
                >
                    Show me more
                </ButtonPrimary>
            </div>
        </div>
    );
};

export default Instagram;

const FeedItem = (props) => {
    // strip HTML tage from Instagram image description
    // const p = document.createElement("p");
    // p.innerHTML = props.description;
    // const description = p.innerText;

    return (
        <ExternalLink className="item" to={props.itemUrl}>
            <img src={props.imageUrl} alt="Red Rock Deli Instagram Feed" />
        </ExternalLink>
    );
};
