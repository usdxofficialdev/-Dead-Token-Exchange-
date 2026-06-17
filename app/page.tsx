"use client";

import React, { useState } from "react";

export default function CompleteDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white flex flex-col md:flex-row pb-24 md:pb-0">
      
      {/* 1. SIDEBAR & MOBILE BOTTOM NAVIGATION */}
      <aside className="w-full md:w-64 bg-[#1F2833] p-4 md:p-6 flex flex-row md:flex-col justify-between md:justify-start gap-4 fixed bottom-0 md:relative z-50 border-t md:border-t-0 border-gray-800 shadow-xl">
        <div className="hidden md:block mb-8">
          <h2 className="text-xl font-bold text-[#FF9F1C] tracking-wider">USDX NETWORK</h2>
          <p className="text-xs text-gray-400 mt-1">Premium Token Exchange</p>
        </div>
        
        <nav className="flex flex-row md:flex-col gap-2 w-full justify-around md:justify-start overflow-x-auto md:overflow-visible">
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm min-w-max text-center transition-all ${activeTab === "dashboard" ? "bg-[#FF9F1C] text-black shadow-md shadow-[#FF9F1C]/20" : "text-gray-400 hover:text-white hover:bg-gray-800/30"}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab("membership")}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm min-w-max text-center transition-all ${activeTab === "membership" ? "bg-[#FF9F1C] text-black shadow-md shadow-[#FF9F1C]/20" : "text-gray-400 hover:text-white hover:bg-gray-800/30"}`}
          >
            Membership
          </button>
          <button 
            onClick={() => setActiveTab("rewards")}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm min-w-max text-center transition-all ${activeTab === "rewards" ? "bg-[#FF9F1C] text-black shadow-md shadow-[#FF9F1C]/20" : "text-gray-400 hover:text-white hover:bg-gray-800/30"}`}
          >
            Rewards
          </button>
          <button 
            onClick={() => setActiveTab("referral")}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm min-w-max text-center transition-all ${activeTab === "referral" ? "bg-[#FF9F1C] text-black shadow-md shadow-[#FF9F1C]/20" : "text-gray-400 hover:text-white hover:bg-gray-800/30"}`}
          >
            Referral
          </button>
        </nav>
      </aside>

      {/* 2. DYNAMIC MAIN CONTENT VIEW */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
        
        {/* DASHBOARD VIEW */}
        {activeTab === "dashboard" && (
          <div className="animate-fadeIn">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">User Dashboard</h1>
                <p className="text-sm text-gray-400 mt-1">Welcome back! Here is your live crypto status.</p>
              </div>
              <div className="flex items-center gap-2 bg-[#1F2833] px-4 py-2 rounded-full border border-green-500/30 shadow-inner">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-400 font-semibold tracking-wide">Connected</span>
              </div>
            </div>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm shadow-sm">
                <p className="text-sm text-gray-400 mb-1">Total Available Balance</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#FF9F1C]">$12,540.85</h3>
              </div>
              <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm shadow-sm">
                <p className="text-sm text-gray-400 mb-1">Active Staked Assets</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">$5,000.00</h3>
              </div>
              <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm shadow-sm">
                <p className="text-sm text-gray-400 mb-1">Total Rewards Earned</p>
                <h3 className="text-2xl md:text-3xl font-bold text-green-400">+$420.12</h3>
              </div>
            </div>

            {/* Live Chart Visual Area */}
            <div className="bg-[#1F2833]/20 border border-gray-800 p-6 rounded-2xl mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">USDX Live Market Trend</h3>
                <span className="text-xs bg-gray-800 px-2 py-1 rounded text-[#FF9F1C] font-mono">Live 24h</span>
              </div>
              <div className="h-28 flex items-end gap-3 pt-4 border-b border-gray-800/60">
                <div className="bg-gray-800/40 w-full h-12 rounded-t-md"></div>
                <div className="bg-gray-800/60 w-full h-20 rounded-t-md"></div>
                <div className="bg-gray-800/40 w-full h-16 rounded-t-md"></div>
                <div className="bg-[#FF9F1C]/40 w-full h-24 rounded-t-md animate-pulse"></div>
                <div className="bg-green-500/40 w-full h-20 rounded-t-md"></div>
                <div className="bg-green-500/80 w-full h-28 rounded-t-md"></div>
              </div>
            </div>

            {/* Recent Exchange History Table */}
            <div className="bg-[#1F2833]/30 rounded-2xl border border-gray-800 p-4 md:p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4">Recent Exchange History</h2>
              <div className="overflow-x-auto w-full rounded-xl">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-800 text-xs text-gray-400 uppercase tracking-wider bg-[#1F2833]/50">
                      <th className="py-3 px-4">Transaction ID</th>
                      <th className="py-3 px-4">Type</th>
                      <th className="py-3 px-4">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-800/40">
                    <tr className="hover:bg-gray-900/30 transition-colors">
                      <td className="py-4 px-4 text-[#FF9F1C] font-mono">#TXN-90812</td>
                      <td className="py-4 px-4 font-medium">Token Staking</td>
                      <td className="py-4 px-4 text-green-400 font-semibold">+$1,200.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* MEMBERSHIP VIEW */}
        {activeTab === "membership" && (
          <div className="animate-fadeIn">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Membership Plans</h1>
            <p className="text-sm text-gray-400 mb-8">Choose your premium staking tier to boost earnings.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="bg-[#1F2833]/40 p-6 rounded-2xl border border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-all">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-300">Silver Plan</h3>
                  <span className="text-3xl font-extrabold text-[#FF9F1C]">500 USDX</span>
                  <div className="mt-4 inline-block bg-[#FF9F1C]/10 text-[#FF9F1C] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#FF9F1C]/20">
                    10% APY Daily
                  </div>
                  <ul className="space-y-3 text-sm text-gray-400 mt-6">
                    <li>✔ 10 Team Members Allowed</li>
                    <li>✔ 24/7 Priority Support</li>
                    <li>✔ Advanced Analytics Dashboard</li>
                  </ul>
                </div>
                <button className="w-full bg-[#FF9F1C] hover:bg-[#e08b14] text-black font-bold py-3 rounded-xl transition-all mt-8 shadow-lg shadow-[#FF9F1C]/10">
                  Activate Plan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* REWARDS VIEW */}
        {activeTab === "rewards" && (
          <div className="animate-fadeIn">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Rewards History</h1>
            <p className="text-sm text-gray-400 mb-8">Track your daily staking and distribution gains.</p>
            
            <div className="bg-[#1F2833]/30 rounded-2xl border border-gray-800 p-4 md:p-6 shadow-sm">
              <div className="overflow-x-auto w-full rounded-xl">
                <table className="w-full text-left border-collapse min-w-[400px]">
                  <thead>
                    <tr className="border-b border-gray-800 text-xs text-gray-400 uppercase tracking-wider bg-[#1F2833]/50">
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Source</th>
                      <th className="py-3 px-4">Yield</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-800/40">
                    <tr className="hover:bg-gray-900/30 transition-colors">
                      <td className="py-4 px-4 text-gray-400">2026-06-18</td>
                      <td className="py-4 px-4 font-medium">Daily Staking Yield</td>
                      <td className="py-4 px-4 text-green-400 font-semibold">+$25.40 USDX</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* REFERRAL VIEW */}
        {activeTab === "referral" && (
          <div className="animate-fadeIn">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Referral Program</h1>
            <p className="text-sm text-gray-400 mb-8">Invite friends and earn 10% of their staking rewards.</p>
            
            <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 max-w-xl shadow-sm">
              <h3 className="text-sm font-semibold mb-3 text-[#FF9F1C] uppercase tracking-wider">Your Referral Link</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="text" 
                  readOnly 
                  value="https://usdx.network/ref?id=90812" 
                  className="bg-black/40 border border-gray-800 rounded-xl px-4 py-3 flex-1 text-sm text-gray-300 outline-none font-mono"
                />
                <button className="bg-[#FF9F1C] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#e08b14] transition-all text-sm whitespace-nowrap">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
