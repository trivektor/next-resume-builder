import { Fragment } from "react";
import Intro from "./intro";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";
import References from "./references";

const DefaultTemplate = () => {
  return (
    <Fragment>
      <Intro />
      <Experience />
      <Education />
      <Skills />
      <References />
    </Fragment>
  );
};

export default DefaultTemplate;
