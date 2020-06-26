import React, { useCallback, useState } from "react"
import { useSpring, animated as a, interpolate } from "react-spring"

function WorkItem(props) {
  const [isHover, setHover] = useState(false)
  const toggleHover = () => {}

  return (
    <div
      className={"portfolio-item portfolio-hover-" + isHover}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={props.itemClicked}
    >
      <div className={"portfolio-layout"}>
        <div className={"item-shadow portfolio-shadow-hover-" + isHover} />
        <div className={"portfolio-container"}>
          <div className="image-container">
            <img src={props.image} alt={props.itemName} />
          </div>
          <div className="portfolio-description">
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkItem
