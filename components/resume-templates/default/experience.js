import { Typography } from "@mui/material";
import { Fragment, useContext } from "react";
import { RenderedResumeContext } from "../../rendered-resume";

const Experience = () => {
  const {
    resume: {
      sections: { experience },
    },
  } = useContext(RenderedResumeContext);

  return (
    <Fragment>
      <Typography variant="h5">Experience</Typography>
      {experience.map((position) => {
        const {
          _id,
          title,
          companyName,
          employmentType,
          location,
          startDate,
          endDate,
          description,
        } = position;

        return (
          <Fragment key={_id}>
            <strong>{title}</strong>
            <div>
              {[companyName, employmentType].filter(Boolean).join(" · ")}
            </div>
            <div>{[startDate, endDate].filter(Boolean).join(" - ")}</div>
            <div>{location}</div>
            <div>{description}</div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Experience;
