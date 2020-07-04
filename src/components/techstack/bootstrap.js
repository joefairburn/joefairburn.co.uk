import React, { useState } from "react"
import icon from "../../images/gatsby-icon.png"

const BootstrapIcon = props => {
  return (
    <div className="techstack-item">
      <img src={icon} className="techstack-icon" alt="bootstrap icon" />
      <h3 className="techstack-title">Bootstrap</h3>
    </div>
  )
}

export default BootstrapIcon
