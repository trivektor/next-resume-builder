import { FormControl, Grid, Paper, TextField, Typography } from "@mui/material";

const Intro = () => {
  return (
    <Paper sx={{ padding: "50px" }}>
      <Typography variant="h4">Intro</Typography>
      <FormControl fullWidth margin="normal">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="First name" variant="standard" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Last name" variant="standard" />
          </Grid>
        </Grid>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField fullWidth label="Additional name" variant="standard" />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField fullWidth label="Name Pronunciations" variant="standard" />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField fullWidth label="Headline" variant="standard" />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField fullWidth label="Industry" variant="standard" />
      </FormControl>
    </Paper>
  );
};

export default Intro;
