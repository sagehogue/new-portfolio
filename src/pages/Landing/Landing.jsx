import React from "react";
import Template from "../Template";
import PageHeading from "../../components/UI/PageHeading/PageHeading";
import SubHeading from "../../components/UI/SubHeading/SubHeading";

import "./Landing.css";

export default function Landing() {
  return (
    <Template>
      <div className="Landing">
        <PageHeading>
          Hi, I'm <span className="Signature">Sage</span>
        </PageHeading>
        <SubHeading>
          I'm a PDX native, a web developer, sustainability advocate, and a
          nascent entrepreneur.
        </SubHeading>
        <SubHeading>& this is where I organize and list my projects</SubHeading>
      </div>
    </Template>
  );
}
