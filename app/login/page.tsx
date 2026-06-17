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

  // Email/Password Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isSignup && password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Temporary Bypass: Direct Dashboard
    router.push("/dashboard");
  };

  // Web3 Wallet Connect Handler (Bypass for now)
  const handleWalletConnect = () => {
    setIsConnecting(true);
    setError("");

    // 2 second ka fake loading animation taaki premium feel aaye
    setTimeout(() => {
      setIsConnecting(false);
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#0B0B0F] text-white px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-[#121218] p-8 shadow-2xl">
        
        {/* Header */}
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

        {/* Email Form */}
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

        {/* --- OR SEPARATOR --- */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="absolute w-full border-t border-gray-800"></div>
          <span className="relative bg-[#121218] px-3 text-xs text-gray-500 uppercase tracking-wider">Or Connect With</span>
        </div>

        {/* --- WEB3 WALLET BUTTON --- */}
        <button
          type="button"
          onClick={handleWalletConnect}
          disabled={isConnecting}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3 font-medium text-amber-400 transition hover:bg-amber-500/10 disabled:opacity-50"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          {isConnecting ? "Connecting Wallet..." : "Connect Web3 Wallet"}
        </button>

        {/* Switcher */}
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
