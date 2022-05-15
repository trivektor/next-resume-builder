import { useSession, signIn, signOut } from "next-auth/react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }) => {
  const { data: session } = useSession();
  const navbar = (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
        color: "black",
      }}
    >
      <Toolbar>
        <Image
          src="https://img.icons8.com/color/48/000000/nfc-n.png"
          alt="Resume"
          width={48}
          height={48}
        />
        <Link href="/" passHref>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            Next Resume Builder
          </Typography>
        </Link>

        <div>
          {session ? (
            <Fragment>
              <PersonIcon size="large" /> {session.user.email}
              <Button
                onClick={() => signOut()}
                color="inherit"
                size="small"
                endIcon={<LogoutIcon />}
              >
                Sign out
              </Button>
            </Fragment>
          ) : (
            <Button
              onClick={() => signIn()}
              color="inherit"
              size="small"
              endIcon={<LoginIcon />}
            >
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
