import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Button from "../UI/Button/Button";
export default function Navigation({ location }) {
  console.log(location.pathname);
  const [url, setUrl] = useState(location.pathname);
  if (url !== "/") {
    const urlStrings = url.split("/");
  }
  return (
    <div className="Navigation">
      <ul className="Navigation-Category">
        <h2 className="Navigation-Label">Tech</h2>
        <hr />
        <li>
          <Link to="/websites">
            <Button className="Navigation-Button">Websites</Button>
          </Link>
        </li>
        <li>
          <Link to="/widgets">
            <Button className="Navigation-Button">Widgets</Button>
          </Link>
        </li>
        <li>
          <Link to="/apps">
            <Button className="Navigation-Button">Apps</Button>
          </Link>
        </li>
      </ul>
      <ul className="Navigation-Category">
        <h2 className="Navigation-Label">Creative</h2>
        <hr />
        <li>
          <Link to="/writing">
            <Button className="Navigation-Button">Writing</Button>
          </Link>
        </li>
        {/* <li>
          <Link to="/blog">
            <Button className="Navigation-Button">Blog</Button>
          </Link>
        </li> */}
        <li>
          <Link to="/art">
            <Button className="Navigation-Button">Art</Button>
          </Link>
        </li>
      </ul>
      {/* <div className={"Triangle"} /> */}
    </div>
  );
}
