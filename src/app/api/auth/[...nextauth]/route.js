// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
       
        if (
          credentials?.email === "w@gmail.com" &&
          credentials?.password === "1234"
        ) {
          return {
            id: "1",
            email: "admin@test.com",
            name: "Admin User",
          };
        }
        return null;
      },
    }),
  ],
  
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };