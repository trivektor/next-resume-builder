import { TextField, Box, FormControl, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ResumeEditFormContext from "./context";
import { useContext, useState } from "react";
import { cloneDeep, findIndex } from "lodash";

const Skill = ({ skill }) => {
  const { resume, updateMutation } = useContext(ResumeEditFormContext);
  const [_skill, setSkill] = useState(skill.skill || "");
  const [description, setDescription] = useState(skill.description || "");
  const onRemove = () => {};
  const onFieldChange = (field, value) => {
    const skills = cloneDeep(resume.sections.skills);
    const updatedSkillIndex = findIndex(skills, { _id: skill._id });

    skills[updatedSkillIndex][field] = value;

    updateMutation.mutate({
      field: "sections.skills",
      value: skills,
    });
  };

  return (
    <Box sx={{ background: "#fafafa", padding: "20px", mt: "20px" }}>
      <FormControl fullWidth margin="normal">
        <TextField
          fullWidth
          label="Skill"
          variant="filled"
          value={_skill}
          helperText="Example: JavaScript"
          onChange={(event) => setSkill(event.target.value)}
          onBlur={() => onFieldChange("skill", _skill)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          fullWidth
          multiline
          rows={5}
          label="Description"
          variant="filled"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          onBlur={() => onFieldChange("description", description)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl margin="normal">
        <Button
          variant="contained"
          size="small"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={onRemove}
        >
          Remove this skill
        </Button>
      </FormControl>
    </Box>
  );
};

export default Skill;
