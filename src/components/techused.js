import React from "react";

const TechUsed = props => {
  return (
    <div className={`techstack-container`}>
      <h3 className="techstack-builtwith">Built With</h3>
      <div className={`techstack-icon-list`}>{props.children}</div>
    </div>
  );
};

export default TechUsed;
