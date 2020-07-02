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
      Typetest was created as part of a research project, looking at how to
      improve users typing ability in typing tests while using a computer
      keyboard. I did this by testing participants typing speed and error rate
      with various typefaces, and sizes. From this I was able to determine the
      optimal design for the most efficient typing. The result was this website,
      which was a slightly modified version of the research test.
    </>
  )
}

export default TypeTestText
