"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginWallet from "../components/LoginWallet"; // <-- Asli wallet button import kiya

export default function Membership() {
  const router = useRouter();

  // Dashboard jaisa hi menu items structure
  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: false },
    { name: "Membership Plans", route: "/membership", active: true },
    { name: "Rewards History", route: "/rewards", active: false },
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
        
        {/* HEADER - Isme se nakli state hata kar asli wallet button fit kiya hai */}
        <header className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-6 mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold">Membership Plans</h2>
            <p className="text-sm text-gray-400">Choose your premium staking tier to boost earnings.</p>
          </div>
          
          {/* Right side mein asli working wallet connect button */}
          <div>
            <LoginWallet />
          </div>
        </header>

        {/* 2. MEMBERSHIP CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Bronze Plan */}
          <div className="bg-[#121218] p-6 rounded-2xl border border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-all">
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-300">Bronze Plan</h3>
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-amber-500">100 USDX</span>
              </div>
              <span className="inline-block bg-amber-500/10 text-amber-500 text-xs font-semibold px-2.5 py-1 rounded-full mb-6 border border-amber-500/20">
                5% APY Daily
              </span>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-center gap-2">✔ 2 Team Members Allowed</li>
                <li className="flex items-center gap-2">✔ Email Support</li>
                <li className="flex items-center gap-2">✔ Basic Live Analytics</li>
              </ul>
            </div>
            <button className="w-full bg-[#1A1A24] hover:bg-gray-800 text-white font-medium py-3 rounded-xl transition-all border border-gray-700">
              Activate Plan
            </button>
          </div>

          {/* Silver Plan (Most Popular) */}
          <div className="bg-[#121218] p-6 rounded-2xl border-2 border-amber-500 flex flex-col justify-between relative shadow-lg shadow-amber-500/5 transform md:-translate-y-2">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              MOST POPULAR
            </span>
            <div className="mt-2">
              <h3 className="text-xl font-bold mb-2 text-white">Silver Plan</h3>
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-amber-500">500 USDX</span>
              </div>
              <span className="inline-block bg-amber-500/20 text-amber-500 text-xs font-semibold px-2.5 py-1 rounded-full mb-6 border border-amber-500/40">
                10% APY Daily
              </span>
              <ul className="space-y-3 text-sm text-gray-200 mb-8">
                <li className="flex items-center gap-2 text-amber-500">✔ 10 Team Members Allowed</li>
                <li className="flex items-center gap-2">✔ 24/7 Priority Support</li>
                <li className="flex items-center gap-2">✔ Advanced Analytics</li>
                <li className="flex items-center gap-2">✔ Monthly Bonus Rewards</li>
              </ul>
            </div>
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded-xl transition-all shadow-md shadow-amber-500/20">
              Activate Plan
            </button>
          </div>

          {/* Gold Plan */}
          <div className="bg-[#121218] p-6 rounded-2xl border border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-all">
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-300">Gold Plan</h3>
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-amber-500">2,000 USDX</span>
              </div>
              <span className="inline-block bg-amber-500/10 text-amber-500 text-xs font-semibold px-2.5 py-1 rounded-full mb-6 border border-amber-500/20">
                15% APY Daily
              </span>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-center gap-2">✔ Unlimited Members</li>
                <li className="flex items-center gap-2">✔ VIP Personal Support</li>
                <li className="flex items-center gap-2">✔ Premium Analytics</li>
                <li className="flex items-center gap-2">✔ Exclusive Platform Events</li>
              </ul>
            </div>
            <button className="w-full bg-[#1A1A24] hover:bg-gray-800 text-white font-medium py-3 rounded-xl transition-all border border-gray-700">
              Activate Plan
            </button>
          </div>

        </div>

      </main>
    </div>
  );
}
