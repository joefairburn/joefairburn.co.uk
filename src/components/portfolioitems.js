import React from "react";
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
import WorkItem from "../components/workItem";

function PortfolioItems(props) {
  return (
    <div className="portfolio-items">
      <WorkItem
        background={{ image: standwithimage, alt: "" }}
        text={"StandWith"}
        itemClicked={() =>
          props.handleModalShow(
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
          props.handleModalShow(
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
          props.handleModalShow("The Jungle Games", <JungleGamesText />)
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
          props.handleModalShow("Research Quiz", <BiologyQuizText />)
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
          props.handleModalShow(
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
  );
}

export default PortfolioItems;
