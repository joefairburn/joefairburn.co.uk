import React, { useCallback, useState } from "react"
import { useSpring, animated as a, interpolate } from "react-spring"
import TechUsed from "./techused"

function WorkItem(props) {
  const [isHover, setHover] = useState(false)
  const toggleHover = () => {}

  const linkClicked = e => {
    e.preventDefault()
    props.itemClicked()
  }

  return (
    <a
      href="#modal"
      className={"portfolio-item"}
      onMouseLeave={() => setHover(false)}
      onClick={linkClicked}
      tabIndex="0"
    >
      <div className="image-container">
        <TechUsed
          className={`techstack-hidden-${!isHover}`}
          isHidden={!isHover}
        >
          {props.technologies &&
            props.technologies.map((tech, index) => (
              <div className="techstack-item" key={index}>
                {tech.icon}
                <p>{tech.name}</p>
              </div>
            ))}
        </TechUsed>
        <img src={props.image} alt={props.itemName} />
      </div>
      <div className="portfolio-description">
        <p>{props.text}</p>
      </div>
    </a>
  )
}

export default WorkItem
