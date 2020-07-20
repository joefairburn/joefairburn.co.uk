import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import GalleryItem from "./galleryitem";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Button from "./button";

import PreviousIcon from "../images/icons/icons8_previous.inline.svg";
import NextIcon from "../images/icons/icons8_next.inline.svg";

function Gallery(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };
  const previousSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const updateCurrentSlide = index => {
    //re-sync state with carousel
    if (currentSlide !== index) setCurrentSlide(index);
  };

  const shouldRenderGalleryItem = index => {
    if (
      (index === 0 && currentSlide === props.images.length - 1) ||
      (currentSlide === 0 && index === props.images.length - 1)
    ) {
      console.log(index);

      return true;
    } else if (
      index === currentSlide ||
      index === currentSlide - 1 ||
      index === currentSlide + 1
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-buttons">
        <Button onClick={previousSlide} className="btn-indicator btn-previous">
          <PreviousIcon />
        </Button>
        <Button onClick={nextSlide} className="btn-indicator btn-next">
          <NextIcon />
        </Button>
      </div>
      <Carousel
        selectedItem={currentSlide}
        onChange={updateCurrentSlide}
        infiniteLoop
        swipeable
        emulateTouch
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        dynamicHeight={true}
        showThumbs={false}
      >
        {props.images.map((e, index) => (
          <GalleryItem
            className="gallery-image-container"
            image={e.image}
            alt={e.alt}
            key={index}
            style={{ display: shouldRenderGalleryItem ? "block" : "none" }}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Gallery;
