import { useMutation, useQueryClient } from "react-query";

const useResume = ({ title, description, isNew }) => {
  const queryClient = useQueryClient();
  const createMutation = useMutation(async () => {
    await fetch("/api/resumes/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
  });

  const onSubmit = (event) => {
    event.preventDefault();

    if (isNew) {
      createMutation.mutate();
    } else {
      // TODO: implement
    }

    queryClient.invalidateQueries("resumes");
  };

  return { isLoading: createMutation.isLoading, onSubmit };
};

export default useResume;
