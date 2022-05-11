import { FormControl, Grid, Paper, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import ResumeEditFormContext from "./context";
import InfoIcon from "@mui/icons-material/Info";

const Intro = () => {
  const { resume, updateMutation } = useContext(ResumeEditFormContext);
  const [firstname, setFirstname] = useState(
    resume.sections.intro.firstname || ""
  );
  const [lastname, setLastname] = useState(
    resume.sections.intro.lastname || ""
  );
  const [additionalName, setAdditionalName] = useState(
    resume.sections.intro.additionalName || ""
  );
  const [namePronunciation, setNamePronunciation] = useState(
    resume.sections.intro.namePronunciation || ""
  );
  const [headline, setHeadline] = useState(
    resume.sections.intro.headline || ""
  );
  const [industry, setIndustry] = useState(
    resume.sections.intro.industry || ""
  );
  const onFieldChange = (field, value) => {
    updateMutation.mutate({
      field: `sections.intro.${field}`,
      value,
    });
  };

  return (
    <Paper sx={{ padding: "50px" }}>
      <Typography variant="h4" fontWeight={200} sx={{ mb: "20px" }}>
        <InfoIcon /> Intro
      </Typography>
      <FormControl fullWidth margin="normal">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First name"
              variant="filled"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              onBlur={() => onFieldChange("firstname", firstname)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last name"
              variant="filled"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              onBlur={() => onFieldChange("lastname", lastname)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          fullWidth
          label="Additional name"
          variant="filled"
          value={additionalName}
          onChange={(event) => setAdditionalName(event.target.value)}
          onBlur={() => onFieldChange("additionalName", additionalName)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          fullWidth
          label="Name Pronunciation"
          variant="filled"
          value={namePronunciation}
          onChange={(event) => setNamePronunciation(event.target.value)}
          onBlur={() => onFieldChange("namePronunciation", namePronunciation)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          fullWidth
          label="Headline"
          variant="filled"
          helperText="Example: Principal Engineer at Red Rooster"
          value={headline}
          onChange={(event) => setHeadline(event.target.value)}
          onBlur={() => onFieldChange("headline", headline)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          fullWidth
          label="Industry"
          variant="filled"
          helperText="Example: Retail"
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
          onBlur={() => onFieldChange("industry", industry)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
    </Paper>
  );
};

export default Intro;
