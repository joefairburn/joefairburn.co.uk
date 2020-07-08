import React from "react";
import Gallery from "../gallery";

import typetest from "../../images/typetest.jpg";
import typetestProfile from "../../images/typetest-profile.jpg";
import typetestWPM from "../../images/typetest-WPM.jpg";

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
  ];
  return (
    <>
      <Gallery images={images} />
      <h3>What was it?</h3>
      <p>
        Typetest was created as part of a research project, looking at how to
        improve users typing ability in typing tests while using a computer
        keyboard.
      </p>
      <h3>How did it work?</h3>
      <p>
        I tested participants typing speed and error rate with various
        typefaces, and sizes. From this I was able to determine the optimal
        design for the most efficient typing. The result was this website, which
        was a slightly modified version of the research test, suitable for
        general use.
      </p>
      <h3>How was it made?</h3>
      <p>It was created in React using create-react-app.</p>
    </>
  );
}

export default TypeTestText;
