import React, { useState } from "react"
import icon from "../../images/react-icon.png"

const ReactIcon = props => {
  return (
    <div className="techstack-item">
      <img src={icon} className="techstack-icon" alt="react icon" />
      <h3 className="techstack-title">React</h3>
    </div>
  )
}

export default ReactIcon
