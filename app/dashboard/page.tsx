"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginWallet from "../components/LoginWallet"; // <-- Asli wallet button ko yahan import kiya

export default function DashboardPage() {
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: true },
    { name: "Membership Plans", route: "/membership", active: false },
    { name: "Rewards History", route: "/rewards", active: false },
    { name: "Referral Program", route: "/referral", active: false },
    { name: "Leaderboard", route: "/leaderboard", active: false },
    { name: "Profile Settings", route: "/profile", active: false },
    { name: "Admin Panel", route: "/admin", active: false },
  ];

  return (
    <div className="flex min-h-screen bg-[#0B0B0F] text-white">
      
      {/* 1. SIDEBAR COMPONENT */}
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

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 p-8">
        
        {/* Top Header - Isme asli login/logout button daal diya hai */}
        <header className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-6 mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold">User Dashboard</h2>
            <p className="text-sm text-gray-400">Welcome back! Here is your live crypto status.</p>
          </div>
          
          {/* Right side mein aapka asli working button bina design bigade */}
          <div>
            <LoginWallet />
          </div>
        </header>

        {/* 3. PREMIUM STATS CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Balance */}
          <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6 shadow-xl transition-transform hover:scale-[1.01]">
            <p className="text-sm font-medium text-gray-400">Total Available Balance</p>
            <p className="mt-2 text-4xl font-bold text-amber-500">$12,540.85</p>
            <div className="mt-4 flex items-center text-xs text-emerald-400 font-medium">
              <span>+14.5% up from last week</span>
            </div>
          </div>

          {/* Card 2: Staking */}
          <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6 shadow-xl transition-transform hover:scale-[1.01]">
            <p className="text-sm font-medium text-gray-400">Active Staked Assets</p>
            <p className="mt-2 text-4xl font-bold text-white">$5,000.00</p>
            <div className="mt-4 flex items-center text-xs text-amber-500 font-medium">
              <span>VIP Tier 2 Membership Active</span>
            </div>
          </div>

          {/* Card 3: Total Rewards */}
          <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6 shadow-xl transition-transform hover:scale-[1.01]">
            <p className="text-sm font-medium text-gray-400">Total Rewards Earned</p>
            <p className="mt-2 text-4xl font-bold text-emerald-400">+$420.12</p>
            <div className="mt-4 flex items-center text-xs text-gray-400 font-medium">
              <span>Next distribution in 2 days</span>
            </div>
          </div>

        </div>

        {/* 4. RECENT ACTIVITY TABLE */}
        <div className="mt-10 rounded-2xl border border-gray-800 bg-[#121218] p-6 shadow-xl">
          <h3 className="text-xl font-bold mb-4">Recent Exchange History</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="border-b border-gray-800 text-xs uppercase text-gray-500">
                <tr>
                  <th className="py-3 px-4">Transaction ID</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="py-4 px-4 font-mono text-amber-500">#TXN-90812</td>
                  <td className="py-4 px-4 text-white">Token Staking</td>
                  <td className="py-4 px-4 text-emerald-400">+$1,200.00</td>
                  <td className="py-4 px-4"><span className="rounded bg-emerald-500/10 px-2 py-1 text-xs text-emerald-400 border border-emerald-500/10">Completed</span></td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-mono text-amber-500">#TXN-87123</td>
                  <td className="py-4 px-4 text-white">Referral Bonus</td>
                  <td className="py-4 px-4 text-emerald-400">+$50.00</td>
                  <td className="py-4 px-4"><span className="rounded bg-emerald-500/10 px-2 py-1 text-xs text-emerald-400 border border-emerald-500/10">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
