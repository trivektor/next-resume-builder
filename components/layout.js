import { useSession, signIn, signOut } from "next-auth/react";
import { Navbar, Button } from "@blueprintjs/core";
import { Fragment } from "react";

const Layout = ({ children }) => {
  const { data: session } = useSession();
  const navbar = (
    <Navbar>
      <Navbar.Group align="left">
        <Navbar.Heading>Next Resume Builder</Navbar.Heading>
        <Navbar.Divider />
      </Navbar.Group>
      <Navbar.Group align="right">
        {session ? (
          <Fragment>
            {session.user.email}{" "}
            <Button onClick={() => signOut()}>Sign out</Button>
          </Fragment>
        ) : (
          <Button onClick={() => signIn()}>Sign in</Button>
        )}
      </Navbar.Group>
    </Navbar>
  );

  return (
    <Fragment>
      {navbar}
      {children}
    </Fragment>
  );
};

export default Layout;
