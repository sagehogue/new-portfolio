import React from "react";
import "./DisplayWindow.css";
import { motion } from "framer-motion";

export default function DisplayWindow({ widget }) {
  console.log(widget);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="Widget-Display-Window"
    >
      <div className="Widget-Display-Title">{widget.title}</div>
      <div
        className={`Widget-Display-Wrapper  ${
          widget.hideOverflow ? "Widget-Display-Hide-Overflow" : ""
        } ${widget.hideOverflowX ? "Widget-Display-Hide-OverflowX" : ""} ${
          widget.hideOverflowY ? "Widget-Display-Hide-OverflowY" : ""
        }`}
      >
        {widget.element}
      </div>
      <div className="Widget-Display-Description">{widget.description}</div>
    </motion.div>
  );
}
