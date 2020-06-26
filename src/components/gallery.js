import React, { useState } from "react"
import { Carousel } from "react-responsive-carousel"
import GalleryItem from "./galleryitem"

import "react-responsive-carousel/lib/styles/carousel.min.css"

import Button from "./button"

function Gallery(props) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1)
  }
  const previousSlide = () => {
    setCurrentSlide(currentSlide - 1)
  }

  const updateCurrentSlide = index => {
    //re-sync state with carousel
    if (currentSlide !== index) setCurrentSlide(index)
  }

  return (
    <div>
      <div className="carousel-buttons">
        <Button onClick={previousSlide}>test</Button>
        <Button onClick={nextSlide}>test</Button>
      </div>
      <Carousel
        selectedItem={currentSlide}
        onChange={updateCurrentSlide}
        infiniteLoop
      >
        {props.images.map((e, index) => (
          <GalleryItem image={e.image} alt={e.alt} key={index} />
        ))}
      </Carousel>
    </div>
  )
}

export default Gallery
