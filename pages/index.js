import { CircularProgress } from "@mui/material";
import { useSession } from "next-auth/react";
import Home from "../components/home";

import Resumes from "../components/resumes";

const Index = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <CircularProgress />;
  }

  return session ? <Resumes /> : <Home />;
};

export default Index;
