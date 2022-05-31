import { Box, Button, FormControl, TextField, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ResumeEditFormContext from "./context";
import { useContext, useState } from "react";
import { cloneDeep, findIndex } from "lodash";
import TextGenrationModal from "./text-generation-modal";

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
  const [textGenerationModalOpen, setTextGenerationModalOpen] = useState(false);

  return (
    <Box sx={{ background: "#fafafa", p: 2, mt: 2 }}>
      <FormControl fullWidth>
        <TextField
          label="Title"
          variant="filled"
          helperText="Example: Staff Engineer"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          onBlur={() => onFieldChange("title", title)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <TextField
          label="Employment Type"
          variant="filled"
          helperText="Example: Full time"
          value={employmentType}
          onChange={(event) => setEmploymentType(event.target.value)}
          onBlur={() => onFieldChange("employmentType", employmentType)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Company Name"
              variant="filled"
              helperText="Example: Amazon"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              onBlur={() => onFieldChange("companyName", companyName)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Location"
              variant="filled"
              helperText="Redmond, WA"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onBlur={() => onFieldChange("location", location)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
      </FormControl>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Start Date"
              variant="filled"
              helperText="Example: 08/2018"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              onBlur={() => onFieldChange("startDate", startDate)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="End Date"
              variant="filled"
              helperText="Example: 08/2021"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              onBlur={() => onFieldChange("endDate", endDate)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
      </FormControl>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <TextField
          label="Industry"
          variant="filled"
          helperText="Example: Computer Software"
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
          onBlur={() => onFieldChange("industry", industry)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <TextField
          multiline
          rows={5}
          label="Description"
          variant="filled"
          helperText={
            <Button
              size="small"
              sx={{ padding: 0, textTransform: "none" }}
              onClick={() => setTextGenerationModalOpen(true)}
            >
              Generate
            </Button>
          }
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          onBlur={() => onFieldChange("description", description)}
          InputLabelProps={{ shrink: true }}
        />
        <TextGenrationModal
          open={textGenerationModalOpen}
          onClose={() => setTextGenerationModalOpen(false)}
        />
      </FormControl>
      <FormControl sx={{ mt: 2 }}>
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
