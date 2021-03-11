import React, { useState } from "react";
import styled from "styled-components";

const HamburgerStyle = styled.div`
  display: flex;
  flex-direction: column;

  cursor: pointer;
  transition: all 0.2s;
  & .Menu-Widget--Hamburger-Top-Div {
    transform: ${(props) =>
      props.isOpen ? "translateY(160%) rotate(45deg) " : "none"};
  }
  & .Menu-Widget--Hamburger-Middle-Div {
    opacity: ${(props) => (props.isOpen ? "0" : "1")};
  }
  & .Menu-Widget--Hamburger-Bottom-Div {
    transform: ${(props) =>
      props.isOpen ? "translateY(-160%)rotate(-45deg) " : "none"};
  }
`;
const HamburgerDiv = styled.div`
  width: 4.5rem;
  height: 0.45rem;
  background-color: var(--color-text-i);
  margin-top: 0.3rem;
  transition: all 0.2s, opacity 0.1s;
  background-color: ${(props) =>
    props.isOpen ? `var(--color-text-highlight)` : "var(--color-vi)"};
`;

export default function Hamburger() {
  let [menuIsOpen, setMenuIsOpen] = useState(false);
  let toggleMenu = () => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    } else {
      setMenuIsOpen(true);
    }
  };
  return (
    <HamburgerStyle
      className="Menu-Widget--Hamburger"
      onClick={toggleMenu}
      isOpen={menuIsOpen}
    >
      <HamburgerDiv
        className="Menu-Widget--Hamburger-Top-Div"
        isOpen={menuIsOpen}
      ></HamburgerDiv>
      <HamburgerDiv
        className="Menu-Widget--Hamburger-Middle-Div"
        isOpen={menuIsOpen}
      ></HamburgerDiv>
      <HamburgerDiv
        className="Menu-Widget--Hamburger-Bottom-Div"
        isOpen={menuIsOpen}
      ></HamburgerDiv>
    </HamburgerStyle>
  );
}
