"use client";

import { signIn } from "@/lib/auth";
import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleEmailSignIn = async (e) => {
    e.preventDefault()
    try {
      "use server"
      await signIn("resend", { email, redirectTo: "/dashboard"})
    } catch (err) {
      setError("Failed to send email. Please try again.")
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      "use server"
      await signIn("google", {redirectTo: "/dashboard"})
    } catch (err) {
      setError("Google sign-in failed. Please try again.")
    }
  }
  return (
    <div>
      <form onSubmit={handleEmailSignIn} className="mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Sign In with Email
        </button>
      </form>
      <button
        onClick={handleGoogleSignIn}
        className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-900"
      >
        Sign In With Google
      </button>
    </div>
  );
}
