import {
  Box,
  Button,
  FormControl,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useContext } from "react";
import ResumeEditFormContext from "./context";

const TextGenerationModal = ({ open, onClose }) => {
  const { resume } = useContext(ResumeEditFormContext);
  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    setLoading(true);

    const resonse = await fetch(`/api/resumes/${resume._id}/text_generation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    const { choices } = await resonse.json();

    setGeneratedText((choices[0]?.text || "").trim());
    setLoading(false);
  };
  const _onClose = () => {
    setPrompt("");
    setGeneratedText("");
    onClose();
  };

  return (
    <Modal open={open} onClose={_onClose}>
      <Box sx={style}>
        <Typography variant="h4">Generate text</Typography>
        <FormControl fullWidth margin="normal">
          <TextField
            multiline
            rows={2}
            variant="filled"
            label="Prompt"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            helperText="Example: Generate job description of a JavaScript developer"
            InputLabelProps={{ shrink: true }}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            multiline
            rows={5}
            variant="filled"
            label="Generated text will appear here"
            InputLabelProps={{ shrink: true }}
            value={generatedText}
          />
        </FormControl>
        <FormControl>
          <Button
            color="primary"
            variant="contained"
            onClick={onClick}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate"}
          </Button>
        </FormControl>
      </Box>
    </Modal>
  );
};

export default TextGenerationModal;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
};
