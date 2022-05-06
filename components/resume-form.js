import { TextField, Box, Button, FormGroup } from "@mui/material";
import { useState } from "react";
import { useResume } from "../hooks";

const ResumeForm = (resume) => {
  const [title, setTitle] = useState(resume?.title || "");
  const [description, setDescription] = useState(resume?.description || "");
  const { onSubmit, loading } = useResume({
    title,
    description,
  });

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      disabled={loading}
      autoComplete="off"
      width="100%"
    >
      <TextField
        fullWidth
        margin="normal"
        label="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        multiline
        fullWidth
        margin="normal"
        label="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Button variant="contained" color="success" type="submit">
        Save
      </Button>
    </Box>
  );
};

export default ResumeForm;
