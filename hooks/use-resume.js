import { useMutation, useQueryClient } from "react-query";

const useResume = ({ title, description, _id }) => {
  const queryClient = useQueryClient();
  const createMutation = useMutation(() => {
    return fetch("/api/resumes/create", {
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
  const updateMutation = useMutation(
    () => {
      return fetch(`/api/resumes/${_id}/update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("resumes");
      },
    }
  );

  const onSubmit = async (event) => {
    event.preventDefault();

    if (_id) {
      await updateMutation.mutate();
    } else {
      await createMutation.mutate();
    }
  };

  return {
    isLoading: createMutation.isLoading || updateMutation.isLoading,
    onSubmit,
  };
};

export default useResume;
