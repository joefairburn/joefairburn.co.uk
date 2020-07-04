import React, { useState } from "react"
import icon from "../../images/gatsby-icon.png"

const GatsbyIcon = props => {
  return (
    <div className="techstack-item">
      <img src={icon} className="techstack-icon" alt="gatsby icon" />
      <h3 className="techstack-title">Gatsby</h3>
    </div>
  )
}

export default GatsbyIcon
