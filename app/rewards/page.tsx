"use client";

import React from "react";
import Link from "next/link";

export default function Rewards() {
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
          <Link href="/rewards" className="bg-[#FF9F1C] text-black px-4 py-2 rounded-lg font-semibold text-sm min-w-max text-center transition-all">Rewards History</Link>
          <Link href="/referral" className="text-gray-400 hover:text-white hover:bg-gray-800/50 px-4 py-2 rounded-lg text-sm min-w-max text-center transition-all">Referral Program</Link>
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-8 order-1 md:order-2 pb-24 md:pb-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Rewards History</h1>
          <p className="text-sm text-gray-400">Track your daily staking and distribution gains.</p>
        </div>

        <div className="bg-[#1F2833]/30 rounded-2xl border border-gray-800 p-4 md:p-6">
          <div className="overflow-x-auto w-full rounded-xl">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-gray-800 text-xs text-gray-400 uppercase bg-[#1F2833]/40">
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Source</th>
                  <th className="py-3 px-4">Amount</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-800/50">
                <tr className="hover:bg-gray-900/40">
                  <td className="py-4 px-4 text-gray-400">2026-06-17</td>
                  <td className="py-4 px-4 font-medium">Daily Staking Yield</td>
                  <td className="py-4 px-4 text-green-400">+$25.40 USDX</td>
                </tr>
                <tr className="hover:bg-gray-900/40">
                  <td className="py-4 px-4 text-gray-400">2026-06-16</td>
                  <td className="py-4 px-4 font-medium">Silver Tier Bonus</td>
                  <td className="py-4 px-4 text-green-400">+$10.00 USDX</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
