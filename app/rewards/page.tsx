"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginWallet from "../components/LoginWallet"; 

export default function Rewards() {
  const router = useRouter();

  // 1. Dynamic Balances Matrix Configurable from Admin Panel
  const [claimableRewards, setClaimableRewards] = useState("342.80");
  const [totalClaimed, setTotalClaimed] = useState("1,250.00");

  // 2. Hyper Advanced Staking Tiers Matrix (100% editable via Admin)
  const [stakingTiers, setStakingTiers] = useState([
    { amount: "10,000 USDX", yield: "5% APY", description: "Starter Node Pool" },
    { amount: "100,000 USDX", yield: "8% APY", description: "Pro Validator Tier" },
    { amount: "1,000,000 USDX", yield: "12% APY", description: "Whale Liquidity Pool" },
    { amount: "5,000,000 USDX", yield: "15% APY", description: "Alpha Network Node" },
    { amount: "10,000,000 USDX", yield: "18% APY", description: "Master Cluster Pool" },
    { amount: "100,000,000 USDX", yield: "25% APY", description: "Genesis Foundation Tier" },
  ]);

  // 3. Centralized In/Out Ledger History Array (Synced with Dashboard Staking & Rewards Claiming)
  const [rewardRows, setRewardRows] = useState([
    { date: "2026-06-22", source: "Daily Staking Yield", amount: "+$25.40 USDX", type: "IN", status: "Claimed" },
    { date: "2026-06-21", source: "Gold Tier Milestone Bonus", amount: "+$10.00 USDX", type: "IN", status: "Claimed" }
  ]);

  // Hydrating all ledger items from Admin database storage on application load
  useEffect(() => {
    const adminTiers = localStorage.getItem("admin_staking_tiers");
    if (adminTiers) setStakingTiers(JSON.parse(adminTiers));

    const adminBalances = localStorage.getItem("admin_reward_balances");
    if (adminBalances) {
      const parsed = JSON.parse(adminBalances);
      setClaimableRewards(parsed.claimable || "342.80");
      setTotalClaimed(parsed.claimed || "1,250.00");
    }

    // Dynamic pull for both IN and OUT operations logs
    const adminRewardsLog = localStorage.getItem("admin_rewards_history_list");
    if (adminRewardsLog) {
      setRewardRows(JSON.parse(adminRewardsLog));
    } else {
      localStorage.setItem("admin_rewards_history_list", JSON.stringify(rewardRows));
    }
  }, []);

  // Functional Processing: In-Yield Claim Trigger routing tokens directly to Dashboard Main Balance
  const handleClaimRewards = () => {
    const currentClaimable = parseFloat(claimableRewards.replace(/,/g, ""));
    if (currentClaimable <= 0) {
      alert("No claimable rewards distributed at this matrix tick.");
      return;
    }

    const currentClaimed = parseFloat(totalClaimed.replace(/,/g, ""));
    const newTotalClaimed = (currentClaimed + currentClaimable).toFixed(2);
    
    // Fetch and sync directly with user's core dashboard balances
    const savedDashboardBalances = localStorage.getItem("user_dashboard_balances") || '{"mainBalance":"5000.00","totalStaked":"15000.00"}';
    const parsedDashboard = JSON.parse(savedDashboardBalances);
    const currentDashboardMain = parseFloat(parsedDashboard.mainBalance);
    const newDashboardMain = (currentDashboardMain + currentClaimable).toFixed(2);

    // Commit dynamic credit back to dashboard
    localStorage.setItem("user_dashboard_balances", JSON.stringify({
      mainBalance: newDashboardMain,
      totalStaked: parsedDashboard.totalStaked
    }));

    // Injecting the absolute "IN" entry log to the operational audit ledger
    const newTransactionRow = {
      date: new Date().toISOString().split('T')[0],
      source: "User Action Claim Request",
      amount: `+$${currentClaimable.toFixed(2)} USDX`,
      type: "IN",
      status: "Claimed"
    };
    const updatedRows = [newTransactionRow, ...rewardRows];

    // Committing changes to local states
    setClaimableRewards("0.00");
    setTotalClaimed(newTotalClaimed);
    setRewardRows(updatedRows);

    // Sync pipeline distribution updates straight back to admin log indexes
    localStorage.setItem("admin_reward_balances", JSON.stringify({ claimable: "0.00", claimed: newTotalClaimed }));
    localStorage.setItem("admin_rewards_history_list", JSON.stringify(updatedRows));

    alert(`Successfully processed withdrawal of ${currentClaimable} USDX directly into your Liquid Dashboard Balance!`);
  };

  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: false },
    { name: "Membership Plans", route: "/membership", active: false },
    { name: "Rewards History", route: "/rewards", active: true },
    { name: "Referral Program", route: "/referral", active: false },
    { name: "Leaderboard", route: "/leaderboard", active: false },
    { name: "Profile Settings", route: "/profile", active: false },
    { name: "Admin Panel", route: "/admin", active: false },
  ];

  return (
    <div className="flex min-h-screen bg-[#0B0B0F] text-white">
      
      {/* SIDEBAR NAVIGATION GRID */}
      <aside className="w-64 border-r border-gray-800 bg-[#121218] p-6 hidden md:block">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-amber-500 tracking-wider">USDX NETWORK</h1>
          <p className="text-xs text-gray-500">Premium Token Exchange</p>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(item.route)}
              className={`w-full text-left px-4 p-3 rounded-xl text-sm font-medium transition-all ${
                item.active 
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20" 
                  : "text-gray-400 hover:bg-[#1A1A24] hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* CORE WORKSPACE SPACE */}
      <main className="flex-1 p-8">
        <header className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Rewards Control & Distribution</h1>
            <p className="text-sm text-gray-400">Audit transaction history (In / Out), manage system token yields, and trigger asset states.</p>
          </div>
          <LoginWallet />
        </header>

        {/* FINANCIAL DATA TILES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-6xl">
          <div className="bg-[#121218] border border-gray-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <span className="block text-xs uppercase text-gray-500 font-bold mb-1">Accumulated Yield (Claimable)</span>
              <span className="text-3xl font-black text-amber-500 tracking-tight">{claimableRewards} <span className="text-xs font-medium text-gray-400">USDX</span></span>
            </div>
            <button 
              onClick={handleClaimRewards}
              className="mt-4 bg-amber-500 text-black font-extrabold px-6 py-3 rounded-xl hover:bg-amber-600 transition-all text-sm shadow-md active:scale-95"
            >
              Claim Rewards Now
            </button>
          </div>

          <div className="bg-[#121218] border border-gray-800 p-6 rounded-2xl shadow-xl flex flex-col justify-center">
            <span className="block text-xs uppercase text-gray-500 font-bold mb-1">Total Vault Settled (Claimed)</span>
            <span className="text-3xl font-black text-emerald-400 tracking-tight">{totalClaimed} <span className="text-xs font-medium text-gray-400">USDX</span></span>
          </div>

          <div className="bg-[#121218] border border-amber-500/20 p-6 rounded-2xl shadow-xl bg-gradient-to-br from-amber-500/5 to-transparent flex flex-col justify-center">
            <span className="text-amber-500 font-bold text-sm mb-1">⚡ Dynamic Cross-Link Node</span>
            <p className="text-xs text-gray-400 leading-relaxed">Claims pipeline liquid value directly back to the dashboard, while dashboard staking instantly logs outward history onto this audit chart.</p>
          </div>
        </div>

        {/* ADVANCED STAKING TIERS MATRIX LIST */}
        <div className="mb-8 max-w-6xl">
          <h3 className="text-lg font-semibold text-amber-500 mb-4">Network Pool Staking Yield Architecture</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {stakingTiers.map((tier, idx) => (
              <div key={idx} className="bg-[#121218] border border-gray-800 p-4 rounded-xl hover:border-gray-700 transition-all">
                <span className="block text-[11px] text-gray-500 font-semibold uppercase">{tier.description}</span>
                <div className="flex justify-between items-baseline mt-2">
                  <span className="text-sm font-bold text-white">{tier.amount}</span>
                  <span className="text-sm font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{tier.yield}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INTEGRATED HISTORICAL IN/OUT AUDIT LOGS TABLE */}
        <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6 shadow-xl max-w-6xl">
          <h3 className="text-xl font-bold mb-4">Staking & Yield Operational History Logs</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="border-b border-gray-800 text-xs uppercase text-gray-500">
                <tr>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">Operational Origin</th>
                  <th className="py-3 px-4">Asset Type</th>
                  <th className="py-3 px-4">Allocation Mass</th>
                  <th className="py-3 px-4">System Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
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
                        {row.type || "IN"}
                      </span>
                    </td>
                    <td className={`py-4 px-4 font-semibold ${row.type === "IN" ? "text-emerald-400" : "text-red-400"}`}>
                      {row.amount}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded border tracking-wider ${
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

      </main>
    </div>
  );
}
