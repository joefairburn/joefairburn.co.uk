import React from "react"
import Gallery from "../gallery"

import edenHomepage from "../../images/eden-homepage.jpg"
import edenContact from "../../images/eden-contact.jpg"
import edenMusic from "../../images/eden-music.jpg"
import edenStore from "../../images/eden-store.jpg"
import edenTour from "../../images/eden-tour.jpg"

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
  ]
  return (
    <>
      <Gallery images={images} />
    </>
  )
}

export default EdenText
