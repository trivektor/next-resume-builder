import { Typography } from "@mui/material";
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
      <Typography variant="h5">Education</Typography>
      {education.map((_school) => {
        const { _id, school, fieldOfStudy, startDate, endDate } = _school;

        return (
          <Fragment key={_id}>
            <strong>{school}</strong>
            <div>{fieldOfStudy}</div>
            <div>{[startDate, endDate].filter(Boolean).join(" - ")}</div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Education;
