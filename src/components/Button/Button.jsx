import getButtonStyling from "./getButtonStyling";
import React from "react";

function Button({ 
  text, 
  specialText,
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
      <p className="block hover:[transform:translateY(-0.5px)]">{specialText}</p>
    </button>
  );
}

export default Button;
