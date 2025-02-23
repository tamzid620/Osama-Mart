import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    id: string;
    role: string;
  }

  interface Session {
    user: {
      id: string;
      role: string;
      name?: string;
      email?: string;
    };
  }

  interface JWT {
    id: string;
    role: string;
  }
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (email !== "admin@test.com" || password !== "12345") {
          throw new Error("invalid credentials");
        }
        return {
          id: "007",
          name: "Osama",
          email: "admin@test.com",
          role: "admin",
          token: "nopiqpwoervhjmp qocwejhm[vuyn3-v7nyuu"
        };
      },
    }),
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //       token.role = user.role;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     session.user = {
  //       ...(session.user || {}),
  //       id: token.id as string,
  //       role: token.role as string,
  //     };
  //     return session;
  //   },
  // },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      token.id = session.user.id as string ;
      token.role = session.user.role as string ;
      return session;
    },
  },
  
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
