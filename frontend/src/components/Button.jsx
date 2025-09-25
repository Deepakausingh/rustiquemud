import React from "react";
import "../CSS/Button.css"; // Import the separate CSS

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button className={`custom-button ${className}`} {...props}>
      {children}
    </button>
  );
};
