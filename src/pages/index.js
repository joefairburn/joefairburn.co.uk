import React, { useCallback, useState, useEffect } from "react"
import { useSpring, animated as a, interpolate } from "react-spring"
import SEO from "../components/seo"
import WorkItem from "../components/workItem"

import Modal from "../components/modal"

import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/typography.css"

import "../components/styles.css"

import EdenText from "../components/modal-data/eden"
import BiologyQuizText from "../components/modal-data/biologyquiz"
import StandWith from "../components/modal-data/standwith"
import JungleGamesText from "../components/modal-data/junglegames"
import TypeTestText from "../components/modal-data/typetest"

import junglegamesimage from "../images/junglegames-demo.jpg"
import biologyquizimage from "../images/quiz-question.jpg"
import typetestimage from "../images/typetest.jpg"
import edenimage from "../images/eden-homepage.jpg"
import Contact from "../components/contact"

import { useScrollPosition } from "@n8tb1t/use-scroll-position"

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
} from "@styled-icons/simple-icons"

import { useMediaPredicate } from "react-media-hook"

function Index() {
  const [{ st, sk }, set] = useSpring(() => ({ st: 0, sk: 0 }))
  const interpTopRow = st.interpolate(o => `translateX(${o * -3}px)`)
  const interpMiddleRow = st.interpolate(o => `translateX(${o * 3}px)`)
  const interpBottomRow = st.interpolate(o => `translateX(${o * -0.6}px)`)
  const interpRotate = sk.interpolate(o => `skewY(${o}deg)`)

  const isUsingMobile = useMediaPredicate("(max-width: 450px)")

  useScrollPosition(({ currPos }) => {
    if (!isUsingMobile)
      set({
        st: currPos.y,
        sk: Math.min(Math.max(-10, currPos.y * 0.06), 0),
      })
  })

  const [modal, setModal] = useState({
    title: "",
    content: <div></div>,
    isHidden: true,
  })

  const handleModalClose = () => {
    document.body.style.overflow = "unset"
    document.body.style.paddingRight = "0px"
    setModal({
      title: "",
      content: <div></div>,
      isHidden: true,
      url: "",
    })
  }

  const handleModalShow = (title, newText, url) => {
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = "15px"
    setModal({
      title: title,
      content: newText,
      isHidden: false,
      url: url,
    })
  }

  return (
    <>
      <div className="index">
        <SEO title="Home" />
        <header>
          <div className="header-background">
            <a.div
              className="background-image"
              style={{ transform: interpRotate }}
            />
            <div
              className="hero-background"
              style={{
                transform: "skewY(-10deg)",
                width: "100%",
                height: "100%",
              }}
            >
              <a.div
                className="top-row"
                style={{ transform: interpTopRow, width: "100%" }}
              >
                <span />
              </a.div>
              <a.div
                className="middle-row"
                style={{ transform: interpMiddleRow, width: "100%" }}
              >
                <span />
              </a.div>
              {/* <a.div
                className="bottom-row"
                style={{ transform: interpBottomRow, width: "100%" }}
              >
                <span />
              </a.div> */}
            </div>
          </div>

          <div className="centered-title">
            <h1 className="title-main">Hi, I'm Joe Fairburn</h1>
            <h2 className="title-desc">
              I'm not your average Joe. I design and develop websites.
            </h2>
          </div>
        </header>

        <section id="portfolio" className="portfolio-section">
          <div className="portfolio-title">
            <h2>My Work</h2>
          </div>
          <div className="portfolio-items">
            <WorkItem
              image={junglegamesimage}
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
              image={biologyquizimage}
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
                ,
              ]}
            />
            <WorkItem
              image={typetestimage}
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
              image={typetestimage}
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
              image={edenimage}
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
                ,
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
        <section className="contact-me">
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
      </div>
    </>
  )
}

export default Index
