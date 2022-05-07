import { useRouter } from "next/router";
import { Fragment } from "react";
import { useQuery } from "react-query";
import ResumeForm from "../../../components/resume-form";

const EditResume = () => {
  const {
    query: { id },
  } = useRouter();
  const { data = {}, isLoading } = useQuery(
    "resume",
    async () => {
      const response = await fetch(`/api/resumes/${id}/show`);

      return response.json();
    },
    { enabled: !!id }
  );

  return (
    <Fragment>
      <h1>Edit Resume</h1>
      {!isLoading && <ResumeForm resume={data} />}
    </Fragment>
  );
};

export default EditResume;
