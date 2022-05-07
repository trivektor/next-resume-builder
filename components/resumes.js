import { Box, Button, Grid } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";
import ResumeCard from "./resume-card";
import AddIcon from "@mui/icons-material/Add";
import { useQuery } from "react-query";

const Resumes = () => {
  const { data = [] } = useQuery("resumes", async () => {
    const response = await fetch("/api/resumes", {
      headers: {
        Accept: "application/json",
      },
    });
    const json = await response.json();

    return json.resumes;
  });

  return (
    <Fragment>
      <Link href="/resumes/new" passHref>
        <Button variant="contained" color="success" startIcon={<AddIcon />}>
          Create Resume
        </Button>
      </Link>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {data.map((resume) => (
            <Grid item xs={3} key={resume._id}>
              <ResumeCard resume={resume} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Resumes;
