import { Box, Button, FormControl, TextField, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ResumeEditFormContext from "./context";
import { useContext, useState } from "react";
import { cloneDeep, findIndex } from "lodash";

const School = ({ school }) => {
  const { resume, updateMutation } = useContext(ResumeEditFormContext);
  const [_school, setSchool] = useState(school.school || "");
  const [degree, setDegree] = useState(school.degree || "");
  const [fieldOfStudy, setFieldOfStudy] = useState(school.fieldOfStudy || "");
  const [startDate, setStartDate] = useState(school.startDate || "");
  const [endDate, setEndDate] = useState(school.endDate || "");
  const [description, setDescription] = useState(school.description || "");
  const onFieldChange = (field, value) => {
    const education = cloneDeep(resume.sections.education);
    const updatedSchoolIndex = findIndex(education, { _id: school._id });

    education[updatedSchoolIndex][field] = value;

    updateMutation.mutate({
      field: "sections.education",
      value: education,
    });
  };
  const onRemove = () => {
    updateMutation.mutate({
      field: "sections.education",
      value: resume.sections.education.filter(({ _id }) => _id !== school._id),
    });
  };

  return (
    <Box sx={{ background: "#fafafa", padding: "20px", mt: "20px" }}>
      <FormControl fullWidth margin="normal">
        <TextField
          label="School"
          variant="filled"
          helperText="Example: Univeristy of Toronto"
          value={_school}
          onChange={(event) => setSchool(event.target.value)}
          onBlur={() => onFieldChange("school", _school)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Degree"
          variant="filled"
          helperText="Example: Bachelor of Science"
          value={degree}
          onChange={(event) => setDegree(event.target.value)}
          onBlur={() => onFieldChange("degree", degree)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Field of Study"
          variant="filled"
          helperText="Example: Computer Science, Math, Polytics"
          value={fieldOfStudy}
          onChange={(event) => setFieldOfStudy(event.target.value)}
          onBlur={() => onFieldChange("fieldOfStudy", fieldOfStudy)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
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
          <Grid item xs={6} margin="normal">
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
      <FormControl fullWidth margin="normal">
        <TextField
          multiline
          rows={5}
          label="Description"
          variant="filled"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          onBlur={() => onFieldChange("description", description)}
          InputLabelProps={{ shrink: true }}
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
          Remove this school
        </Button>
      </FormControl>
    </Box>
  );
};

export default School;
