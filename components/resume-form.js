import { Button, FormGroup, InputGroup, TextArea } from "@blueprintjs/core";
import { useState } from "react";
import { useResume } from "../hooks";

const ResumeForm = (resume) => {
  const [title, setTitle] = useState(resume?.title || "");
  const [description, setDescription] = useState(resume?.description || "");
  const { onSubmit, loading } = useResume({
    title,
    description,
  });

  return (
    <fieldset disabled={loading}>
      <form onSubmit={onSubmit}>
        <FormGroup label="Title">
          <InputGroup
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </FormGroup>
        <FormGroup label="Description">
          <TextArea
            fill
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </FormGroup>
        <Button text="Save" type="submit" />
      </form>
    </fieldset>
  );
};

export default ResumeForm;
