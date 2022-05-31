import { Box, Paper, Button, Typography } from "@mui/material";
import { useContext } from "react";
import ComputerIcon from "@mui/icons-material/Computer";
import AddIcon from "@mui/icons-material/Add";
import ResumeEditFormContext from "./context";
import Skill from "./skill";

const Skills = () => {
  const { updateMutation, resume } = useContext(ResumeEditFormContext);
  const onAdd = () => {
    updateMutation.mutate({
      field: "sections.skills",
      value: [...(resume.sections.skills ?? []), {}],
    });
  };

  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }} fontWeight="200">
        <ComputerIcon /> Skills
      </Typography>
      <Button variant="contained" onClick={onAdd} startIcon={<AddIcon />}>
        Add Skill
      </Button>
      <Box sx={{ mt: "20px" }}>
        {(resume.sections.skills ?? []).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </Box>
    </Paper>
  );
};

export default Skills;
