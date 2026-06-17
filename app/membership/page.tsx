"use client";

import React from "react";
import Link from "next/link";

export default function Membership() {
  return (
    <div className="min-h-screen bg-[#0B0C10] text-white flex flex-col md:flex-row">
      
      {/* 1. SIDEBAR & BOTTOM NAV (SAME AS DASHBOARD) */}
      <aside className="w-full md:w-64 bg-[#1F2833] p-4 md:p-6 flex flex-row md:flex-col justify-between md:justify-start gap-4 order-2 md:order-1 fixed bottom-0 md:relative z-50 md:z-0 border-t md:border-t-0 border-gray-800">
        <div className="hidden md:block mb-8">
          <h2 className="text-xl font-bold text-[#FF9F1C]">USDX NETWORK</h2>
          <p className="text-xs text-gray-400">Premium Token Exchange</p>
        </div>
        
        <nav className="flex flex-row md:flex-col gap-2 w-full justify-around md:justify-start overflow-x-auto md:overflow-visible pb-1 md:pb-0">
          <Link href="/dashboard" className="text-gray-400 hover:text-white hover:bg-gray-800/50 px-4 py-2 rounded-lg text-sm min-w-max text-center transition-all">
            Dashboard
          </Link>
          <Link href="/membership" className="bg-[#FF9F1C] text-black px-4 py-2 rounded-lg font-semibold text-sm min-w-max text-center transition-all">
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
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Membership Plans</h1>
            <p className="text-sm text-gray-400">Choose your premium staking tier to boost earnings.</p>
          </div>
          <div className="flex items-center gap-2 bg-[#1F2833] px-4 py-2 rounded-full border border-green-500/30">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-green-400 font-medium">Status: Active</span>
          </div>
        </div>

        {/* 2. MEMBERSHIP CARDS GRID (Mobile par 1, Desktop par 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Bronze Plan */}
          <div className="bg-[#1F2833]/40 p-6 rounded-2xl border border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-all">
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-300">Bronze Plan</h3>
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-[#FF9F1C]">100 USDX</span>
              </div>
              <span className="inline-block bg-[#FF9F1C]/10 text-[#FF9F1C] text-xs font-semibold px-2.5 py-1 rounded-full mb-6 border border-[#FF9F1C]/20">
                5% APY Daily
              </span>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-center gap-2">✔ 2 Team Members Allowed</li>
                <li className="flex items-center gap-2">✔ Email Support</li>
                <li className="flex items-center gap-2">✔ Basic Live Analytics</li>
              </ul>
            </div>
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 rounded-xl transition-all border border-gray-700">
              Activate Plan
            </button>
          </div>

          {/* Silver Plan (Most Popular) */}
          <div className="bg-[#1F2833]/70 p-6 rounded-2xl border-2 border-[#FF9F1C] flex flex-col justify-between relative shadow-lg shadow-[#FF9F1C]/5 transform md:-translate-y-2">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF9F1C] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              MOST POPULAR
            </span>
            <div className="mt-2">
              <h3 className="text-xl font-bold mb-2 text-white">Silver Plan</h3>
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-[#FF9F1C]">500 USDX</span>
              </div>
              <span className="inline-block bg-[#FF9F1C]/20 text-[#FF9F1C] text-xs font-semibold px-2.5 py-1 rounded-full mb-6 border border-[#FF9F1C]/40">
                10% APY Daily
              </span>
              <ul className="space-y-3 text-sm text-gray-200 mb-8">
                <li className="flex items-center gap-2 text-[#FF9F1C]">✔ 10 Team Members Allowed</li>
                <li className="flex items-center gap-2">✔ 24/7 Priority Support</li>
                <li className="flex items-center gap-2">✔ Advanced Analytics</li>
                <li className="flex items-center gap-2">✔ Monthly Bonus Rewards</li>
              </ul>
            </div>
            <button className="w-full bg-[#FF9F1C] hover:bg-[#e08b14] text-black font-bold py-3 rounded-xl transition-all shadow-md shadow-[#FF9F1C]/20">
              Activate Plan
            </button>
          </div>

          {/* Gold Plan */}
          <div className="bg-[#1F2833]/40 p-6 rounded-2xl border border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-all">
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-300">Gold Plan</h3>
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-[#FF9F1C]">2,000 USDX</span>
              </div>
              <span className="inline-block bg-[#FF9F1C]/10 text-[#FF9F1C] text-xs font-semibold px-2.5 py-1 rounded-full mb-6 border border-[#FF9F1C]/20">
                15% APY Daily
              </span>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-center gap-2">✔ Unlimited Members</li>
                <li className="flex items-center gap-2">✔ VIP Personal Support</li>
                <li className="flex items-center gap-2">✔ Premium Analytics</li>
                <li className="flex items-center gap-2">✔ Exclusive Platform Events</li>
              </ul>
            </div>
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 rounded-xl transition-all border border-gray-700">
              Activate Plan
            </button>
          </div>

        </div>

      </main>
    </div>
  );
}
