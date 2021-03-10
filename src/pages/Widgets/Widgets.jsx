import React, { useState, useEffect } from "react";
import Template from "../Template";
import "./Widgets.css";
import PageHeading from "../../components/UI/PageHeading/PageHeading";
import Cabinet from "./Cabinet/Cabinet.jsx";
import { AnimatePresence, motion } from "framer-motion";

import menuWidgets from "./MenuWidgets";
import buttonWidgets from "./ButtonWidgets";
import effectWidgets from "./EffectWidgets";

// selection controls which widget group is selected
// display controls what specific widget is displayed

export default function Widgets() {
  let [selection, setSelection] = useState("Menus");
  let [display, setDisplay] = useState(false);
  let menuClickHandler = (e) => {
    if (e.target.innerText === selection) {
      setDisplay(false);
      return;
    } else {
      setSelection(e.target.innerText);
      setDisplay(false);
    }
  };

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
      <Cabinet
        clickHandler={(widget) => setDisplay(widget)}
        shouldDisplayWidget={display}
        menuSelection={selection}
        menuWidgets={menuWidgets}
        buttonWidgets={buttonWidgets}
        effectWidgets={effectWidgets}
      ></Cabinet>
    </Template>
  );
}
