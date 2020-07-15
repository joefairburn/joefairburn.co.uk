import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import SEO from "../components/seo";
import WorkItem from "../components/workItem";

import { isMobile } from "react-device-detect";

import Modal from "../components/modal";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

import "../css/styles.css";

import EdenText from "../components/modal-data/eden";
import BiologyQuizText from "../components/modal-data/biologyquiz";
import StandWith from "../components/modal-data/standwith";
import JungleGamesText from "../components/modal-data/junglegames";
import TypeTestText from "../components/modal-data/typetest";

import junglegamesimage from "../images/junglegames-sm.jpg";
import biologyquizimage from "../images/quiz-sm.jpg";
import typetestimage from "../images/typetest-sm.jpg";
import edenimage from "../images/eden-sm.jpg";
import standwithimage from "../images/standwith/standwith-sm.jpg";
import Contact from "../components/contact";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import {
  ReactLogo,
  Gatsby,
  NextDotJs,
  Unity,
  NodeDotJs,
  Html5,
  Css3,
  Redux,
  Firebase,
  Tailwindcss,
  Bootstrap,
  Mongodb,
} from "@styled-icons/simple-icons";

import { useMediaPredicate } from "react-media-hook";

function Index() {
  //if user is using a mobile/tablet
  const isUsingMobile = useMediaPredicate("(orientation: portrait)");

  const [{ tiles, background }, set] = useSpring(() => ({
    tiles: isUsingMobile ? -10 : 0,
    background: isUsingMobile ? -10 : 0,
  }));

  //re-adjust the background if the screensize switches to a mobile one
  useEffect(() => {
    set({
      tiles: isUsingMobile ? 0 : 0,
      background: isUsingMobile ? -10 : 0,
    });
  }, [isUsingMobile]);

  const interpBackRow = tiles.interpolate(o => `translateX(${o * -3}px)`);
  const interpFrontRow = tiles.interpolate(o => `translateX(${o * 2}px)`);
  const interpRotate = background.interpolate(o => `skewY(${o}deg)`);

  useScrollPosition(({ currPos }) => {
    if (!isUsingMobile) {
      set({
        tiles: currPos.y,
        background: Math.min(Math.max(-10, currPos.y * 0.06), 0),
      });
    }
  });

  const [modal, setModal] = useState({
    title: "",
    content: <div></div>,
    isHidden: true,
  });

  const handleModalClose = () => {
    document.body.style.overflowY = "unset";
    if (!isMobile) {
      document.body.style.paddingRight = "0px";
    }
    setModal({
      title: "",
      content: <div></div>,
      isHidden: true,
      url: "",
    });
  };

  const handleModalShow = (title, newText, url) => {
    console.log(isMobile);
    document.body.style.overflowY = "hidden";
    if (!isMobile) {
      document.body.style.paddingRight = "15px";
    }
    setModal({
      title: title,
      content: newText,
      isHidden: false,
      url: url,
    });
  };

  return (
    <>
      <SEO title="Home" />
      <section className="intro">
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

        <div className="intro-centered-title">
          <h1 className="intro-title-main">Hi, I'm Joe Fairburn</h1>
          <h2 className="intro-title-desc">
            I'm not your average Joe. I design and develop websites.
          </h2>
        </div>
      </section>

      <section id="portfolio" className="section portfolio-section">
        <div className="portfolio-title">
          <h2>My Work</h2>
        </div>
        <div className="portfolio-items">
          <WorkItem
            background={{ image: standwithimage, alt: "" }}
            text={"StandWith"}
            itemClicked={() =>
              handleModalShow(
                "StandWith",
                <StandWith />,
                "https://standwith.org"
              )
            }
            technologies={[
              {
                icon: <ReactLogo />,
                name: "React",
              },
              { icon: <Redux />, name: "Redux" },
              { icon: <NextDotJs />, name: "Next.js" },
              { icon: <Firebase />, name: "Firebase" },
              { icon: <NodeDotJs />, name: "Node.js" },
              { icon: <Tailwindcss />, name: "Tailwind" },
            ]}
          />
          <WorkItem
            background={{
              image: typetestimage,
              alt:
                "Gameplay of 'typtest', where user is entering a quote into a input box.",
            }}
            text={"TypeTest"}
            itemClicked={() =>
              handleModalShow(
                "TypeTest",
                <TypeTestText />,
                "https://www.joefairburn.co.uk/typetest"
              )
            }
            technologies={[
              {
                icon: <ReactLogo />,
                name: "React",
              },
            ]}
          />
          <WorkItem
            background={{
              image: junglegamesimage,
              alt:
                "Users gathered round playing 'Jungle Games' on their phones in front of a TV",
            }}
            text={"The Jungle Games"}
            itemClicked={() =>
              handleModalShow("The Jungle Games", <JungleGamesText />)
            }
            technologies={[
              {
                icon: <ReactLogo />,
                name: "React",
              },
              { icon: <Bootstrap />, name: "Bootstrap" },
              { icon: <Unity />, name: "Unity" },
              { icon: <NodeDotJs />, name: "Node.js" },
              { icon: <Mongodb />, name: "MongoDB" },
            ]}
          />
          <WorkItem
            background={{
              image: biologyquizimage,
              alt:
                "Demonstration of the first round of the quiz, with a video displayed in the center of the website",
            }}
            text={"Research Quiz"}
            itemClicked={() =>
              handleModalShow("Research Quiz", <BiologyQuizText />)
            }
            technologies={[
              {
                icon: <ReactLogo />,
                name: "React",
              },
              { icon: <Gatsby />, name: "Gatsby" },
            ]}
          />
          <WorkItem
            background={{
              image: edenimage,
              alt:
                "Homepage for the Eden website. Features a picture of Eden, with a header and title",
            }}
            text={"Promotional Site"}
            itemClicked={() =>
              handleModalShow(
                "Promotional Site",
                <EdenText />,
                "https://www.joefairburn.co.uk/eden/"
              )
            }
            technologies={[
              {
                icon: <Html5 />,
                name: "HTML",
              },
              { icon: <Css3 />, name: "CSS" },
            ]}
          />
        </div>
        {!modal.isHidden && (
          <Modal
            title={modal.title}
            url={modal.url}
            modalIsHidden={modal.isHidden}
            closeModal={handleModalClose}
          >
            {modal.content}
          </Modal>
        )}
      </section>
      <section className="section contact-me">
        <div className="contact-content">
          <div className="contact-title">
            <h2>Contact Me</h2>
          </div>
          <div className="contact-container">
            <Contact />
          </div>
        </div>
        <div className="background-container">
          <div className="background-image second-image" />
        </div>
      </section>
    </>
  );
}

export default Index;
