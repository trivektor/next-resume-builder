import { Box, Button, Grid, CircularProgress } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";
import ResumeCard from "./resume-card";
import AddIcon from "@mui/icons-material/Add";
import { useMutation, useQuery, useQueryClient } from "react-query";
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
  const queryClient = useQueryClient();
  const createMutation = useMutation(
    () => {
      return fetch("/api/resumes/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Untitled",
        }),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("resumes");
      },
    }
  );
  const onCreate = () => {
    createMutation.mutate();
  };

  return (
    <Fragment>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          onClick={onCreate}
        >
          Create Resume
        </Button>{" "}
        <Box sx={{ mt: 3 }}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Grid container spacing={5}>
              {data.map((resume) => (
                <Grid item key={resume._id} sx={{ width: 400 }}>
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
