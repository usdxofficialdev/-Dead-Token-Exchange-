"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SimpleAuthPage() {
  const router = useRouter();
  
  // Isse hum track karenge ki user Login screen dekh raha hai ya Signup
  const [isSignup, setIsSignup] = useState(false);
  
  // Form fields ke liye state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Signup validation check
    if (isSignup && password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Abhi ke liye temporary bypass: Koi bhi email/password dalo, direct dashboard khulega
    router.push("/dashboard");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#0B0B0F] text-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-[#121218] p-8 shadow-2xl">
        
        {/* Dynamic Header */}
        <h2 className="text-3xl font-bold text-center text-amber-500 mb-2">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          {isSignup ? "Sign up for USDX Network" : "Login to your dashboard"}
        </p>

        {/* Error Alert */}
        {error && (
          <div className="p-3 rounded-lg mb-4 text-sm text-center bg-red-900/40 text-red-400 border border-red-800">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full rounded-lg border border-gray-700 bg-[#1A1A24] p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-700 bg-[#1A1A24] p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Agar Signup mode hai to extra Confirm Password field dikhegi */}
          {isSignup && (
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Confirm Password</label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-700 bg-[#1A1A24] p-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-amber-500 p-3 font-semibold text-black transition hover:bg-amber-600 mt-2"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Switcher Button */}
        <div className="mt-6 text-center text-xs text-gray-400 border-t border-gray-800 pt-4">
          <button 
            onClick={() => { setIsSignup(!isSignup); setError(""); }} 
            className="hover:text-amber-500 transition-colors"
          >
            {isSignup ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
          </button>
        </div>

      </div>
    </div>
  );
}
