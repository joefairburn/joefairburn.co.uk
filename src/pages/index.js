import React, { useCallback, useState } from "react"
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

function Index() {
  const [{ st, sk }, set] = useSpring(() => ({ st: 0, sk: 0 }))
  const interpTopRow = st.interpolate(o => `translateX(${o * 0.7}px)`)
  const interpMiddleRow = st.interpolate(o => `translateX(${-(o * 0.7)}px)`)
  const interpBottomRow = st.interpolate(o => `translateX(${o * 0.7}px)`)
  const interpRotate = sk.interpolate(o => `skewY(${o}deg)`)
  const onScroll = e => {
    if (modal.isHidden) {
      set({
        st: e.target.scrollTop,
        sk: Math.min(Math.max(-10, e.target.scrollTop * -0.06), 0),
      })
    }
  }
  const [modal, setModal] = useState({
    title: "",
    content: <div></div>,
    isHidden: true,
  })

  const handleModalClose = () =>
    setModal({
      title: "",
      content: <div></div>,
      isHidden: true,
      url: "",
    })

  const handleModalShow = (title, newText, url) =>
    setModal({
      title: title,
      content: newText,
      isHidden: false,
      url: url,
    })

  return (
    <main onScroll={onScroll}>
      <div className="index">
        <SEO title="Home" />
        <header>
          <a.div
            className="background-image"
            style={{ transform: interpRotate }}
          />
          <div className="header-background">
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
                <span />
                <span />
              </a.div>
              <a.div
                className="middle-row"
                style={{ transform: interpMiddleRow, width: "100%" }}
              >
                <span />
                <span />
              </a.div>
              <a.div
                className="bottom-row"
                style={{ transform: interpBottomRow, width: "100%" }}
              >
                <span />
                <span />
                <span />
                <span />
              </a.div>
            </div>
          </div>

          <div className="centered-title">
            <h1 className="title-name">Joe Fairburn</h1>
            <h2 className="dev-name">Front-end Developer</h2>
          </div>
        </header>

        <section id="portfolio" className="portfolio-section">
          <div className="portfolio-title">
            <h1>My Work</h1>
          </div>
          <div className="portfolio-items">
            <WorkItem
              image={junglegamesimage}
              text={"The Jungle Games"}
              itemClicked={() =>
                handleModalShow("The Jungle Games", <JungleGamesText />)
              }
            />
            <WorkItem
              image={biologyquizimage}
              text={"Research Quiz"}
              itemClicked={() =>
                handleModalShow("Research Quiz", <BiologyQuizText />)
              }
            />
            <WorkItem
              image={typetestimage}
              text={"Typing Test"}
              itemClicked={() =>
                handleModalShow(
                  "Typing Test",
                  <TypeTestText />,
                  "https://www.joefairburn.co.uk/typetest"
                )
              }
            />
            <WorkItem
              text={"StandWith"}
              itemClicked={() =>
                handleModalShow(
                  "StandWith",
                  <StandWith />,
                  "https://standwith.org"
                )
              }
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
            />
          </div>
          <Modal
            title={modal.title}
            url={modal.url}
            modalIsHidden={modal.isHidden}
            closeModal={handleModalClose}
          >
            {modal.content}
          </Modal>
        </section>
        <section className="contact-me">
          <div className="contact-content">
            <div className="contact-title">
              <h1>Contact Me</h1>
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
    </main>
  )
}

export default Index
