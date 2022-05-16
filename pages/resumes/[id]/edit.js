import { useRouter } from "next/router";
import ResumeEditForm from "../../../components/resume-edit-form/resume-edit-form";

const EditResume = () => {
  const {
    query: { id },
  } = useRouter();

  if (!id) return null;

  return <ResumeEditForm resumeId={id} />;
};

export default EditResume;
