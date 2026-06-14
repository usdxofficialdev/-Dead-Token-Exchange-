"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const w = localStorage.getItem("wallet");
    if (w) setWallet(w);

    const n = localStorage.getItem("username");
    if (n) setUserName(n);
  }, []);

  const data = {
    balance: 1250,
    staking: 500,
    rewards: 120,
    referral: 75,
    sent: 320,
    received: 980
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Welcome Banner */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 shadow-xl">
          <h1 className="text-3xl font-black text-amber-500 tracking-wider mb-2">
            ⚡ USDX DASHBOARD
          </h1>
          <h3 className="text-xl font-medium text-zinc-300">
            Welcome back, <span className="text-amber-400 font-bold">{userName}</span>
          </h3>
          <p className="text-sm text-zinc-500 mt-2 font-mono bg-black/40 p-2 rounded-lg inline-block border border-zinc-900">
            Wallet: {wallet ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}` : "Not Connected"}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl transition-all duration-300 hover:border-amber-500/50">
            <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">Balance</p>
            <h2 className="text-3xl font-black text-amber-400 mt-1">${data.balance}</h2>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl transition-all duration-300 hover:border-amber-500/50">
            <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">Staking</p>
            <h2 className="text-3xl font-black text-amber-400 mt-1">${data.staking}</h2>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl transition-all duration-300 hover:border-amber-500/50">
            <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">Rewards</p>
            <h2 className="text-3xl font-black text-amber-400 mt-1">${data.rewards}</h2>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl transition-all duration-300 hover:border-amber-500/50">
            <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">Referral</p>
            <h2 className="text-3xl font-black text-amber-400 mt-1">${data.referral}</h2>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl transition-all duration-300 hover:border-amber-500/50">
            <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">Sent</p>
            <h2 className="text-3xl font-black text-zinc-300 mt-1">${data.sent}</h2>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl transition-all duration-300 hover:border-amber-500/50">
            <p className="text-zinc-500 text-sm font-semibold uppercase tracking-wider">Received</p>
            <h2 className="text-3xl font-black text-zinc-300 mt-1">${data.received}</h2>
          </div>
        </div>

      </div>
    </div>
  );
}
