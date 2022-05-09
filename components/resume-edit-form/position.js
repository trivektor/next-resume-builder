import { Box, Button, FormControl, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ResumeEditFormContext from "./context";
import { useContext } from "react";

const Position = ({ position }) => {
  const { resume, updateMutation } = useContext(ResumeEditFormContext);
  const onRemove = async () => {
    updateMutation.mutate({
      field: "sections.experience",
      value: resume.sections.experience.filter(
        ({ _id }) => _id !== position._id
      ),
    });
  };

  return (
    <Box
      sx={{ background: "#f8f8f8", padding: "20px", mb: "20px", mt: "20px" }}
    >
      <FormControl fullWidth margin="normal">
        <TextField label="Title" variant="standard" />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField label="Employment Type" variant="standard" />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField label="Company Name" variant="standard" />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField label="Location" variant="standard" />
      </FormControl>
      <FormControl fullWidth margin="normal"></FormControl>
      <FormControl fullWidth margin="normal">
        <TextField label="Industry" variant="standard" />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField multiline label="Description" variant="standard" />
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
