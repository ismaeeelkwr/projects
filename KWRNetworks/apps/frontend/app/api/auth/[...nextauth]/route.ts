import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const response = await fetch(`${process.env.BACKEND_URL ?? "http://localhost:4000"}/api/admin/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        if (!response.ok) return null;
        const user = await response.json();
        return {
          id: user.id?.toString() ?? "0",
          email: user.email,
          role: user.role ?? "OPERATOR"
        };
      }
    })
  ],
  session: { strategy: "jwt" }
});

export { handler as GET, handler as POST };
