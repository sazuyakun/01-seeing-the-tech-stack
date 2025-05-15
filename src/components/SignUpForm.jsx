"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleEmailSignUp = async (e) => {
    e.preventDefault()
    try {
      await signIn("render", {
        email,
        redirectTo: "/dashboard",
        name
      })
    } catch (err) {
      setError("Failed to send email. Please try again.")
    }
  }


  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      await signIn("google", {redirectTo: "/dashboard"})
    } catch (err) {
      setError("Google sign-in failed. Please try again.")
    }
  }


  return (
    <div>
      {error && <p className="text-red-500 mb-4">Error: {error}</p>}
      <form onSubmit={handleEmailSignUp}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="text"
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
          Sign Up with Email
        </button>
      </form>
      <button onClick={handleGoogleSignIn} className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-900 my-3">
        Sign Up with Google
      </button>
    </div>
  );
}
