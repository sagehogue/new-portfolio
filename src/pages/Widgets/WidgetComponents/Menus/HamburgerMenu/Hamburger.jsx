import React from "react";
import styled from "styled-components";
import "./Hamburger.css";

export default function Hamburger() {
  return (
    <div className="Menu-Widget--Hamburger">
      <div className="Menu-Widget--Hamburger-Top-Div Menu-Widget--Hamburger-Div"></div>
      <div className="Menu-Widget--Hamburger-Middle-Div Menu-Widget--Hamburger-Div"></div>
      <div className="Menu-Widget--Hamburger-Bottom-Div Menu-Widget--Hamburger-Div"></div>
    </div>
  );
}
