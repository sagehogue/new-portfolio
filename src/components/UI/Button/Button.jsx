import React from "react";
import "./Button.css";
export default function Button({ children, clickHandler = false }) {
  return (
    <button type="button" className="Button" onClick={clickHandler}>
      {children}
    </button>
  );
}
