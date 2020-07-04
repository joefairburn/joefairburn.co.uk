import React, { useState } from "react"
import icon from "../../images/antd-icon.png"

const Node = props => {
  return (
    <div className="techstack-item">
      <img src={icon} className="techstack-icon" alt="node icon" />
      <h3 className="techstack-title">Node.js</h3>
    </div>
  )
}

export default Node
