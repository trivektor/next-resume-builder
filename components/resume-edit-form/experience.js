import { Box, Paper, Button, Typography } from "@mui/material";
import { useContext } from "react";
import Position from "./position";
import AddIcon from "@mui/icons-material/Add";
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
    <Paper sx={{ padding: "50px", mt: "30px" }}>
      <Typography variant="h4" sx={{ mb: "20px" }}>
        Experience
      </Typography>
      <Button variant="contained" onClick={onAdd} startIcon={<AddIcon />}>
        Add Experience
      </Button>
      <Box sx={{ mt: "20px" }}>
        {(resume?.sections?.experience ?? []).map((position) => (
          <Position key={position._id} position={position} />
        ))}
      </Box>
    </Paper>
  );
};

export default Experience;
