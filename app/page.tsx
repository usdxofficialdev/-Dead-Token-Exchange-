"use client";

import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0B0C10] text-white flex flex-col md:flex-row">
      {/* 1. Sidebar: Desktop par dikhega, Mobile par bottom bar ban jayega */}
      <aside className="w-full md:w-64 bg-[#1F2833] p-6 flex flex-row md:flex-col justify-between md:justify-start gap-4 order-2 md:order-1 fixed bottom-0 md:relative z-50 md:z-0 border-t md:border-t-0 border-gray-800">
        <div className="hidden md:block mb-8">
          <h2 className="text-xl font-bold text-[#FF9F1C]">USDX NETWORK</h2>
          <p className="text-xs text-gray-400">Premium Token Exchange</p>
        </div>
        <nav className="flex flex-row md:flex-col gap-2 w-full justify-around md:justify-start overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          <button className="bg-[#FF9F1C] text-black px-4 py-2 rounded-lg font-semibold text-sm min-w-max">Dashboard</button>
          <button className="text-gray-400 hover:text-white px-4 py-2 text-sm min-w-max">Membership Plans</button>
          <button className="text-gray-400 hover:text-white px-4 py-2 text-sm min-w-max">Rewards History</button>
          <button className="text-gray-400 hover:text-white px-4 py-2 text-sm min-w-max">Referral Program</button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 order-1 md:order-2 pb-24 md:pb-8">
        {/* Header */}
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

        {/* 2. Grid Cards: Mobile par 1 column, Desktop par 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm">
            <p className="text-sm text-gray-400 mb-1">Total Available Balance</p>
            <h3 className="text-2xl md:text-3xl font-bold text-[#FF9F1C] mb-2">$12,540.85</h3>
            <span className="text-xs text-green-400">+14.5% up from last week</span>
          </div>
          <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm">
            <p className="text-sm text-gray-400 mb-1">Active Staked Assets</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">$5,000.00</h3>
            <span className="text-xs text-[#FF9F1C]">VIP Tier 2 Membership Active</span>
          </div>
          <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm">
            <p className="text-sm text-gray-400 mb-1">Total Rewards Earned</p>
            <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-2">+$420.12</h3>
            <span className="text-xs text-gray-400">Next distribution in 2 days</span>
          </div>
        </div>

        {/* 3. Recent History Section with Responsive Table Wrapper */}
        <div className="bg-[#1F2833]/30 rounded-2xl border border-gray-800 p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">Recent Exchange History</h2>
          
          {/* overflow-x-auto lagaya hai taaki mobile par horizontal scroll ho sake */}
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-gray-800 text-xs text-gray-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Transaction ID</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-800/50">
                <tr>
                  <td className="py-4 px-4 text-[#FF9F1C] font-mono">#TXN-90812</td>
                  <td className="py-4 px-4 font-medium">Token Staking</td>
                  <td className="py-4 px-4 text-green-400">+$1,200.00</td>
                  <td className="py-4 px-4"><span className="bg-green-500/10 text-green-400 text-xs px-2.5 py-1 rounded-full border border-green-500/20">Completed</span></td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-[#FF9F1C] font-mono">#TXN-87123</td>
                  <td className="py-4 px-4 font-medium">Referral Bonus</td>
                  <td className="py-4 px-4 text-green-400">+$50.00</td>
                  <td className="py-4 px-4"><span className="bg-green-500/10 text-green-400 text-xs px-2.5 py-1 rounded-full border border-green-500/20">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
