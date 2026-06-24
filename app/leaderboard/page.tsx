"use client";

import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";

export default function LeaderboardPage() {
  const [leaders, setLeaders] = useState([
    { rank: "🏆 1", user: "0x71C...a293", plan: "Gold Tier", totalStaked: "45,000 USDX", rewards: "5,200 USDX" },
    { rank: "🥈 2", user: "0x32A...f811", plan: "Gold Tier", totalStaked: "32,500 USDX", rewards: "3,110 USDX" },
    { rank: "🥉 3", user: "0x98b...e440", plan: "Silver Tier", totalStaked: "12,000 USDX", rewards: "1,250 USDX" },
    { rank: "4", user: "shah***@gmail.com", plan: "Silver Tier", totalStaked: "5,000 USDX", rewards: "420 USDX" },
    { rank: "5", user: "user***@gmail.com", plan: "Bronze Tier", totalStaked: "1,500 USDX", rewards: "95 USDX" },
  ]);

  useEffect(() => {
    const adminLeaderboard = localStorage.getItem("admin_leaderboard_data");
    if (adminLeaderboard) {
      setLeaders(JSON.parse(adminLeaderboard));
    }
  }, []);

  return (
    <AppLayout
      title="Global Leaderboard"
      description="See the top network earners and premium staking leaders worldwide"
    >
      {/* Top 3 Podium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {leaders.slice(0, 3).map((podium, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg border bg-[#121218] shadow-lg relative overflow-hidden transition-all hover:scale-[1.02] ${
              index === 0 ? "border-amber-500/40 shadow-amber-500/10" :
              index === 1 ? "border-gray-500/40 shadow-gray-500/10" :
              "border-amber-900/40 shadow-amber-900/10"
            }`}
          >
            <div className="absolute top-4 right-4 text-2xl opacity-30 font-bold">
              #{index + 1}
            </div>
            <p className="text-xs uppercase text-gray-500 font-semibold mb-2">Network Position</p>
            <h4 className="text-lg font-mono font-bold text-white mb-4 truncate">{podium.user}</h4>
            <div className="flex justify-between items-center text-sm border-t border-[#2A2A35] pt-3">
              <div>
                <span className="block text-[11px] text-gray-500 uppercase">Staked</span>
                <span className="font-semibold text-gray-300">{podium.totalStaked}</span>
              </div>
              <div className="text-right">
                <span className="block text-[11px] text-gray-500 uppercase">Earned</span>
                <span className="font-bold text-emerald-400">{podium.rewards}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Leaderboard Table */}
      <div className="rounded-lg border border-[#2A2A35] bg-[#121218] p-6">
        <h3 className="text-lg font-bold mb-4 text-white">Top Network Stakers</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="border-b border-[#2A2A35] text-xs uppercase text-gray-500">
              <tr>
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">User Identity</th>
                <th className="py-3 px-4">Membership</th>
                <th className="py-3 px-4">Total Staked</th>
                <th className="py-3 px-4">Total Earned</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2A2A35]">
              {leaders.map((leader, index) => (
                <tr key={index} className={leader.rank.includes("1") ? "bg-amber-500/5" : "hover:bg-black/10 transition-colors"}>
                  <td className="py-4 px-4 font-bold text-white">{leader.rank}</td>
                  <td className="py-4 px-4 font-mono text-gray-300 text-sm">{leader.user}</td>
                  <td className="py-4 px-4">
                    <span className={`text-xs px-2 py-0.5 rounded border font-medium ${
                      leader.plan === "Gold Tier" 
                        ? "text-amber-400 bg-amber-500/10 border-amber-500/20" 
                        : leader.plan === "Silver Tier"
                        ? "text-gray-300 bg-gray-700/30 border-gray-600/30"
                        : "text-amber-600 bg-amber-900/20 border-amber-900/30"
                    }`}>
                      {leader.plan}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-white font-medium">{leader.totalStaked}</td>
                  <td className="py-4 px-4 text-emerald-400 font-semibold">{leader.rewards}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Leaderboard Info */}
      <div className="mt-8 bg-[#121218] border border-[#2A2A35] rounded-lg p-6">
        <h3 className="text-sm font-semibold text-amber-500 mb-2">📊 How Rankings Work</h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          Rankings are determined by total staked amount and active staking duration. Top performers receive exclusive benefits and higher APY rates. Rankings update daily at 12:00 UTC.
        </p>
      </div>
    </AppLayout>
  );
}
