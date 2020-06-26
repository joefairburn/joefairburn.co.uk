import React from "react"
import Gallery from "../gallery"

import typetest from "../../images/typetest.jpg"
import typetestProfile from "../../images/typetest-profile.jpg"
import typetestWPM from "../../images/typetest-WPM.jpg"

function TypeTestText(props) {
  const images = [
    {
      image: typetest,
      alt: "gameplay of jungle games",
    },
    {
      image: typetestWPM,
      alt: "instruction for jungle games",
    },
    {
      image: typetestProfile,
      alt: "instruction for jungle games",
    },
  ]
  return (
    <>
      <Gallery images={images} />
      This website was created as part of a research project, looking at how to
      improve users typing speed in typing speed tests. The
    </>
  )
}

export default TypeTestText
