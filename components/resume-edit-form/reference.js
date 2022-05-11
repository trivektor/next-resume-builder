import { Box, Button, FormControl, TextField, Grid } from "@mui/material";
import { useContext, useState } from "react";
import ResumeEditFormContext from "./context";
import DeleteIcon from "@mui/icons-material/Delete";
import { cloneDeep, findIndex } from "lodash";

const Reference = ({ reference }) => {
  const { resume, updateMutation } = useContext(ResumeEditFormContext);
  const [fullName, setFullName] = useState(reference.fullName || "");
  const [company, setCompany] = useState(reference.company || "");
  const [email, setEmail] = useState(reference.email || "");
  const [phone, setPhone] = useState(reference.phone || "");
  const onRemove = () => {
    updateMutation.mutate({
      field: "sections.experience",
      value: resume.sections.references.filter(
        ({ _id }) => _id !== reference._id
      ),
    });
  };
  const onFieldChange = (field, value) => {
    const references = cloneDeep(resume.sections.references);
    const updatedReferenceIndex = findIndex(references, { _id: reference._id });

    references[updatedReferenceIndex][field] = value;

    updateMutation.mutate({
      field: "sections.references",
      value: references,
    });
  };

  return (
    <Box sx={{ background: "#fafafa", padding: "20px", mt: "20px" }}>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Full name"
          variant="filled"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          onBlur={() => onFieldChange("fullName", fullName)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          label="Company"
          variant="filled"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          onBlur={() => onFieldChange("company", company)}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="filled"
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onBlur={() => onFieldChange("email", email)}
              InputLabelProps={{ shrink: true }}
              inputProps={{ type: "email" }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="filled"
              label="Phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              onBlur={() => onFieldChange("phone", phone)}
              InputLabelProps={{ shrink: true }}
              inputProps={{ type: "tel" }}
            />
          </Grid>
        </Grid>
      </FormControl>
      <FormControl margin="normal">
        <Button
          variant="contained"
          size="small"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={onRemove}
        >
          Remove this reference
        </Button>
      </FormControl>
    </Box>
  );
};

export default Reference;
