import { useSession, signIn } from "next-auth/react";
import { Fragment, useEffect } from "react";

const AuthProtected = ({ children }) => {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;

  useEffect(() => {
    if (status === "loading") return "Loading...";
    if (!isUser) signIn();
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  return <Fragment>{children}</Fragment>;
};

export default AuthProtected;
