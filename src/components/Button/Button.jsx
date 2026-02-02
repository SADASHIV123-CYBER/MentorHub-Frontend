import getButtonStyling from "./getButtonStyling";
import React from "react";

function Button({ 
  text, 
  onClickHandler, 
  styleType = "primary", 
  type = "button", 
  disabled = false, 
  className = "" 
}) {
  return (
    <button
      onClick={onClickHandler}
      type={type}
      disabled={disabled}
      className={`${getButtonStyling(disabled ? "disabled" : styleType)} ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
