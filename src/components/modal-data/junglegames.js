import React from "react";

import Gallery from "../gallery";

import junglegamesStart from "../../images/junglegames-start.jpg";
import junglegamesInstructions from "../../images/junglegames-instructions.jpg";
import junglegamesDemo from "../../images/junglegames-demo.jpg";
import junglegamesPhone from "../../images/junglegames-phone.jpg";
import junglegamesLiarLiarGameplay from "../../images/junglegames-liarliar.jpg";
import junglegamesLiarLiarQuestion from "../../images/junglegames-liarliarQ.jpg";

function JungleGames(props) {
  const images = [
    {
      image: junglegamesDemo,
      alt: "instruction for jungle games",
    },
    {
      image: junglegamesStart,
      alt: "gameplay of jungle games",
    },
    {
      image: junglegamesInstructions,
      alt: "instruction for jungle games",
    },
    {
      image: junglegamesPhone,
      alt: "instruction for jungle games",
    },
    {
      image: junglegamesLiarLiarQuestion,
      alt: "Question for the minigame liar liar",
    },
    {
      image: junglegamesLiarLiarGameplay,
      alt: "People playing the minigame liar liar",
    },
  ];
  return (
    <>
      <Gallery images={images} />
      <h3>What was it?</h3>
      <p>
        The Jungle Games is an online multiplayer game consisting of three
        minigames. I created it alongside three of my peers during my second
        year at university, my role was to implement the games and designs that
        my team produced.
      </p>
      <h3>How did it work?</h3>
      <p>
        The game was hosted on a PC using a client developed in Unity. The
        players then interacted with the game using their phones to input
        answers to the prompts which they received. They could then vote on
        whose answers were the best or the wittiest, and the results would then
        be showed on the PC client.
      </p>
      <p>
        The game was designed as an exhibition piece and was featured at the
        University of York Interactive Media showcase, where we had over a
        hundred total players throughout the whole event. The idea was that it
        would bring strangers together, by encouraging them to open up and be
        themselves throughout the game.
      </p>
      <h3>How was it made?</h3>
      <p>
        The backend of the application was hosted using Node.js and Express,
        with a MongoDB database to store game data. The web application was
        created using React, and the PC client was made with Unity.
      </p>
    </>
  );
}

export default JungleGames;
