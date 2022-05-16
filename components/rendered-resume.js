import { createContext } from "react";
import DefaultTemplate from "./resume-templates/default";

export const RenderedResumeContext = createContext();

const RenderedResume = ({ resume }) => {
  return (
    <RenderedResumeContext.Provider value={{ resume }}>
      <DefaultTemplate />
    </RenderedResumeContext.Provider>
  );
};

export default RenderedResume;
