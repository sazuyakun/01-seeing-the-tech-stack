import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import Resend from "next-auth/providers/resend"
import Google from "next-auth/providers/google"
import clientPromise from "./mongo"

const config = {
  providers: [
    Google,
    Resend
  ],
  adapter: MongoDBAdapter(clientPromise)
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)
