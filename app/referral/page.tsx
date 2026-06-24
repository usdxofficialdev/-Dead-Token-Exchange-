"use client";

import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";

export default function ReferralProgram() {
  const [referralLink, setReferralLink] = useState("https://usdx.network/ref?id=90812");
  const [referralStats, setReferralStats] = useState({
    totalInvites: "14 Users",
    activeStakers: "8 Active",
    commissionEarned: "420.50 USDX",
    pendingPayout: "45.00 USDX"
  });

  const [referralRows, setReferralRows] = useState([
    { user: "0x4A1...d912", date: "2026-06-20", tier: "Gold Tier", status: "Active Staking", reward: "+85.00 USDX" },
    { user: "0x8B3...e110", date: "2026-06-19", tier: "Silver Tier", status: "Active Staking", reward: "+35.20 USDX" },
    { user: "am***@gmail.com", date: "2026-06-15", tier: "Bronze Tier", status: "Account Created", reward: "0.00 USDX" },
  ]);

  useEffect(() => {
    const customLink = localStorage.getItem("admin_global_referral_link");
    if (customLink) setReferralLink(customLink);

    const customStats = localStorage.getItem("admin_referral_stats");
    if (customStats) setReferralStats(JSON.parse(customStats));

    const customRows = localStorage.getItem("admin_referral_network_rows");
    if (customRows) setReferralRows(JSON.parse(customRows));
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  return (
    <AppLayout
      title="Referral Program"
      description="Invite connections and earn 10% on their staking yields"
    >
      {/* Referral Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#121218] border border-[#2A2A35] p-5 rounded-lg hover:border-amber-500/30 transition-all">
          <span className="block text-[11px] uppercase text-gray-500 font-semibold mb-2">Total Invites</span>
          <span className="text-xl font-bold text-white">{referralStats.totalInvites}</span>
        </div>
        <div className="bg-[#121218] border border-[#2A2A35] p-5 rounded-lg hover:border-amber-500/30 transition-all">
          <span className="block text-[11px] uppercase text-gray-500 font-semibold mb-2">Active Stakers</span>
          <span className="text-xl font-bold text-amber-500">{referralStats.activeStakers}</span>
        </div>
        <div className="bg-[#121218] border border-[#2A2A35] p-5 rounded-lg hover:border-amber-500/30 transition-all">
          <span className="block text-[11px] uppercase text-gray-500 font-semibold mb-2">Commission Earned</span>
          <span className="text-xl font-bold text-emerald-400">{referralStats.commissionEarned}</span>
        </div>
        <div className="bg-[#121218] border border-[#2A2A35] p-5 rounded-lg hover:border-amber-500/30 transition-all">
          <span className="block text-[11px] uppercase text-gray-500 font-semibold mb-2">Pending Payout</span>
          <span className="text-xl font-bold text-gray-400">{referralStats.pendingPayout}</span>
        </div>
      </div>

      {/* Referral Link & Milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        
        {/* Referral Link Box */}
        <div className="lg:col-span-2 bg-[#121218] border border-[#2A2A35] rounded-lg p-6">
          <h3 className="text-lg font-semibold text-amber-500 mb-3">Your Premium Referral Link</h3>
          <p className="text-xs text-gray-400 mb-4">Share this link with friends. They'll be added to your network automatically.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              readOnly 
              value={referralLink} 
              className="bg-black/40 border border-[#2A2A35] rounded-lg px-4 py-3 flex-1 text-sm text-gray-300 outline-none focus:border-amber-500/50"
            />
            <button 
              onClick={copyLink}
              className="bg-amber-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-amber-600 transition-all text-sm whitespace-nowrap"
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* Milestones Box */}
        <div className="bg-[#121218] border border-[#2A2A35] rounded-lg p-6">
          <h3 className="text-lg font-semibold text-amber-500 mb-4">Network Milestones</h3>
          <div className="space-y-3">
            <div className="bg-black/20 p-3 rounded-lg border border-[#2A2A35]">
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span>Reach 20 Invites</span>
                <span className="text-amber-500">+50 USDX</span>
              </div>
              <div className="w-full bg-gray-900 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full w-[70%]"></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">14/20 invites completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Network Table */}
      <div className="rounded-lg border border-[#2A2A35] bg-[#121218] p-6">
        <h3 className="text-lg font-bold mb-4 text-white">Referred Nodes</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="border-b border-[#2A2A35] text-xs uppercase text-gray-500">
              <tr>
                <th className="py-3 px-4">Node Account</th>
                <th className="py-3 px-4">Connection Date</th>
                <th className="py-3 px-4">Staking Tier</th>
                <th className="py-3 px-4">Network Status</th>
                <th className="py-3 px-4">Your Yield Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2A2A35]">
              {referralRows.map((row, index) => (
                <tr key={index} className="hover:bg-black/10 transition-colors">
                  <td className="py-4 px-4 font-mono text-white text-sm">{row.user}</td>
                  <td className="py-4 px-4 text-gray-400 text-xs">{row.date}</td>
                  <td className="py-4 px-4">
                    <span className="text-xs px-2 py-0.5 rounded border border-[#2A2A35] bg-black/20 text-gray-300">
                      {row.tier}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${row.status.includes("Staking") ? "text-amber-500" : "text-gray-500"}`}>
                      ● {row.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-emerald-400 font-semibold">{row.reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
