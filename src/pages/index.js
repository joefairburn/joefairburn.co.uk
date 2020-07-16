import React, { useState } from "react";

import SEO from "../components/seo";

import { isMobile } from "react-device-detect";

import AnimatedBackground from "../components/animatedbackground";

import Modal from "../components/modal";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

import "../css/styles.css";

import PortfolioItems from "../components/portfolioitems";

import Contact from "../components/contact";

function Index() {
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
    //substitute the size of the scrollbar when on desktop
    document.body.style.overflowY = "hidden";
    if (!isMobile) {
      document.body.style.paddingRight = "16px";
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
        <AnimatedBackground />
        <div className="intro-centered-title">
          <h1 className="intro-title-main">Hi, I'm Joe Fairburn</h1>
          <p className="intro-title-desc">
            I'm not your average Joe. I design and develop web experiences.
          </p>
        </div>
      </section>

      <section id="portfolio" className="section portfolio-section">
        <div className="portfolio-title">
          <h2>My Work</h2>
        </div>
        <PortfolioItems handleModalShow={handleModalShow} />
      </section>

      <section className="section contact-me">
        <div className="contact-content">
          <div className="contact-title">
            <h2>Like what I do? Let's collaborate.</h2>
          </div>
          <div className="contact-container">
            <Contact />
          </div>
        </div>
        <div className="background-container">
          <div className="background-image second-image" />
        </div>
      </section>

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
    </>
  );
}

export default Index;
