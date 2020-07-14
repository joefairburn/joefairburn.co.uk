import React from "react";
import Gallery from "../../components/gallery";
import standwithSearch from "../../images/standwith/standwith-search.jpg";
import standwithCreate from "../../images/standwith/standwith-create.jpg";
import standwithLogin from "../../images/standwith/standwith-login.jpg";
import standwithMain from "../../images/standwith/standwith-main.jpg";
import standwithEvent from "../../images/standwith/standwith-event.jpg";
function StandWith(props) {
  const images = [
    {
      image: standwithEvent,
      alt: "Event page for StandWith",
    },
    {
      image: standwithSearch,
      alt: "Search functionality of StandWith",
    },
    {
      image: standwithCreate,
      alt: "Event creation page for StandWith",
    },
    {
      image: standwithLogin,
      alt: "Login page for StandWith",
    },
    {
      image: standwithMain,
      alt: "Homepage for StandWith",
    },
  ];
  return (
    <>
      <Gallery images={images} />
      <h3>What was it?</h3>
      <p>
        This fully functioning prototype was developed as part of my final year
        project, where I explored how web technologies could be used to aid
        political movements. It differed from similar solutions by prioritising
        privacy and trying to minimize bias.
      </p>
      <h3>How did it work?</h3>
      <p>
        The website provided activists the basic tools to create and manage
        events, while allowing communication between the host and attendees.
      </p>
      <h3>How was it made?</h3>
      <p>
        I used Firebase to store user and event data. I built the API to handle
        communications with the client using Firebase and Node.js with Express.
      </p>
      <p>
        The front-end was created with React and Next.js, alongside Redux. I
        then used Tailwind to implement the design.
      </p>
    </>
  );
}

export default StandWith;
