import { Typography, CircularProgress } from "@mui/material";
import Intro from "./intro";
import Experience from "./experience";
import Education from "./education";
import References from "./references";
import ResumeEditFormContext from "./context";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { Fragment } from "react";
import Skills from "./skills";

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

  return (
    <Fragment>
      <Typography variant="h4" sx={{ mb: "20px" }} fontWeight="200">
        Edit Resume
      </Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <ResumeEditFormContext.Provider
          value={{ updateMutation, resume: data }}
        >
          <div style={{ width: "70%" }}>
            <Intro />
            <Experience />
            <Education />
            <Skills />
            <References />
          </div>
        </ResumeEditFormContext.Provider>
      )}
    </Fragment>
  );
};

export default ResumeEditForm;
