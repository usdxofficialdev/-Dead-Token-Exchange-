"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SimpleAuthPage() {
  const router = useRouter();

  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  // TEMP ADMIN CHECK (backend me replace hoga)
  const isAdmin = (email: string) => {
    return email.toLowerCase().includes("admin");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isSignup && password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Admin routing logic
    if (isAdmin(email)) {
      router.push("/admin");
    } else {
      router.push("/dashboard");
    }
  };

  const handleWalletConnect = () => {
    setIsConnecting(true);
    setError("");

    setTimeout(() => {
      setIsConnecting(false);
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#0B0B0F] text-white px-4 py-6">
      
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-[#121218] p-6 sm:p-8 shadow-2xl">
        
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-amber-500 mb-2">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>

        <p className="text-gray-400 text-xs sm:text-sm text-center mb-6">
          {isSignup ? "Sign up for USDX Network" : "Login to your dashboard"}
        </p>

        {/* Error */}
        {error && (
          <div className="p-3 rounded-lg mb-4 text-xs sm:text-sm text-center bg-red-900/40 text-red-400 border border-red-800">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full rounded-lg border border-gray-700 bg-[#1A1A24] p-3 text-white text-sm focus:border-amber-500 focus:outline-none"
          />

          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-lg border border-gray-700 bg-[#1A1A24] p-3 text-white text-sm focus:border-amber-500 focus:outline-none"
          />

          {isSignup && (
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full rounded-lg border border-gray-700 bg-[#1A1A24] p-3 text-white text-sm focus:border-amber-500 focus:outline-none"
            />
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-amber-500 p-3 font-semibold text-black text-sm sm:text-base hover:bg-amber-600 transition"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* OR */}
        <div className="my-6 flex items-center justify-center">
          <div className="w-full border-t border-gray-800"></div>
          <span className="px-3 text-[10px] sm:text-xs text-gray-500 uppercase">
            OR
          </span>
          <div className="w-full border-t border-gray-800"></div>
        </div>

        {/* WALLET */}
        <button
          onClick={handleWalletConnect}
          disabled={isConnecting}
          className="w-full flex items-center justify-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 text-amber-400 text-sm hover:bg-amber-500/10 disabled:opacity-50"
        >
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </button>

        {/* SWITCH */}
        <div className="mt-6 text-center text-xs text-gray-400">
          <button
            onClick={() => {
              setIsSignup(!isSignup);
              setError("");
            }}
            className="hover:text-amber-500"
          >
            {isSignup ? "Login instead" : "Create account"}
          </button>
        </div>
      </div>
    </div>
  );
}
