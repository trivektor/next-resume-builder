import { Box, Paper, Button, Typography } from "@mui/material";
import { useContext } from "react";
import School from "./school";
import AddIcon from "@mui/icons-material/Add";
import SchoolIcon from "@mui/icons-material/School";
import ResumeEditFormContext from "./context";

const Education = () => {
  const { updateMutation, resume } = useContext(ResumeEditFormContext);
  const onAdd = () => {
    updateMutation.mutate({
      field: "sections.education",
      value: [...resume.sections.education, {}],
    });
  };

  return (
    <Paper sx={{ padding: "50px", mt: "30px" }}>
      <Typography variant="h4" sx={{ mb: "20px" }} fontWeight="200">
        <SchoolIcon /> Education
      </Typography>
      <Button variant="contained" onClick={onAdd} startIcon={<AddIcon />}>
        Add Education
      </Button>
      <Box sx={{ mt: "20px" }}>
        {(resume.sections.education ?? []).map((school) => (
          <School key={school._id} school={school} />
        ))}
      </Box>
    </Paper>
  );
};

export default Education;
