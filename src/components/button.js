import React from "react";

const Button = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={`btn btn-round ${className}`}>
      {children}
    </button>
  );
};

export default Button;
