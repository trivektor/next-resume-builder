import { Box, Button, FormControl, TextField, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ResumeEditFormContext from "./context";
import { useContext, useState } from "react";
import { cloneDeep, findIndex } from "lodash";

const Position = ({ position }) => {
  const { resume, updateMutation } = useContext(ResumeEditFormContext);
  const [title, setTitle] = useState(position.title || "");
  const [employmentType, setEmploymentType] = useState(
    position.employmentType || ""
  );
  const [companyName, setCompanyName] = useState(position.companyName || "");
  const [location, setLocation] = useState(position.location || "");
  const onRemove = () => {
    updateMutation.mutate({
      field: "sections.experience",
      value: resume.sections.experience.filter(
        ({ _id }) => _id !== position._id
      ),
    });
  };
  const [startDate, setStartDate] = useState(position.startDate || "");
  const [endDate, setEndDate] = useState(position.endDate || "");
  const [industry, setIndustry] = useState(position.industry || "");
  const [description, setDescription] = useState(position.description || "");
  const onFieldChange = (field, value) => {
    const experience = cloneDeep(resume.sections.experience);
    const updatedPositionIndex = findIndex(experience, { _id: position._id });

    experience[updatedPositionIndex][field] = value;

    updateMutation.mutate({
      field: "sections.experience",
      value: experience,
    });
  };

  return (
    <Box sx={{ background: "#fafafa", padding: "20px", mt: "20px" }}>
      <FormControl fullWidth>
        <TextField
          label="Title"
          variant="standard"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          onBlur={() => onFieldChange("title", title)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Employment Type"
          variant="standard"
          helperText="Example: Full time"
          value={employmentType}
          onChange={(event) => setEmploymentType(event.target.value)}
          onBlur={() => onFieldChange("employmentType", employmentType)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Company Name"
              variant="standard"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              onBlur={() => onFieldChange("companyName", companyName)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Location"
              variant="standard"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onBlur={() => onFieldChange("location", location)}
            />
          </Grid>
        </Grid>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Start Date"
              variant="standard"
              helperText="Example: 08/2018"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              onBlur={() => onFieldChange("startDate", startDate)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="End Date"
              variant="standard"
              helperText="Example: 08/2021"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              onBlur={() => onFieldChange("endDate", endDate)}
            />
          </Grid>
        </Grid>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Industry"
          variant="standard"
          helperText="Example: Computer Software"
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
          onBlur={() => onFieldChange("industry", industry)}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          multiline
          rows={5}
          label="Description"
          variant="standard"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          onBlur={() => onFieldChange("description", description)}
        />
      </FormControl>
      <FormControl margin="normal">
        <Button
          variant="contained"
          size="small"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={onRemove}
        >
          Remove this position
        </Button>
      </FormControl>
    </Box>
  );
};

export default Position;
