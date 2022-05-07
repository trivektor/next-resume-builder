import { Typography } from "@mui/material";
import { Fragment } from "react";
import ResumeForm from "../../components/resume-form";

const NewResume = () => {
  return (
    <Fragment>
      <Typography variant="h4" sx={{ mb: "20px" }}>
        New Resume
      </Typography>
      <ResumeForm />
    </Fragment>
  );
};

export default NewResume;

NewResume.auth = true;
