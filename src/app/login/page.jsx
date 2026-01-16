"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });

      if (result?.error) {
        setError("Invalid email or password");
        setLoading(false);
      } else if (result?.ok) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form onSubmit={handleForm} className="space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-2xl">
              {error}
            </div>
          )}
          
          <div>
            <label className="text-white font-semibold text-lg">Email</label>
            <input
              className="bg-white py-3 px-3 w-full rounded-2xl mt-2"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          
          <div>
            <label className="text-white font-semibold text-lg">Password</label>
            <input
              type="password"
              placeholder="*********"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white py-3 px-3 w-full rounded-2xl mt-2"
              required
              disabled={loading}
            />
          </div>
          
          <button
            className="w-full bg-white/10 backdrop-blur-2xl font-bold cursor-pointer text-white p-3 mt-2 rounded-2xl hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}