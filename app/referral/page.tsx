"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginWallet from "../components/LoginWallet"; // <-- Asli wallet button connect kiya

export default function Referral() {
  const router = useRouter();

  // Dashboard jaisa professional single structure
  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: false },
    { name: "Membership Plans", route: "/membership", active: false },
    { name: "Rewards History", route: "/rewards", active: false },
    { name: "Referral Program", route: "/referral", active: true },
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
            <h1 className="text-2xl md:text-3xl font-bold">Referral Program</h1>
            <p className="text-sm text-gray-400">Invite friends and earn 10% of their staking rewards.</p>
          </div>
          <div>
            <LoginWallet />
          </div>
        </header>

        {/* 2. YOUR ORIGINAL REFERRAL CARD (HATAIA NAI HAI) */}
        <div className="bg-[#121218] p-6 rounded-2xl border border-gray-800 max-w-xl shadow-xl">
          <h3 className="text-lg font-semibold mb-4 text-amber-500">Your Referral Link</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              readOnly 
              value="https://usdx.network/ref?id=90812" 
              className="bg-black/40 border border-gray-800 rounded-xl px-4 py-3 flex-1 text-sm text-gray-300 outline-none"
            />
            <button className="bg-amber-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-amber-600 transition-all text-sm whitespace-nowrap">
              Copy Link
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
