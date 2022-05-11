import { TextField, Box, Button, Paper } from "@mui/material";
import { useState } from "react";
import { useResume } from "../hooks";

const ResumeForm = ({ resume }) => {
  const [title, setTitle] = useState(resume?.title || "");
  const [description, setDescription] = useState(resume?.description || "");
  const { onSubmit, loading } = useResume({
    title,
    description,
    _id: resume?._id,
  });

  return (
    <Paper elevation={2} sx={{ width: "50%", padding: "50px" }}>
      <Box
        component="form"
        onSubmit={onSubmit}
        disabled={loading}
        autoComplete="off"
        width="100%"
      >
        <TextField
          fullWidth
          variant="filled"
          margin="normal"
          label="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          multiline
          fullWidth
          variant="filled"
          margin="normal"
          label="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button variant="contained" color="success" type="submit">
          Save
        </Button>
      </Box>
    </Paper>
  );
};

export default ResumeForm;
