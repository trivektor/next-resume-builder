import { Box, Paper, Button, Typography, Grid } from "@mui/material";
import { useContext } from "react";
import Position from "./position";
import AddIcon from "@mui/icons-material/Add";
import WorkIcon from "@mui/icons-material/Work";
import ResumeEditFormContext from "./context";

const Experience = () => {
  const { updateMutation, resume } = useContext(ResumeEditFormContext);
  const onAdd = () => {
    updateMutation.mutate({
      field: "sections.experience",
      value: [...resume.sections.experience, {}],
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
          <WorkIcon /> Experience
        </Typography>
        <Button variant="contained" onClick={onAdd} startIcon={<AddIcon />}>
          Add Experience
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        {(resume?.sections?.experience ?? []).map((position) => (
          <Position key={position._id} position={position} />
        ))}
      </Box>
    </Paper>
  );
};

export default Experience;
