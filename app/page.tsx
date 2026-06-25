"use client";
import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white flex">
      <aside className="w-64 bg-[#1F2833] p-6 hidden md:block sticky top-0 h-screen">
        <h2 className="text-xl font-bold text-[#FF9F1C] mb-8">USDX NETWORK</h2>
        <nav className="space-y-2">
          {["dashboard", "membership", "rewards", "referral", "profile", "admin"].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`w-full text-left px-4 py-3 rounded-lg font-bold capitalize ${activeTab === tab ? "bg-[#FF9F1C] text-black" : "text-gray-400 hover:bg-gray-800"}`}>
              {tab}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#FF9F1C] mb-2">User Dashboard</h1>
        <p className="text-gray-400 mb-8">Overview of your real-time ecosystem capital asset standing.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1F2833] p-6 rounded-2xl border border-gray-800">
            <p className="text-sm text-gray-400 mb-2">Total Available Balance</p>
            <h3 className="text-3xl font-bold text-[#FF9F1C]">$12,960.97</h3>
            <p className="text-xs text-green-400 mt-2">▲ Live synced with account state</p>
          </div>
          <div className="bg-[#1F2833] p-6 rounded-2xl border border-gray-800">
            <p className="text-sm text-gray-400 mb-2">Active Staked Assets</p>
            <h3 className="text-3xl font-bold text-white">$5,000.00</h3>
            <p className="text-xs text-gray-500 mt-2">🔒 Base Lockup Protocol active</p>
          </div>
          <div className="bg-[#1F2833] p-6 rounded-2xl border border-gray-800">
            <p className="text-sm text-gray-400 mb-2">Total Accrued Earnings</p>
            <h3 className="text-3xl font-bold text-green-400">$420.12</h3>
            <p className="text-xs text-gray-500 mt-2">Go to Rewards tab to claim</p>
          </div>
        </div>

        <div className="bg-[#1F2833] p-6 rounded-2xl border border-gray-800">
          <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="bg-[#FF9F1C] text-black font-bold py-3 rounded-lg hover:bg-amber-600">Stake Now</button>
            <button className="border border-[#FF9F1C] text-[#FF9F1C] font-bold py-3 rounded-lg hover:bg-[#FF9F1C]/10">Claim Rewards</button>
            <button className="border border-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-900">View History</button>
            <button className="border border-gray-800 text-white font-bold py-3 rounded-lg hover:bg-gray-900">Settings</button>
          </div>
        </div>
      </main>
    </div>
  );
}
