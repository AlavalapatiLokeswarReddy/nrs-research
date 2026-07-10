import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Mock Authentication",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Mock authentication for the showcase
        if (credentials?.email === "test@example.com" && credentials?.password === "password") {
          return {
            id: "user-1",
            name: "Dr. Demo Researcher",
            email: "test@example.com",
            image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
          };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
});
