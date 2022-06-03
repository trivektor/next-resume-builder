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
    <Paper sx={{ p: 3, mt: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4" fontWeight="200">
          <SchoolIcon /> Education
        </Typography>
        <Button variant="contained" onClick={onAdd} startIcon={<AddIcon />}>
          Add Education
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        {(resume.sections.education ?? []).map((school) => (
          <School key={school._id} school={school} />
        ))}
      </Box>
    </Paper>
  );
};

export default Education;
