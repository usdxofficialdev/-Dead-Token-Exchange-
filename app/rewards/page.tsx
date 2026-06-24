"use client";

import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";

export default function Rewards() {
  const [claimableRewards, setClaimableRewards] = useState("342.80");
  const [totalClaimed, setTotalClaimed] = useState("1,250.00");

  const [stakingTiers, setStakingTiers] = useState([
    { amount: "10,000 USDX", yield: "5% APY", description: "Starter Node Pool" },
    { amount: "100,000 USDX", yield: "8% APY", description: "Pro Validator Tier" },
    { amount: "1,000,000 USDX", yield: "12% APY", description: "Whale Liquidity Pool" },
    { amount: "5,000,000 USDX", yield: "15% APY", description: "Alpha Network Node" },
    { amount: "10,000,000 USDX", yield: "18% APY", description: "Master Cluster Pool" },
    { amount: "100,000,000 USDX", yield: "25% APY", description: "Genesis Foundation Tier" },
  ]);

  const [rewardRows, setRewardRows] = useState([
    { date: "2026-06-22", source: "Daily Staking Yield", amount: "+$25.40 USDX", type: "IN", status: "Claimed" },
    { date: "2026-06-21", source: "Gold Tier Milestone Bonus", amount: "+$10.00 USDX", type: "IN", status: "Claimed" }
  ]);

  useEffect(() => {
    const adminTiers = localStorage.getItem("admin_staking_tiers");
    if (adminTiers) setStakingTiers(JSON.parse(adminTiers));

    const adminBalances = localStorage.getItem("admin_reward_balances");
    if (adminBalances) {
      const parsed = JSON.parse(adminBalances);
      setClaimableRewards(parsed.claimable || "342.80");
      setTotalClaimed(parsed.claimed || "1,250.00");
    }

    const adminRewardsLog = localStorage.getItem("admin_rewards_history_list");
    if (adminRewardsLog) {
      setRewardRows(JSON.parse(adminRewardsLog));
    } else {
      localStorage.setItem("admin_rewards_history_list", JSON.stringify(rewardRows));
    }
  }, []);

  const handleClaimRewards = () => {
    const currentClaimable = parseFloat(claimableRewards.replace(/,/g, ""));
    if (currentClaimable <= 0) {
      alert("No claimable rewards available.");
      return;
    }

    const currentClaimed = parseFloat(totalClaimed.replace(/,/g, ""));
    const newTotalClaimed = (currentClaimed + currentClaimable).toFixed(2);
    
    const savedDashboardBalances = localStorage.getItem("user_dashboard_balances") || '{"mainBalance":"5000.00","totalStaked":"15000.00"}';
    const parsedDashboard = JSON.parse(savedDashboardBalances);
    const currentDashboardMain = parseFloat(parsedDashboard.mainBalance);
    const newDashboardMain = (currentDashboardMain + currentClaimable).toFixed(2);

    localStorage.setItem("user_dashboard_balances", JSON.stringify({
      mainBalance: newDashboardMain,
      totalStaked: parsedDashboard.totalStaked
    }));

    const newTransactionRow = {
      date: new Date().toISOString().split('T')[0],
      source: "User Action Claim Request",
      amount: `+$${currentClaimable.toFixed(2)} USDX`,
      type: "IN",
      status: "Claimed"
    };
    const updatedRows = [newTransactionRow, ...rewardRows];

    setClaimableRewards("0.00");
    setTotalClaimed(newTotalClaimed);
    setRewardRows(updatedRows);

    localStorage.setItem("admin_reward_balances", JSON.stringify({ claimable: "0.00", claimed: newTotalClaimed }));
    localStorage.setItem("admin_rewards_history_list", JSON.stringify(updatedRows));

    alert(`Successfully claimed ${currentClaimable} USDX!`);
  };

  return (
    <AppLayout
      title="Rewards & History"
      description="View your accumulated rewards and claim earnings"
    >
      {/* Reward Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#121218] border border-[#2A2A35] p-6 rounded-lg hover:border-amber-500/30 transition-all">
          <span className="block text-xs uppercase text-gray-500 font-bold mb-2">Accumulated Yield (Claimable)</span>
          <span className="text-3xl font-black text-amber-500 mb-4 block">{claimableRewards} <span className="text-xs font-medium text-gray-400">USDX</span></span>
          <button 
            onClick={handleClaimRewards}
            className="w-full bg-amber-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-amber-600 transition-all text-sm"
          >
            Claim Rewards Now
          </button>
        </div>

        <div className="bg-[#121218] border border-[#2A2A35] p-6 rounded-lg hover:border-amber-500/30 transition-all">
          <span className="block text-xs uppercase text-gray-500 font-bold mb-2">Total Vault Settled (Claimed)</span>
          <span className="text-3xl font-black text-emerald-400">{totalClaimed} <span className="text-xs font-medium text-gray-400">USDX</span></span>
          <p className="text-xs text-gray-400 mt-4">Total rewards claimed</p>
        </div>

        <div className="bg-[#121218] border border-[#2A2A35] p-6 rounded-lg bg-gradient-to-br from-amber-500/5 to-transparent">
          <span className="text-amber-500 font-bold text-sm mb-1 block">⚡ Dynamic System</span>
          <p className="text-xs text-gray-400 leading-relaxed">Rewards automatically sync with your dashboard balance and history logs.</p>
        </div>
      </div>

      {/* Staking Tiers */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-amber-500 mb-4">Network Pool Staking Yields</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stakingTiers.map((tier, idx) => (
            <div key={idx} className="bg-[#121218] border border-[#2A2A35] p-4 rounded-lg hover:border-amber-500/30 transition-all">
              <span className="block text-[11px] text-gray-500 font-semibold uppercase mb-2">{tier.description}</span>
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-bold text-white">{tier.amount}</span>
                <span className="text-sm font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{tier.yield}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* History Table */}
      <div className="rounded-lg border border-[#2A2A35] bg-[#121218] p-6">
        <h3 className="text-lg font-bold mb-4 text-white">Rewards History</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="border-b border-[#2A2A35] text-xs uppercase text-gray-500">
              <tr>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Source</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2A2A35]">
              {rewardRows.map((row, index) => (
                <tr key={index} className="hover:bg-black/10 transition-colors">
                  <td className="py-4 px-4 text-gray-400 font-mono text-xs">{row.date}</td>
                  <td className="py-4 px-4 font-medium text-gray-200">{row.source}</td>
                  <td className="py-4 px-4">
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                      row.type === "IN" 
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}>
                      {row.type}
                    </span>
                  </td>
                  <td className={`py-4 px-4 font-semibold ${row.type === "IN" ? "text-emerald-400" : "text-red-400"}`}>
                    {row.amount}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded border ${
                      row.status === "Confirmed" || row.status === "Claimed"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}
