import { useState } from "react";

const useResume = ({ title, description }) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    await fetch("/api/resumes/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    setLoading(false);
  };

  return { loading, onSubmit };
};

export default useResume;
