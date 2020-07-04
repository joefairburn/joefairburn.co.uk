import React from "react"
import Gallery from "../gallery"

import quiz from "../../images/quiz-question.jpg"
import quizIncorrect from "../../images/quiz-incorrect.jpg"
import quizInstructions from "../../images/quiz-instructions.jpg"
import quizFAQ from "../../images/quiz-FAQ.jpg"
import quizEnding from "../../images/quiz-ending.jpg"
import TechUsed from "../techused"
import ReactIcon from "../techstack/react"
import GatsbyIcon from "../techstack/gatsby"
import AntdIcon from "../techstack/antd"

function BiologyQuizText(props) {
  const images = [
    {
      image: quiz,
      alt: "gameplay of jungle games",
    },
    {
      image: quizInstructions,
      alt: "instruction for jungle games",
    },
    {
      image: quizFAQ,
      alt: "instruction for jungle games",
    },
    {
      image: quizIncorrect,
      alt: "instruction for jungle games",
    },
    {
      image: quizEnding,
      alt: "instruction for jungle games",
    },
  ]
  return (
    <>
      <Gallery images={images} />
      <p>
        The project involved creating a bespoke game in the form of a quiz, with
        the purpose of researching learning techniques amongst students. I
        worked closely with the client to achieve the specific requirements they
        requested.
      </p>
      <h2 className="list-title">The concept was simple:</h2>
      <ul>
        <li>There were 5 rounds</li>
        <li>
          At the beginning of each round, the player starts off with 5 points
        </li>
        <li>
          They then watch a video, and then answer several questions to test
          their knowledge on the subject
        </li>
        <li>
          If they answer all questions correctly, they proceed to the next
          round. Get one incorrect? They lose a point and must watch the whole
          video again
        </li>
        <li>
          When they complete the final round, the user is shown their score
        </li>
        <li>
          Statistics about a player’s performance, and behaviour were
          automatically saved to a Google Drive spreadsheet which colid be
          accessed by the client.
        </li>
      </ul>
      <TechUsed>
        <ReactIcon />
        <GatsbyIcon />
        <AntdIcon />
      </TechUsed>
    </>
  )
}

export default BiologyQuizText
