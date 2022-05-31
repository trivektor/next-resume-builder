import { Paper, FormControl, TextField } from "@mui/material";
import { useContext, useState } from "react";
import ResumeEditFormContext from "./context";

const Title = () => {
  const { resume, updateMutation } = useContext(ResumeEditFormContext);
  const [title, setTitle] = useState(resume.title);
  const onChange = (event) => setTitle(event.target.value);
  const onBlur = () => {
    updateMutation.mutate({
      field: "title",
      value: title,
    });
  };

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <FormControl fullWidth>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={onChange}
          onBlur={onBlur}
          variant="filled"
        />
      </FormControl>
    </Paper>
  );
};

export default Title;
