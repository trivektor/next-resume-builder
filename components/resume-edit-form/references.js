import { Box, Paper, Button, Typography } from "@mui/material";
import { useContext } from "react";
import ResumeEditFormContext from "./context";
import Reference from "./reference";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AddIcon from "@mui/icons-material/Add";

const References = () => {
  const { updateMutation, resume } = useContext(ResumeEditFormContext);
  const onAdd = () => {
    updateMutation.mutate({
      field: "sections.references",
      value: [...resume.sections.references, {}],
    });
  };

  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }} fontWeight="200">
        <SupervisedUserCircleIcon /> References
      </Typography>
      <Button variant="contained" onClick={onAdd} startIcon={<AddIcon />}>
        Add Reference
      </Button>
      <Box sx={{ mt: "20px" }}>
        {(resume.sections.references ?? []).map((reference) => (
          <Reference key={reference._id} reference={reference} />
        ))}
      </Box>
    </Paper>
  );
};

export default References;
