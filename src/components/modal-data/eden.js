import React from "react";
import Gallery from "../gallery";

import edenHomepage from "../../images/eden-homepage.jpg";
import edenContact from "../../images/eden-contact.jpg";
import edenMusic from "../../images/eden-music.jpg";
import edenStore from "../../images/eden-store.jpg";
import edenTour from "../../images/eden-tour.jpg";

function EdenText(props) {
  const images = [
    {
      image: edenHomepage,
      alt: "the homepage for the eden promotional website",
    },
    {
      image: edenContact,
      alt: "instruction for jungle games",
    },
    {
      image: edenMusic,
      alt: "instruction for jungle games",
    },
    {
      image: edenStore,
      alt: "instruction for jungle games",
    },
    {
      image: edenTour,
      alt: "instruction for jungle games",
    },
  ];
  return (
    <>
      <Gallery images={images} />
      <h3>What was it?</h3>
      <p>
        This is a promtional site created in 2018 as part of a web design module
        I was taking. The brief was to create a static brochure style site,
        which functioned on both a 1920 x 1080, and 800 x 1280 display, using
        only HTML and CSS. I decided to create a new website for a musician
        known as Eden.
      </p>
      <h3>How did it work?</h3>
      <p>
        His{" "}
        <a
          href="https://web.archive.org/web/20180220111109/http://www.iameden.eu/"
          rel="noopener noreferrer"
          target="_blank"
        >
          original site
        </a>{" "}
        featured a single page created with Squarespace, which was difficult to
        navigate and wasn't visually appealing. I took inspiration from his
        music and brand, to create something that maintained his current style,
        while increasing usability and accessibility.
      </p>
      <h3>How was it made?</h3>
      <p>The site was created using HTML and CSS.</p>
    </>
  );
}

export default EdenText;
