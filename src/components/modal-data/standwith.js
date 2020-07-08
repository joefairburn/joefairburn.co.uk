import React from "react";
function StandWith(props) {
  // const images = [
  //   {
  //     image: typetest,
  //     alt: "gameplay of jungle games",
  //   },
  //   {
  //     image: typetestWPM,
  //     alt: "instruction for jungle games",
  //   },
  //   {
  //     image: typetestProfile,
  //     alt: "instruction for jungle games",
  //   },
  // ]
  return (
    <>
      {/* <Gallery images={images} /> */}
      <h3>What was it?</h3>
      <p>
        This project was developed as an investigation into how technology could
        be used to aid political movements such as Black Lives Matter, with
        user’s privacy and anonymity placed at the forefront of the design.
      </p>
      <h3>How did it work?</h3>
      <p>
        The website provided the basic tools to create and manage events, while
        allowing communication between the host and attendees.
      </p>
      <h3>How was it made?</h3>
      <p>
        Firebase was used to store user and event data. I built the API to
        handle communications with the client using Firebase and Node.js with
        Express.
      </p>
      <p>
        The front-end was created with React and Next.js, alongside Redux. I
        then used Tailwind to implement the design
      </p>
    </>
  );
}

export default StandWith;
