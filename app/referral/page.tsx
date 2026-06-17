"use client";

import React from "react";
import Link from "next/link";

export default function Referral() {
  return (
    <div className="min-h-screen bg-[#0B0C10] text-white flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-[#1F2833] p-4 md:p-6 flex flex-row md:flex-col justify-between md:justify-start gap-4 order-2 md:order-1 fixed bottom-0 md:relative z-50 md:z-0 border-t md:border-t-0 border-gray-800">
        <div className="hidden md:block mb-8">
          <h2 className="text-xl font-bold text-[#FF9F1C]">USDX NETWORK</h2>
          <p className="text-xs text-gray-400">Premium Token Exchange</p>
        </div>
        <nav className="flex flex-row md:flex-col gap-2 w-full justify-around md:justify-start overflow-x-auto md:overflow-visible pb-1 md:pb-0">
          <Link href="/dashboard" className="text-gray-400 hover:text-white hover:bg-gray-800/50 px-4 py-2 rounded-lg text-sm min-w-max text-center transition-all">Dashboard</Link>
          <Link href="/membership" className="text-gray-400 hover:text-white hover:bg-gray-800/50 px-4 py-2 rounded-lg text-sm min-w-max text-center transition-all">Membership Plans</Link>
          <Link href="/rewards" className="text-gray-400 hover:text-white hover:bg-gray-800/50 px-4 py-2 rounded-lg text-sm min-w-max text-center transition-all">Rewards History</Link>
          <Link href="/referral" className="bg-[#FF9F1C] text-black px-4 py-2 rounded-lg font-semibold text-sm min-w-max text-center transition-all">Referral Program</Link>
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-8 order-1 md:order-2 pb-24 md:pb-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Referral Program</h1>
          <p className="text-sm text-gray-400">Invite friends and earn 10% of their staking rewards.</p>
        </div>

        <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 max-w-xl">
          <h3 className="text-lg font-semibold mb-4 text-[#FF9F1C]">Your Referral Link</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              readOnly 
              value="https://usdx.network/ref?id=90812" 
              className="bg-black/40 border border-gray-800 rounded-xl px-4 py-3 flex-1 text-sm text-gray-300 outline-none"
            />
            <button className="bg-[#FF9F1C] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#e08b14] transition-all text-sm whitespace-nowrap">
              Copy Link
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
