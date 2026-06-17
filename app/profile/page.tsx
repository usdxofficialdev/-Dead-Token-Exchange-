"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdvancedProfilePage() {
  const router = useRouter();

  // Sabhi pages se matching Sidebar items
  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: false },
    { name: "Membership Plans", route: "/membership", active: false },
    { name: "Rewards History", route: "/rewards", active: false },
    { name: "Referral Program", route: "/referral", active: false },
    { name: "Leaderboard", route: "/leaderboard", active: false },
    { name: "Profile Settings", route: "/profile", active: true }, // Yeh active hai
    { name: "Admin Panel", route: "/admin", active: false },
  ];

  // Dummy State for Advance Info
  const [username, setUsername] = useState("Shahrukh Siddiqui");
  const [twoFactor, setTwoFactor] = useState(false);

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
      <main className="flex-1 p-8 overflow-y-auto">
        
        {/* Top Header */}
        <header className="flex items-center justify-between border-b border-gray-800 pb-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold">Advanced Account</h2>
            <p className="text-sm text-gray-400">Manage your high-tier nodes, cryptographic security, and verification keys.</p>
          </div>
        </header>

        {/* 3. TWO-COLUMN ADVANCED LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: User info & KYC Cards */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Box A: Identity Info */}
            <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6 shadow-xl">
              <h3 className="text-lg font-bold mb-4 text-amber-500">Profile Parameters</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Display Name</label>
                  <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded-xl border border-gray-700 bg-[#1A1A24] p-3 text-white focus:border-amber-500 focus:outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Email Identity</label>
                  <input 
                    type="text" 
                    value="shahrukhsiddiqui384@gmail.com" 
                    disabled 
                    className="w-full rounded-xl border border-gray-800 bg-[#0B0B0F] p-3 text-gray-500 cursor-not-allowed outline-none text-sm"
                  />
                </div>
              </div>
              <button className="mt-6 rounded-xl bg-amber-500 px-5 py-2.5 text-xs font-bold text-black hover:bg-amber-600 transition-all">
                Update Profile
              </button>
            </div>

            {/* Box B: Advanced System Logs */}
            <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6 shadow-xl">
              <h3 className="text-lg font-bold mb-4 text-white">Recent Security Logs</h3>
              <div className="space-y-3 font-mono text-xs text-gray-400">
                <div className="flex justify-between p-3 rounded-lg bg-[#1A1A24] border border-gray-800/50">
                  <span className="text-emerald-400">✓ Wallet Authorize Success</span>
                  <span>IP: 103.45.21.* (Today)</span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-[#1A1A24] border border-gray-800/50">
                  <span className="text-amber-500">⚠ Token Lock Extended</span>
                  <span>Tier 2 Smart Contract (Yesterday)</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: Tier Badges & Verification Status */}
          <div className="space-y-6">
            
            {/* Badge Card */}
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-transparent p-6 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30 text-amber-500 text-2xl font-bold mb-3">
                S2
              </div>
              <h4 className="text-lg font-bold text-white">Silver Node Member</h4>
              <p className="text-xs text-amber-500/70 font-mono mt-1">Multiplier: 1.5x Multiplier Active</p>
              <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-400 flex justify-between">
                <span>Staked Value</span>
                <span className="font-bold text-white">5,000 USDX</span>
              </div>
            </div>

            {/* Advanced Toggle Box */}
            <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6">
              <h3 className="text-sm font-bold mb-4 text-white">Cryptographic Protocol</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-300">Google 2FA Security</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Adds a layer of protective hash onto withdrawals</p>
                </div>
                <button 
                  onClick={() => setTwoFactor(!twoFactor)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    twoFactor ? "bg-emerald-500 text-black" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {twoFactor ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
