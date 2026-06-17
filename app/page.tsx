"use client";

import React, { useState } from "react";

export default function CompleteDashboard() {
  // Active Tab state taaki mobile par bhi content smooth switch ho sake
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white flex flex-col md:flex-row pb-20 md:pb-0">
      
      {/* 1. PERMANENT SIDEBAR & MOBILE BOTTOM NAV */}
      <aside className="w-full md:w-64 bg-[#1F2833] p-4 md:p-6 flex flex-row md:flex-col justify-between md:justify-start gap-4 fixed bottom-0 md:relative z-50 border-t md:border-t-0 border-gray-800">
        <div className="hidden md:block mb-8">
          <h2 className="text-xl font-bold text-[#FF9F1C]">USDX NETWORK</h2>
          <p className="text-xs text-gray-400">Premium Token Exchange</p>
        </div>
        
        <nav className="flex flex-row md:flex-col gap-2 w-full justify-around md:justify-start overflow-x-auto md:overflow-visible">
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-2 rounded-lg font-semibold text-sm min-w-max text-center transition-all ${activeTab === "dashboard" ? "bg-[#FF9F1C] text-black" : "text-gray-400 hover:text-white"}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab("membership")}
            className={`px-4 py-2 rounded-lg font-semibold text-sm min-w-max text-center transition-all ${activeTab === "membership" ? "bg-[#FF9F1C] text-black" : "text-gray-400 hover:text-white"}`}
          >
            Membership
          </button>
          <button 
            onClick={() => setActiveTab("rewards")}
            className={`px-4 py-2 rounded-lg font-semibold text-sm min-w-max text-center transition-all ${activeTab === "rewards" ? "bg-[#FF9F1C] text-black" : "text-gray-400 hover:text-white"}`}
          >
            Rewards
          </button>
          <button 
            onClick={() => setActiveTab("referral")}
            className={`px-4 py-2 rounded-lg font-semibold text-sm min-w-max text-center transition-all ${activeTab === "referral" ? "bg-[#FF9F1C] text-black" : "text-gray-400 hover:text-white"}`}
          >
            Referral
          </button>
        </nav>
      </aside>

      {/* 2. DYNAMIC MAIN CONTENT VIEW */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        
        {/* DASHBOARD VIEW */}
        {activeTab === "dashboard" && (
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">User Dashboard</h1>
                <p className="text-sm text-gray-400">Welcome back! Live crypto status.</p>
              </div>
              <div className="flex items-center gap-2 bg-[#1F2833] px-4 py-2 rounded-full border border-green-500/30">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-400 font-medium">Connected</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800">
                <p className="text-sm text-gray-400 mb-1">Total Balance</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#FF9F1C]">$12,540.85</h3>
              </div>
              <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800">
                <p className="text-sm text-gray-400 mb-1">Staked Assets</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">$5,000.00</h3>
              </div>
              <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800">
                <p className="text-sm text-gray-400 mb-1">Total Rewards</p>
                <h3 className="text-2xl md:text-3xl font-bold text-green-400">+$420.12</h3>
              </div>
            </div>

            <div className="bg-[#1F2833]/30 rounded-2xl border border-gray-800 p-4 md:p-6">
              <h2 className="text-lg font-bold mb-4">Recent History</h2>
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-800 text-xs text-gray-400 uppercase">
                      <th className="py-2 px-4">TXN ID</th>
                      <th className="py-2 px-4">Type</th>
                      <th className="py-2 px-4">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="py-3 px-4 text-[#FF9F1C]">#TXN-90812</td>
                      <td className="py-3 px-4">Staking</td>
                      <td className="py-3 px-4 text-green-400">+$1,200.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* MEMBERSHIP VIEW */}
        {activeTab === "membership" && (
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Membership Plans</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1F2833]/40 p-6 rounded-2xl border border-gray-800 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-300">Silver Plan</h3>
                  <span className="text-2xl font-extrabold text-[#FF9F1C]">500 USDX</span>
                  <p className="text-sm text-gray-400 mt-4">✔ 10% APY Daily</p>
                </div>
                <button className="w-full bg-[#FF9F1C] text-black font-bold py-2.5 rounded-xl mt-6">Activate</button>
              </div>
            </div>
          </div>
        )}

        {/* REWARDS VIEW */}
        {activeTab === "rewards" && (
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Rewards History</h1>
            <div className="bg-[#1F2833]/30 rounded-2xl border border-gray-800 p-4">
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left min-w-[400px]">
                  <thead>
                    <tr className="border-b border-gray-800 text-xs text-gray-400">
                      <th className="py-2 px-4">Date</th>
                      <th className="py-2 px-4">Yield</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 text-gray-400">2026-06-18</td>
                      <td className="py-3 px-4 text-green-400">+$25.40 USDX</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* REFERRAL VIEW */}
        {activeTab === "referral" && (
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Referral Program</h1>
            <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 max-w-xl">
              <h3 className="text-base font-semibold mb-3 text-[#FF9F1C]">Your Link</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input type="text" readOnly value="https://usdx.network/ref?id=90812" className="bg-black/40 border border-gray-800 rounded-xl px-4 py-2 text-sm flex-1 outline-none" />
                <button className="bg-[#FF9F1C] text-black font-bold px-4 py-2 rounded-xl text-sm">Copy</button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
