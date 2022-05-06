import { Fragment } from "react";
import ResumeForm from "../../components/resume-form";

const NewResume = () => {
  return (
    <Fragment>
      <h1>New Resume</h1>
      <ResumeForm />
    </Fragment>
  );
};

export default NewResume;

NewResume.auth = true;
