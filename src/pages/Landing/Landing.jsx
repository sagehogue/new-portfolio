import React from "react";
import { motion } from "framer-motion";
import Template from "../Template";
import PageHeading from "../../components/UI/PageHeading/PageHeading";
import SubHeading from "../../components/UI/SubHeading/SubHeading";

import award from "../../img/award.svg";

import "./Landing.css";
import { changeWebPage, transition } from "../../animations";

export default function Landing() {
  return (
    <Template showMascot>
      <div className="Landing">
        <PageHeading>
          Hi, I'm <span className="Signature">Sage</span>
        </PageHeading>
        <SubHeading>
          I'm a PDX native, a web developer, sustainability advocate, and a
          nascent entrepreneur.
        </SubHeading>
        <SubHeading>& this is where I organize and list my projects</SubHeading>
        <div className="Template-Award-Container">
          <img
            src={award}
            alt={
              "#1 Developer as rated by Sage Hogue's directory of developers to know"
            }
            className="Template-Quote-Adjustment"
            height="150px"
            width="150px"
          />

          {/* CREATE A FIGURE TO GO HERE TO BE CLAIMING THE SPEECH BUBBLE */}
          {/* <img
            className="Template-Move-LeftUp"
            src={rainyCityAward}
            alt={"Voted #1 best human in the Rainy City (Portland)"}
          /> */}
          {/* <award /> <rainyCityAward /> */}
        </div>
      </div>
    </Template>
  );
}
