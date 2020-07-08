import React from "react";
import TechUsed from "./techused";

function WorkItem(props) {
  const linkClicked = e => {
    e.preventDefault();
    props.itemClicked();
  };

  return (
    <a
      href="#modal"
      className={"portfolio-item"}
      onClick={linkClicked}
      tabIndex="0"
    >
      <div className="image-container">
        <TechUsed>
          {props.technologies &&
            props.technologies.map((tech, index) => (
              <div className="techstack-item" key={index}>
                {tech.icon}
                <p>{tech.name}</p>
              </div>
            ))}
        </TechUsed>
        <img src={props.background.image} alt={props.background.alt} />
      </div>
      <div className="portfolio-description">
        <p>{props.text}</p>
      </div>
    </a>
  );
}

export default WorkItem;
