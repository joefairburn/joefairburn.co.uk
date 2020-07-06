import React from "react"
import Gallery from "../gallery"

import quiz from "../../images/quiz-question.jpg"
import quizIncorrect from "../../images/quiz-incorrect.jpg"
import quizInstructions from "../../images/quiz-instructions.jpg"
import quizFAQ from "../../images/quiz-FAQ.jpg"
import quizEnding from "../../images/quiz-ending.jpg"
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
      <h3>What was it?</h3>
      <p>
        This project involved creating a bespoke game in the form of a quiz,
        with the purpose of researching learning techniques amongst students. I
        worked closely with the client to achieve the specific requirements they
        requested.
      </p>
      <h3 className="description-title">How did it worked?</h3>
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
      <h3>How was it made?</h3>
      <p>
        The front-end was created using React and Gatsby. It then used the
        Google Sheets API to save each individual result to a spreadsheet which
        could be accessed by the client.
      </p>
    </>
  )
}

export default BiologyQuizText
