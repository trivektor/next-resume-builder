import { Fragment } from "react";
import Intro from "./intro";
import Experience from "./experience";
import Education from "./education";

const DefaultTemplate = () => {
  return (
    <Fragment>
      <Intro />
      <Experience />
      <Education />
    </Fragment>
  );
};

export default DefaultTemplate;
