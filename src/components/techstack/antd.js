import React, { useState } from "react"
import icon from "../../images/antd-icon.png"

const AntdIcon = props => {
  return (
    <div className="techstack-item">
      <img src={icon} className="techstack-icon" alt="ant design icon" />
      <h3 className="techstack-title">Ant Design</h3>
    </div>
  )
}

export default AntdIcon
