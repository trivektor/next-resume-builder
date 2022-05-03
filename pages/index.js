import { useSession, signIn } from "next-auth/react";
import Home from "../components/home";

import Resumes from "../components/resumes";

const Index = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return "Loading...";
  }

  return session ? <Resumes /> : <Home />;
};

export default Index;
