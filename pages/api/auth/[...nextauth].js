import NextAuth from "next-auth";
import LinkedinProvider from "next-auth/providers/linkedin";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    LinkedinProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    }),
  ],
});
