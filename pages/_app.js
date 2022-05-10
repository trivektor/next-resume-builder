import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout";
import AuthProtected from "../components/auth-protected";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Layout>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            {Component.auth ? (
              <AuthProtected>
                <Component {...pageProps} />
              </AuthProtected>
            ) : (
              <Component {...pageProps} />
            )}
          </LocalizationProvider>
        </Layout>
      </SessionProvider>
    </QueryClientProvider>
  );
}
