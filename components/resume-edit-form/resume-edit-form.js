import { CircularProgress, Box } from "@mui/material";
import Intro from "./intro";
import Experience from "./experience";
import Education from "./education";
import References from "./references";
import ResumeEditFormContext from "./context";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { Fragment } from "react";
import Skills from "./skills";
import Preview from "./preview";
import Head from "next/head";
import Title from "./title";

const ResumeEditForm = ({ resumeId }) => {
  const { data, isLoading } = useQuery(["resumeEdit", resumeId], async () => {
    const response = await fetch(`/api/resumes/${resumeId}/show`, {
      headers: {
        Accept: "application/json",
      },
    });

    return response.json();
  });
  const queryClient = useQueryClient();
  const updateMutation = useMutation(
    async (payload) => {
      await fetch(`/api/resumes/${resumeId}/update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["resumeEdit", resumeId]);
      },
    }
  );

  return isLoading ? (
    <Fragment>
      <Head>
        <title>Loading...</title>
      </Head>
      <CircularProgress />
    </Fragment>
  ) : (
    <Fragment>
      <Head>
        <title>Edit {data.title}</title>
      </Head>
      <ResumeEditFormContext.Provider value={{ updateMutation, resume: data }}>
        <Box sx={{ width: "60%", p: 3 }}>
          <Title />
          <Intro />
          <Experience />
          <Education />
          <Skills />
          <References />
        </Box>
        <Box
          sx={{
            width: "40%",
            position: "fixed",
            top: 64,
            bottom: 0,
            right: 0,
            background: "#e0e0e0",
            overflow: "auto",
            p: 4,
          }}
        >
          <Preview />
        </Box>
      </ResumeEditFormContext.Provider>
    </Fragment>
  );
};

export default ResumeEditForm;
