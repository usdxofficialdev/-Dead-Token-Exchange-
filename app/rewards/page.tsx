"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginWallet from "../components/LoginWallet"; // <-- Asli wallet button connect kiya

export default function Rewards() {
  const router = useRouter();

  // Dashboard aur baaki pages jaisa same standard menu
  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: false },
    { name: "Membership Plans", route: "/membership", active: false },
    { name: "Rewards History", route: "/rewards", active: true },
    { name: "Referral Program", route: "/referral", active: false },
    { name: "Leaderboard", route: "/leaderboard", active: false },
    { name: "Profile Settings", route: "/profile", active: false },
    { name: "Admin Panel", route: "/admin", active: false },
  ];

  return (
    <div className="flex min-h-screen bg-[#0B0B0F] text-white">
      
      {/* 1. SIDEBAR COMPONENT (MATCHING DASHBOARD PERFECTLY) */}
      <aside className="w-64 border-r border-gray-800 bg-[#121218] p-6 hidden md:block">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-amber-500 tracking-wider">USDX NETWORK</h1>
          <p className="text-xs text-gray-500">Premium Token Exchange</p>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(item.route)}
              className={`w-full text-left px-4 p-3 rounded-xl text-sm font-medium transition-all ${
                item.active 
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20" 
                  : "text-gray-400 hover:bg-[#1A1A24] hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8">
        
        {/* HEADER WITH REAL WALLET BUTTON */}
        <header className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Rewards History</h1>
            <p className="text-sm text-gray-400">Track your daily staking and distribution gains.</p>
          </div>
          <div>
            <LoginWallet />
          </div>
        </header>

        {/* 2. REWARDS TABLE (Content bilkul safe hai, hataya nahi hai) */}
        <div className="bg-[#121218] rounded-2xl border border-gray-800 p-6 shadow-xl">
          <div className="overflow-x-auto w-full rounded-xl">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-gray-800 text-xs text-gray-400 uppercase bg-black/20">
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Source</th>
                  <th className="py-3 px-4">Amount</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-800/50">
                <tr className="hover:bg-[#1A1A24]/40">
                  <td className="py-4 px-4 text-gray-400">2026-06-17</td>
                  <td className="py-4 px-4 font-medium">Daily Staking Yield</td>
                  <td className="py-4 px-4 text-emerald-400">+$25.40 USDX</td>
                </tr>
                <tr className="hover:bg-[#1A1A24]/40">
                  <td className="py-4 px-4 text-gray-400">2026-06-16</td>
                  <td className="py-4 px-4 font-medium">Silver Tier Bonus</td>
                  <td className="py-4 px-4 text-emerald-400">+$10.00 USDX</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
