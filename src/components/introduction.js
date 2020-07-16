import React, { useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useMediaPredicate } from "react-media-hook";

import AnimatedBackground from "../components/animatedbackground";

const Introduction = () => {
  return (
    <section className="intro">
      <AnimatedBackground />
      <div className="intro-centered-title">
        <h1 className="intro-title-main">Hi, I'm Joe Fairburn</h1>
        <h2 className="intro-title-desc">
          I'm not your average Joe. I design and develop websites.
        </h2>
      </div>
    </section>
  );
};

export default Introduction;
