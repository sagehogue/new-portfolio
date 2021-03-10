import React, { useEffect, useState } from "react";
import "./Cabinet.css";
import DisplayWindow from "./DisplayWindow/DisplayWindow";
import { AnimatePresence, motion } from "framer-motion";
export default function Cabinet({
  menuWidgets,
  buttonWidgets,
  effectWidgets,
  clickHandler,
  shouldDisplayWidget,
  menuSelection,
}) {
  let determineWidgetList = (selection) => {
    switch (selection) {
      case "Menus":
        return menuWidgets;
      case "Buttons":
        return buttonWidgets;
      case "Effects":
        return effectWidgets;
    }
  };
  let [widgetList, setWidgetList] = useState(
    determineWidgetList(menuSelection)
  );
  let [widget, setWidget] = useState(false);
  useEffect(() => {
    setWidgetList(determineWidgetList(menuSelection));
  }, [menuSelection]);
  let widgetView = (
    <DisplayWindow widget={shouldDisplayWidget} key={"Cabinet-Widget-View"} />
  );
  let selectionView = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={"Cabinet-Selection-View"}
    >
      {widgetList.map((widget) => {
        return (
          <div
            className="Widget-Cabinet-Option"
            onClick={() => {
              clickHandler(widget);
            }}
          >
            {widget.title}
          </div>
        );
      })}
    </motion.div>
  );
  return (
    <div className="Widget-Cabinet">
      <AnimatePresence exitBeforeEnter>
        {shouldDisplayWidget ? widgetView : selectionView}
      </AnimatePresence>
    </div>
  );
}
