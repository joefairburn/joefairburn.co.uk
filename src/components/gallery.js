import React, { useCallback, useState } from "react"
import { Carousel } from "react-responsive-carousel"
import GalleryItem from "./galleryitem"

import "react-responsive-carousel/lib/styles/carousel.min.css"

function Gallery(props) {
  const [isHover, setHover] = useState(false)
  const toggleHover = () => {}

  return (
    <Carousel className="">
      {props.images.map((e, index) => (
        <GalleryItem image={e.image} alt={e.alt} key={index} />
      ))}
    </Carousel>
  )
}

export default Gallery
