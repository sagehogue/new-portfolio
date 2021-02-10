import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Button from "../UI/Button/Button";
export default function Navigation({ location }) {
  console.log(location.pathname);
  const [url, setUrl] = useState(location.pathname);
  const [currentLocation, setCurrentLocation] = useState(location.pathname);

  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location.pathname]);
  // const locations = ["writing", "websites", "widgets", "apps", "art"];
  // if (url !== "/") {
  //   const location = url.split("/").filter((string) => string.length > 0);
  //   console.log(location);
  //   if (location.contains("websites")) {
  //     setCurrentLocation("websites");
  //   } else if (location.contains("widgets")) {
  //     setCurrentLocation("widgets");
  //   } else if (location.contains("apps")) {
  //     setCurrentLocation("apps");
  //   } else if (location.contains("art")) {
  //     setCurrentLocation("art");
  //   } else if (location.contains("writing")) {
  //     setCurrentLocation("writing");
  //   }
  // }
  return (
    <div className="Navigation">
      <ul className="Navigation-Category">
        <h2 className="Navigation-Label">Tech</h2>
        <hr />
        <li
          className={currentLocation == "/websites" ? "Navigation-Active" : ""}
        >
          <Link to="/websites">
            <Button className="Navigation-Button">Websites</Button>
          </Link>
        </li>
        <li
          className={currentLocation == "/widgets" ? "Navigation-Active" : ""}
        >
          <Link to="/widgets">
            <Button className="Navigation-Button">Widgets</Button>
          </Link>
        </li>
        <li className={currentLocation == "/apps" ? "Navigation-Active" : ""}>
          <Link to="/apps">
            <Button className="Navigation-Button">Apps</Button>
          </Link>
        </li>
      </ul>
      <ul className="Navigation-Category">
        <h2 className="Navigation-Label">Creative</h2>
        <hr />
        <li
          className={currentLocation == "/writing" ? "Navigation-Active" : ""}
        >
          <Link to="/writing">
            <Button className="Navigation-Button">Writing</Button>
          </Link>
        </li>
        {/* <li>
          <Link to="/blog">
            <Button className="Navigation-Button">Blog</Button>
          </Link>
        </li> */}
        <li className={currentLocation == "/art" ? "Navigation-Active" : ""}>
          <Link to="/art">
            <Button className="Navigation-Button">Art</Button>
          </Link>
        </li>
      </ul>
      {/* <div className={"Triangle"} /> */}
    </div>
  );
}
