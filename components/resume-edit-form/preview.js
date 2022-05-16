import { Paper } from "@mui/material";
import { Fragment, useContext } from "react";
import RenderedResume from "../rendered-resume";
import ResumeEditFormContext from "./context";

const Preview = () => {
  const { resume } = useContext(ResumeEditFormContext);
  return (
    <Fragment>
      <Paper
        elevation={2}
        sx={{
          p: 4,
        }}
      >
        <RenderedResume resume={resume} />
      </Paper>
    </Fragment>
  );
};

export default Preview;
