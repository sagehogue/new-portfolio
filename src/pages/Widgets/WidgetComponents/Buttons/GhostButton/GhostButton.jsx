import React from "react";
import styled from "styled-components";
const Button = styled.button`
  transition: all 0.2s;
  padding: 0.5rem 1rem;
  color: whitesmoke;
  font-family: var(--font-subheading);
  font-weight: 800;
  letter-spacing: 2px;
  background-color: rgba(3, 3, 3, 0.125);
  border: 2px rgba(3, 3, 3, 0.25) solid;
  text-transform: uppercase;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 2px 6px 4px 3px rgba(3, 3, 3, 0.15);
  }
  &:hover:active {
    transform: translateY(2px);
    box-shadow: 1px 2px 2px 2px rgba(3, 3, 3, 0.25);
  }
`;
export default function GhostButton({ children }) {
  return <Button>{children}</Button>;
}
