import logo from "./logo.svg";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import "./util/Theme.css";

import Landing from "./pages/Landing/Landing";
import Websites from "./pages/Websites/Websites";
import Widgets from "./pages/Widgets/Widgets";
import Art from "./pages/Art/Art";
import Writing from "./pages/Writing/Writing";
import Apps from "./pages/Apps/Apps";
import Navigation from "./components/Navigation/Navigation";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/websites">
            <Websites></Websites>
          </Route>
          <Route path="/Widgets">
            <Widgets></Widgets>
          </Route>
          <Route path="/apps">
            <Apps></Apps>
          </Route>
          <Route path="/art">
            <Art></Art>
          </Route>
          <Route path="/writing">
            <Writing></Writing>
          </Route>
          <Route exact path="/">
            <Landing></Landing>
          </Route>
        </Switch>
      </AnimatePresence>
      <Navigation location={location}></Navigation>
    </div>
  );
}

export default App;
