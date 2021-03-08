import React from "react";
import "./Cabinet.css";

export default function Cabinet({ widgets, clickHandler }) {
  console.log(widgets);
  return (
    <div className="Widget-Cabinet">
      {widgets.map((widget) => {
        return (
          <div
            className="Widget-Cabinet-Option"
            onClick={() => {
              clickHandler(widget.id);
            }}
          >
            {widget.title}
          </div>
        );
      })}
    </div>
  );
}
