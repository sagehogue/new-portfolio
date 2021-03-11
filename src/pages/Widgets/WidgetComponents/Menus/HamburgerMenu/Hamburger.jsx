import React, { useState } from "react";
import styled from "styled-components";

const HamburgerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content; center;
  min-height: 3.5rem;
  min-width: 3.5rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 1rem;
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

const NavButton = styled.button`
  transition: all 0.2s;
  padding: 0.5rem 1rem;
  color: var(--color-text-i);
  font-family: var(--font-subheading);
  font-weight: 800;
  letter-spacing: 2px;
  background-color: rgba(3, 3, 3, 0.05);
  border: 2px whitesmoke solid;
  &:hover {
    background-color: rgba(3, 3, 3, 0.01);
    border: 2px #e9afa3 solid;
  }
  &:hover:active {
    background-color: rgba(3, 3, 3, 0.25);
  }
`;

const Tray = styled.nav`
  transition: all 0.2s;
  background-color: var(--color-i);
  padding: 0.25rem;
  min-height: 8.75rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(20rem)"};
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
    <>
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
      <Tray isOpen={menuIsOpen}>
        <NavButton>Home</NavButton>
        <NavButton>About</NavButton>
        <NavButton>Contact</NavButton>
      </Tray>
    </>
  );
}
