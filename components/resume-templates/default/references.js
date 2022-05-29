import { Box, Typography } from "@mui/material";
import { Fragment, useContext } from "react";
import { RenderedResumeContext } from "../../rendered-resume";

const References = () => {
  const {
    resume: {
      sections: { references },
    },
  } = useContext(RenderedResumeContext);

  return (
    <Fragment>
      <Typography variant="h5" sx={{ mt: 2 }}>
        References
      </Typography>
      {references.map((reference) => {
        const { _id, fullName, company, email, phone } = reference;

        return (
          <Box key={_id} sx={{ mt: 2 }}>
            <strong>{fullName}</strong>
            <div>{company}</div>
            {(email || phone) && (
              <div>{[email, phone].filter(Boolean).join(" - ")}</div>
            )}
          </Box>
        );
      })}
    </Fragment>
  );
};

export default References;
