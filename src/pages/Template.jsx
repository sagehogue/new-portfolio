import React from "react";
import "./Template.css";
import { motion } from "framer-motion";

import {
  changeWebPage,
  changeWebPageTriangle,
  transition,
} from "../animations";
export default function Template({ children }) {
  return (
    <>
      <motion.div
        className="Top-Nav-Triangle"
        initial="out"
        animate="in"
        exit="out"
        variants={changeWebPageTriangle}
        transition={transition}
      ></motion.div>
      <motion.div
        className="PageContent"
        initial="out"
        animate="in"
        exit="out"
        variants={changeWebPageTriangle}
        transition={transition}
      >
        {children}
      </motion.div>
      <motion.div
        className="Bottom-Nav-Triangle"
        initial="out"
        animate="in"
        exit="out"
        variants={changeWebPageTriangle}
        transition={transition}
      ></motion.div>
    </>
  );
}
