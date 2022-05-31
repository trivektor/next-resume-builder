import { Box, Typography } from "@mui/material";
import { isEmpty } from "lodash";
import { Fragment, useContext } from "react";
import { RenderedResumeContext } from "../../rendered-resume";

const Experience = () => {
  const {
    resume: {
      sections: { experience },
    },
  } = useContext(RenderedResumeContext);

  if (isEmpty(experience)) return null;

  return (
    <Fragment>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Experience
      </Typography>
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
          <Box key={_id} sx={{ mt: 2 }}>
            <strong>{title}</strong>
            <div>
              {[companyName, employmentType].filter(Boolean).join(" · ")}
            </div>
            <div>{[startDate, endDate].filter(Boolean).join(" - ")}</div>
            <div>{location}</div>
            <div>{description}</div>
          </Box>
        );
      })}
    </Fragment>
  );
};

export default Experience;
