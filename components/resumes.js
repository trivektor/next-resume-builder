import { Box, Button, Grid, CircularProgress } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";
import ResumeCard from "./resume-card";
import AddIcon from "@mui/icons-material/Add";
import { useQuery } from "react-query";
import Head from "next/head";

const Resumes = () => {
  const { data = [], isLoading } = useQuery("resumes", async () => {
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
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box sx={{ p: 2 }}>
        <Link href="/resumes/new" passHref>
          <Button variant="contained" color="success" startIcon={<AddIcon />}>
            Create Resume
          </Button>
        </Link>{" "}
        <Box sx={{ mt: 2 }}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Grid container spacing={2}>
              {data.map((resume) => (
                <Grid item xs={3} key={resume._id}>
                  <ResumeCard resume={resume} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Fragment>
  );
};

export default Resumes;
