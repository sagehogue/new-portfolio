import React, { useState } from "react";
import Template from "../Template";
import "./Widgets.css";
import PageHeading from "../../components/UI/PageHeading/PageHeading";
import Cabinet from "./Cabinet/Cabinet.jsx";
import { AnimatePresence } from "framer-motion";

// selection controls which widget group is selected
// display controls what specific widget is displayed

export default function Widgets() {
  let [selection, setSelection] = useState("Menus");
  let [display, setDisplay] = useState("selection");
  let menuClickHandler = (e) => {
    if (e.target.innerText === selection) {
      return;
    } else {
      setSelection(e.target.innerText);
    }
  };
  const MenuCabinet = (
    <Cabinet
      clickHandler={(widget) => setDisplay(widget)}
      widgets={[
        {
          title: "Menu 1",
          id: "widget-menu-01",
          element: <div>Test test test Menu 1</div>,
          description: "This is our first test element",
        },
      ]}
    >
      <span>Menu 2</span>
      <span>Menu 3</span>
      <span>Menu 4</span>
      <span>Menu 5</span>
    </Cabinet>
  );
  const ButtonCabinet = (
    <Cabinet
      clickHandler={(widget) => setDisplay(widget)}
      widgets={[
        {
          title: "button 1",
          id: "widget-button-01",
          element: <div>Test test test button 1</div>,
          description: "This is our first test element",
        },
      ]}
    ></Cabinet>
  );
  const EffectCabinet = (
    <Cabinet
      clickHandler={(widget) => setDisplay(widget)}
      widgets={[
        {
          title: "effect 1",
          id: "widget-effect-01",
          element: <div>Test test test effect 1</div>,
          description: "This is our first test element",
        },
      ]}
    ></Cabinet>
  );
  return (
    <Template>
      <div className="Widget-Title-Placement">
        <PageHeading>Widgets</PageHeading>
      </div>
      <ul className="Widget-Navigation">
        <span
          onClick={menuClickHandler}
          className={`Widget-Tab Widget-Menus ${
            selection === "Menus" ? "Widget-Tab-Active" : ""
          }`}
        >
          Menus
        </span>
        <span
          onClick={menuClickHandler}
          className={`Widget-Tab Widget-Menus ${
            selection === "Buttons" ? "Widget-Tab-Active" : ""
          }`}
        >
          Buttons
        </span>
        <span
          onClick={menuClickHandler}
          className={`Widget-Tab Widget-Menus ${
            selection === "Effects" ? "Widget-Tab-Active" : ""
          }`}
        >
          Effects
        </span>
      </ul>
      <AnimatePresence exitBeforeEnter>
        {selection == "Menus"
          ? MenuCabinet
          : selection == "Buttons"
          ? ButtonCabinet
          : selection == "Effects"
          ? EffectCabinet
          : null}
      </AnimatePresence>
    </Template>
  );
}
