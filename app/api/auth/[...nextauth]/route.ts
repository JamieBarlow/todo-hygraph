import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { hygraphClient } from "@/lib/hygraph";
import { GetUserByEmail } from "@/lib/queries";

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const { userAuth } = await hygraphClient.request<{
          userAuth: { id: string; email: string; password: string };
        }>(GetUserByEmail, { email: credentials.email });

        if (!userAuth) {
          return null;
        }
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          userAuth.password,
        );

        if (!passwordMatch) {
          return null;
        }

        return { id: userAuth.id, email: userAuth.email };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
