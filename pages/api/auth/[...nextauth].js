import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import CredentialProvider from "next-auth/providers/credentials"
import jwtDecode from "jwt-decode"


const EVENTS_API =
  process.env.NODE_ENV !== "development"
    ? "https://eventsall.onrender.com"
    : "http://localhost:5000"

export default NextAuth({
  providers: [
    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialProvider({
      name: "Credentials",
      async authorize(credentials) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        }

        const res = await fetch(`${EVENTS_API}/api/auth/login`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        })

        const user = await res.json()

        if (!res.ok) {
          throw new Error(user.exception)
        }
        // If no error and we have user data, return it
        if (res.ok && user) {
          const decoded = jwtDecode(user.accessToken)
          const { email, roles } = decoded ? decoded.UserInfo : null

          return { email, roles }
        } else {
          return null
        }
      },
      secret: process.env.NEXTAUTH_SECRET,
    }),
  ],
})
