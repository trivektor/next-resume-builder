import { Box, Typography } from "@mui/material";
import { Fragment, useContext } from "react";
import { RenderedResumeContext } from "../../rendered-resume";

const Education = () => {
  const {
    resume: {
      sections: { education },
    },
  } = useContext(RenderedResumeContext);

  return (
    <Fragment>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Education
      </Typography>
      {education.map((_school) => {
        const { _id, school, fieldOfStudy, startDate, endDate } = _school;

        return (
          <Box key={_id} sx={{ mt: 2 }}>
            <strong>{school}</strong>
            <div>{fieldOfStudy}</div>
            <div>{[startDate, endDate].filter(Boolean).join(" - ")}</div>
          </Box>
        );
      })}
    </Fragment>
  );
};

export default Education;
