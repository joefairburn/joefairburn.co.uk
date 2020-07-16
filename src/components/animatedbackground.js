import React, { useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useMediaPredicate } from "react-media-hook";

const AnimatedBackground = () => {
  //if user is using a mobile/tablet
  const isUsingMobile = useMediaPredicate("(orientation: portrait)");

  const isUsingLargeMobile = useMediaPredicate(
    "(min-height: 800px) and (orientation: portrait)"
  );

  const [{ tiles, background }, set] = useSpring(() => ({
    tiles: 0,
    background: isUsingLargeMobile ? -10 : 0,
  }));

  const interpBackRow = tiles.interpolate(o => `translateX(${o * -3}px)`);
  const interpFrontRow = tiles.interpolate(o => `translateX(${o * 2}px)`);
  const interpRotate = background.interpolate(o => `skewY(${o}deg)`);

  //re-adjust the background if the screensize switches to a mobile one
  useEffect(() => {
    set({
      tiles: 0,
      background: isUsingLargeMobile ? -10 : 0,
    });
  }, [isUsingLargeMobile]);

  useScrollPosition(({ currPos }) => {
    if (!isUsingMobile) {
      set({
        tiles: currPos.y,
        background: Math.min(Math.max(-10, currPos.y * 0.06), 0),
      });
    }
  });
  return (
    <div className="intro-background-layer" aria-hidden="true">
      <a.div
        className="intro-background background-image"
        style={{ transform: interpRotate }}
      />
      <div
        className="intro-background-tiles"
        style={{
          transform: "skewY(-10deg)",
          width: "100%",
          height: "100%",
        }}
      >
        <a.div
          className="back-row"
          style={{ transform: interpBackRow, width: "100%" }}
        >
          <span className="tile" />
        </a.div>
        <a.div
          className="front-row"
          style={{ transform: interpFrontRow, width: "100%" }}
        >
          <span className="tile" />
        </a.div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
