import { List, ListItem, Typography } from "@mui/material";
import { Fragment, useContext } from "react";
import { RenderedResumeContext } from "../../rendered-resume";

const Intro = () => {
  const {
    resume: {
      sections: { intro },
    },
  } = useContext(RenderedResumeContext);
  const { firstname, lastname, headline, industry, email, phone } = intro;

  return (
    <Fragment>
      <Typography variant="h3">
        {firstname} {lastname}
      </Typography>
      <List sx={{ margin: 0 }}>
        {headline && <ListItem sx={{ padding: 0 }}>{headline}</ListItem>}
        {industry && <ListItem sx={{ padding: 0 }}>{industry}</ListItem>}
        {email && <ListItem sx={{ padding: 0 }}>{email}</ListItem>}
        {phone && <ListItem sx={{ padding: 0 }}>{phone}</ListItem>}
      </List>
    </Fragment>
  );
};

export default Intro;
