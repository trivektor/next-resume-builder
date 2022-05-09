import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import ResumeEditForm from "../../../components/resume-edit-form/resume-edit-form";
import ResumeEditFormContext from "../../../components/resume-edit-form/context";

const EditResume = () => {
  const {
    query: { id },
  } = useRouter();

  if (!id) return null;

  return <ResumeEditForm resumeId={id} />;
};

export default EditResume;
