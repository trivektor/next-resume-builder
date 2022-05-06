import { useSession, signIn, signOut } from "next-auth/react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";

const Layout = ({ children }) => {
  const { data: session } = useSession();
  const navbar = (
    <AppBar position="static" sx={{ bgcolor: "green" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Next Resume Builder
        </Typography>
        <div>
          {session ? (
            <Fragment>
              {session.user.email}
              <Button onClick={() => signOut()} color="inherit" size="small">
                Sign out
              </Button>
            </Fragment>
          ) : (
            <Button onClick={() => signIn()} color="inherit" size="small">
              Sign in
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );

  return (
    <Fragment>
      {navbar}
      <main style={{ padding: 20 }}>{children}</main>
    </Fragment>
  );
};

export default Layout;

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));
