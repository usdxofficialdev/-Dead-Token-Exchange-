"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReferralPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const referralLink = "https://dead-token-exchange.vercel.app/signup?ref=USDX99";

  // Sabhi pages se matching Sidebar items
  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: false },
    { name: "Membership Plans", route: "/membership", active: false },
    { name: "Rewards History", route: "/rewards", active: false },
    { name: "Referral Program", route: "/referral", active: true }, // Yeh active hai
    { name: "Leaderboard", route: "/leaderboard", active: false },
    { name: "Profile Settings", route: "/profile", active: false },
    { name: "Admin Panel", route: "/admin", active: false },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex min-h-screen bg-[#0B0B0F] text-white">
      
      {/* 1. MATCHING SIDEBAR */}
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
        
        {/* Top Header */}
        <header className="flex items-center justify-between border-b border-gray-800 pb-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold">Referral Program</h2>
            <p className="text-sm text-gray-400">Invite your friends and earn a 10% bonus on their premium staking deposits.</p>
          </div>
        </header>

        {/* 3. DYNAMIC LINK GENERATOR & STATS */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-10">
          
          {/* Link Box (Spans 2 columns) */}
          <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6 lg:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Your Unique Referral Link</h4>
              <p className="text-xs text-amber-500/70 mb-4">Share this code with your community to start earning.</p>
            </div>
            <div className="flex items-center gap-3 bg-[#1A1A24] p-3 rounded-xl border border-gray-800">
              <input 
                type="text" 
                readOnly 
                value={referralLink}
                className="bg-transparent text-sm w-full outline-none text-gray-300 font-mono"
              />
              <button 
                onClick={handleCopy}
                className="bg-amber-500 text-black text-xs font-bold px-4 py-2 rounded-lg shrink-0 hover:bg-amber-600 transition-all"
              >
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </div>

          {/* Stats Box */}
          <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-1">Total Affiliates</h4>
              <p className="text-4xl font-extrabold text-white mt-2">12 Users</p>
            </div>
            <div className="border-t border-gray-800/60 pt-3 mt-4 flex justify-between text-xs text-gray-400">
              <span>Active Stakers: <strong className="text-emerald-400">5</strong></span>
              <span>Pending: <strong className="text-amber-500">7</strong></span>
            </div>
          </div>

        </div>

        {/* 4. PREMIUM AFFILIATE TRACKING TABLE */}
        <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6 shadow-xl">
          <h3 className="text-xl font-bold mb-4">Referred Friends List</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="border-b border-gray-800 text-xs uppercase text-gray-500">
                <tr>
                  <th className="py-3 px-4">User Address / Email</th>
                  <th className="py-3 px-4">Joined Date</th>
                  <th className="py-3 px-4">Tier Status</th>
                  <th className="py-3 px-4">Your Bonus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="py-4 px-4 font-mono text-white">ali***@gmail.com</td>
                  <td className="py-4 px-4 text-gray-400">2026-06-14</td>
                  <td className="py-4 px-4"><span className="text-amber-500 text-xs bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">Silver Tier</span></td>
                  <td className="py-4 px-4 text-emerald-400 font-semibold">+50.00 USDX</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-mono text-white">rah***@gmail.com</td>
                  <td className="py-4 px-4 text-gray-400">2026-06-12</td>
                  <td className="py-4 px-4"><span className="text-gray-400 text-xs bg-gray-800 border border-gray-700 px-2 py-0.5 rounded">Bronze Tier</span></td>
                  <td className="py-4 px-4 text-emerald-400 font-semibold">+10.00 USDX</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
