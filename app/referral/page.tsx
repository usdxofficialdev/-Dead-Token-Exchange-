"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginWallet from "../components/LoginWallet"; // Real-time wallet tracking connected

export default function ReferralProgram() {
  const router = useRouter();

  // Core Dynamic States connected to your Admin Control System
  const [referralLink, setReferralLink] = useState("https://usdx.network/ref?id=90812");
  const [referralStats, setReferralStats] = useState({
    totalInvites: "14 Users",
    activeStakers: "8 Active",
    commissionEarned: "420.50 USDX",
    pendingPayout: "45.00 USDX"
  });

  // Dynamic tracking table array synced with admin control panel logs
  const [referralRows, setReferralRows] = useState([
    { user: "0x4A1...d912", date: "2026-06-20", tier: "Gold Tier", status: "Active Staking", reward: "+85.00 USDX" },
    { user: "0x8B3...e110", date: "2026-06-19", tier: "Silver Tier", status: "Active Staking", reward: "+35.20 USDX" },
    { user: "am***@gmail.com", date: "2026-06-15", tier: "Bronze Tier", status: "Account Created", reward: "0.00 USDX" },
  ]);

  // Syncing with shared admin data payload on application mount
  useEffect(() => {
    // 1. Link configuration sync
    const customLink = localStorage.getItem("admin_global_referral_link");
    if (customLink) setReferralLink(customLink);

    // 2. Performance Stats sync
    const customStats = localStorage.getItem("admin_referral_stats");
    if (customStats) setReferralStats(JSON.parse(customStats));

    // 3. Network Rows history log sync
    const customRows = localStorage.getItem("admin_referral_network_rows");
    if (customRows) setReferralRows(JSON.parse(customRows));
  }, []);

  // Professional Navigation mapping matrix
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
      
      {/* 1. SIDEBAR GRID SYSTEM */}
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

      {/* 2. MAIN WORKING ZONE */}
      <main className="flex-1 p-8">
        
        {/* TOP COMPONENT HEADER HEADER */}
        <header className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Referral Program</h1>
            <p className="text-sm text-gray-400">Invite connections to the USDX Node network and instantly bag a premium 10% on their staking yield distributions.</p>
          </div>
          <div>
            <LoginWallet />
          </div>
        </header>

        {/* ADVANCED STEP: NETWORK LIVE COMMISSIONS CARD */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#121218] border border-gray-800 p-5 rounded-xl shadow-md">
            <span className="block text-[11px] uppercase text-gray-500 font-semibold mb-1">Total Invites</span>
            <span className="text-xl font-bold text-white">{referralStats.totalInvites}</span>
          </div>
          <div className="bg-[#121218] border border-gray-800 p-5 rounded-xl shadow-md">
            <span className="block text-[11px] uppercase text-gray-500 font-semibold mb-1">Active Stakers</span>
            <span className="text-xl font-bold text-amber-500">{referralStats.activeStakers}</span>
          </div>
          <div className="bg-[#121218] border border-gray-800 p-5 rounded-xl shadow-md">
            <span className="block text-[11px] uppercase text-gray-500 font-semibold mb-1">Commission Earned</span>
            <span className="text-xl font-bold text-emerald-400">{referralStats.commissionEarned}</span>
          </div>
          <div className="bg-[#121218] border border-gray-800 p-5 rounded-xl shadow-md">
            <span className="block text-[11px] uppercase text-gray-500 font-semibold mb-1">Pending Sync</span>
            <span className="text-xl font-bold text-gray-400">{referralStats.pendingPayout}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-8 max-w-6xl">
          
          {/* LINK ACQUISITION BOX */}
          <div className="lg:col-span-2 bg-[#121218] border border-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-amber-500 mb-2">Your Premium Network Gate</h3>
            <p className="text-xs text-gray-400 mb-4">Share this link directly. New nodes initializing through this path append to your tracking index automatically.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                readOnly 
                value={referralLink} 
                className="bg-black/40 border border-gray-800 rounded-xl px-4 py-3 flex-1 text-sm text-gray-300 outline-none select-all"
              />
              <button 
                onClick={() => { navigator.clipboard.writeText(referralLink); alert("Referral gateway link copied!"); }} 
                className="bg-amber-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-amber-600 transition-all text-sm whitespace-nowrap"
              >
                Copy Link
              </button>
            </div>
          </div>

          {/* ADVANCED MILESTONES BOX */}
          <div className="bg-[#121218] border border-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-amber-500 mb-2">Network Milestones</h3>
            <div className="space-y-3 mt-4">
              <div className="bg-black/20 p-3 rounded-xl border border-gray-800/40">
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>Reach 20 Invites</span>
                  <span className="text-amber-500">+50 USDX Bonus</span>
                </div>
                <div className="w-full bg-gray-900 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[70%]"></div>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">Milestones automatically process tokens directly into your dynamic reward log once the metric updates.</p>
            </div>
          </div>

        </div>

        {/* 3. DYNAMIC NETWORK CONNECTION LIST LOG */}
        <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6 shadow-xl max-w-6xl">
          <h3 className="text-xl font-bold mb-4">Referred Nodes Logs</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="border-b border-gray-800 text-xs uppercase text-gray-500">
                <tr>
                  <th className="py-3 px-4">Node Account</th>
                  <th className="py-3 px-4">Connection Date</th>
                  <th className="py-3 px-4">Staking Tier</th>
                  <th className="py-3 px-4">Network Status</th>
                  <th className="py-3 px-4">Your Yield Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {referralRows.map((row, index) => (
                  <tr key={index} className="hover:bg-black/10 transition-colors">
                    <td className="py-4 px-4 font-mono text-white">{row.user}</td>
                    <td className="py-4 px-4 text-gray-400 text-xs">{row.date}</td>
                    <td className="py-4 px-4">
                      <span className="text-xs px-2 py-0.5 rounded border border-gray-800 bg-black/20 text-gray-300">
                        {row.tier}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${row.status.includes("Staking") ? "text-amber-500" : "text-gray-500"}`}>
                        ● {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">{row.reward}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
