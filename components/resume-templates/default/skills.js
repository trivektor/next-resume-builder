import { Box, Typography } from "@mui/material";
import { isEmpty } from "lodash";
import { Fragment, useContext } from "react";
import { RenderedResumeContext } from "../../rendered-resume";

const Skills = () => {
  const {
    resume: {
      sections: { skills },
    },
  } = useContext(RenderedResumeContext);

  if (isEmpty(skills)) return null;

  return (
    <Fragment>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Skills
      </Typography>
      {skills.map((_skill) => {
        const { _id, skill, description } = _skill;

        return (
          <Box key={_id} sx={{ mt: 2 }}>
            <strong>{skill}</strong>
            <p>{description}</p>
          </Box>
        );
      })}
    </Fragment>
  );
};

export default Skills;
