"use client";

import React from "react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0B0C10] text-white flex flex-col md:flex-row">
      
      {/* 1. SIDEBAR & BOTTOM NAV (100% WORKING LINKS) */}
      <aside className="w-full md:w-64 bg-[#1F2833] p-4 md:p-6 flex flex-row md:flex-col justify-between md:justify-start gap-4 order-2 md:order-1 fixed bottom-0 md:relative z-50 md:z-0 border-t md:border-t-0 border-gray-800">
        <div className="hidden md:block mb-8">
          <h2 className="text-xl font-bold text-[#FF9F1C]">USDX NETWORK</h2>
          <p className="text-xs text-gray-400">Premium Token Exchange</p>
        </div>
        
        <nav className="flex flex-row md:flex-col gap-2 w-full justify-around md:justify-start overflow-x-auto md:overflow-visible pb-1 md:pb-0">
          <Link href="/dashboard" className="bg-[#FF9F1C] text-black px-4 py-2 rounded-lg font-semibold text-sm min-w-max text-center transition-all">
            Dashboard
          </Link>
          <Link href="/membership" className="text-gray-400 hover:text-white hover:bg-gray-800/50 px-4 py-2 rounded-lg text-sm min-w-max text-center transition-all">
            Membership Plans
          </Link>
          <Link href="/rewards" className="text-gray-400 hover:text-white hover:bg-gray-800/50 px-4 py-2 rounded-lg text-sm min-w-max text-center transition-all">
            Rewards History
          </Link>
          <Link href="/referral" className="text-gray-400 hover:text-white hover:bg-gray-800/50 px-4 py-2 rounded-lg text-sm min-w-max text-center transition-all">
            Referral Program
          </Link>
        </nav>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-8 order-1 md:order-2 pb-24 md:pb-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">User Dashboard</h1>
            <p className="text-sm text-gray-400">Welcome back! Here is your live crypto status.</p>
          </div>
          <div className="flex items-center gap-2 bg-[#1F2833] px-4 py-2 rounded-full border border-green-500/30">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-green-400 font-medium">Wallet: Connected</span>
          </div>
        </div>

        {/* 2. CRYPTO DATA CARDS (RESPONSIVE STACKING) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm hover:border-[#FF9F1C]/40 transition-all">
            <p className="text-sm text-gray-400 mb-1">Total Available Balance</p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#FF9F1C] mb-2">$12,540.85</h3>
            <span className="text-xs text-green-400">▲ +14.5% up from last week</span>
          </div>
          
          <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm hover:border-white/20 transition-all">
            <p className="text-sm text-gray-400 mb-1">Active Staked Assets</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">$5,000.00</h3>
            <span className="text-xs text-[#FF9F1C]">★ VIP Tier 2 Active</span>
          </div>
          
          <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm hover:border-green-500/20 transition-all">
            <p className="text-sm text-gray-400 mb-1">Total Rewards Earned</p>
            <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">+$420.12</h3>
            <span className="text-xs text-gray-400">Next distribution in 2 days</span>
          </div>
        </div>

        {/* QUICK LIVE STATUS / CHART PLACEHOLDER */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          <div className="bg-[#1F2833]/20 border border-gray-800 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold">USDX Token Live Performance</h3>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">Live 24h</span>
            </div>
            <div className="h-32 flex items-end gap-2 pt-4 border-b border-gray-800">
              {/* Simple CSS Visual Chart representation */}
              <div className="bg-gray-800 w-full h-12 rounded-t-sm"></div>
              <div className="bg-gray-800 w-full h-20 rounded-t-sm"></div>
              <div className="bg-gray-800 w-full h-16 rounded-t-sm"></div>
              <div className="bg-[#FF9F1C]/60 w-full h-28 rounded-t-sm animate-pulse"></div>
              <div className="bg-green-500/60 w-full h-24 rounded-t-sm"></div>
              <div className="bg-green-500 w-full h-32 rounded-t-sm"></div>
            </div>
          </div>
        </div>

        {/* 3. RECENT HISTORY WITH RESPONSIVE TABLE OVERFLOW */}
        <div className="bg-[#1F2833]/30 rounded-2xl border border-gray-800 p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">Recent Exchange History</h2>
          
          <div className="overflow-x-auto w-full rounded-xl">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-800 text-xs text-gray-400 uppercase tracking-wider bg-[#1F2833]/40">
                  <th className="py-3 px-4">Transaction ID</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-800/50">
                <tr className="hover:bg-gray-900/40 transition-colors">
                  <td className="py-4 px-4 text-[#FF9F1C] font-mono">#TXN-90812</td>
                  <td className="py-4 px-4 font-medium">Token Staking</td>
                  <td className="py-4 px-4 text-green-400">+$1,200.00</td>
                  <td className="py-4 px-4">
                    <span className="bg-green-500/10 text-green-400 text-xs px-2.5 py-1 rounded-full border border-green-500/20">Completed</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-900/40 transition-colors">
                  <td className="py-4 px-4 text-[#FF9F1C] font-mono">#TXN-87123</td>
                  <td className="py-4 px-4 font-medium">Referral Bonus</td>
                  <td className="py-4 px-4 text-green-400">+$50.00</td>
                  <td className="py-4 px-4">
                    <span className="bg-green-500/10 text-green-400 text-xs px-2.5 py-1 rounded-full border border-green-500/20">Completed</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-900/40 transition-colors">
                  <td className="py-4 px-4 text-[#FF9F1C] font-mono">#TXN-85411</td>
                  <td className="py-4 px-4 font-medium">USDX Exchange</td>
                  <td className="py-4 px-4 text-white">$310.00</td>
                  <td className="py-4 px-4">
                    <span className="bg-green-500/10 text-green-400 text-xs px-2.5 py-1 rounded-full border border-green-500/20">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
