import logo from "./logo.svg";
import router from "react-router";
import { motion } from "framer-motion";
import "./App.css";
import "./util/Theme.css";

import Landing from "./pages/Landing/Landing";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Landing></Landing>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
