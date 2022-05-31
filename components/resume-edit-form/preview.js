import { Button, Paper } from "@mui/material";
import { Fragment, useContext } from "react";
import RenderedResume from "../rendered-resume";
import ResumeEditFormContext from "./context";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Preview = () => {
  const { resume } = useContext(ResumeEditFormContext);

  return (
    <Fragment>
      <Button
        size="small"
        color="primary"
        variant="contained"
        startIcon={<FileDownloadIcon />}
        href={`/api/resumes/${resume._id}/export`}
      >
        Export PDF
      </Button>
      <Paper
        elevation={2}
        sx={{
          mt: 2,
          p: 4,
          minHeight: 620,
        }}
      >
        <RenderedResume resume={resume} />
      </Paper>
    </Fragment>
  );
};

export default Preview;
