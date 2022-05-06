import Button from "@mui/material/Button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import styledComponents from "styled-components";
import ResumeCard from "./resume-card";
import AddIcon from "@mui/icons-material/Add";

const Resumes = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      const response = await fetch("/api/resumes", {
        headers: {
          Accept: "application/json",
        },
      });
      const json = await response.json();

      setResumes(json.resumes);
    };

    fetchResumes();
  }, []);

  return (
    <Fragment>
      <Link href="/resumes/new" passHref>
        <Button variant="contained" color="success" startIcon={<AddIcon />}>
          New Resume
        </Button>
      </Link>
      <ResumeGrid>
        {resumes.map((resume) => (
          <ResumeCard resume={resume} key={resume._id} />
        ))}
      </ResumeGrid>
    </Fragment>
  );
};

export default Resumes;

const ResumeGrid = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
`;
