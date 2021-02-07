import React from "react";
import "./Navigation.css";
import Button from "../UI/Button/Button";
export default function Navigation() {
  return (
    <div className="Navigation">
      <ul className="Navigation-Category">
        <h2 className="Navigation-Label">Tech</h2>
        <hr />
        <Button className="Navigation-Button">Websites</Button>
        <Button className="Navigation-Button">Widgets</Button>
        <Button className="Navigation-Button">Apps</Button>
      </ul>
      <ul className="Navigation-Category">
        <h2 className="Navigation-Label">Creative</h2>
        <hr />
        <Button className="Navigation-Button">Writing</Button>
        <Button className="Navigation-Button">Blog</Button>
        <Button className="Navigation-Button">Art</Button>
      </ul>
    </div>
  );
}
