"use client";

import React, { useState } from "react";

export default function CompleteDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [availableBalance, setAvailableBalance] = useState(12540.85);
  const [stakedAssets, setStakedAssets] = useState(5000.00);
  const [rewards, setRewards] = useState(420.12);
  const [stakeInput, setStakeInput] = useState("");
  const [transactions, setTransactions] = useState([
    { id: "#TXN-90812", type: "Token Staking", amount: "+$1,200.00", status: "Completed", date: "2026-06-18" },
    { id: "#TXN-87123", type: "Referral Bonus", amount: "+$50.00", status: "Completed", date: "2026-06-17" },
  ]);

  // Advanced Functionalities
  const handleClaimRewards = () => {
    if (rewards > 0) {
      setAvailableBalance((prev) => prev + rewards);
      const newTxn = {
        id: `#TXN-${Math.floor(10000 + Math.random() * 90000)}`,
        type: "Rewards Claimed",
        amount: `+$${rewards.toFixed(2)}`,
        status: "Completed",
        date: new Date().toISOString().split('T')[0],
      };
      setTransactions([newTxn, ...transactions]);
      setRewards(0);
      alert("🎉 Rewards claimed successfully and added to your balance!");
    } else {
      alert("No rewards available to claim right now.");
    }
  };

  const handleStake = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(stakeInput);
    if (!amount || amount <= 0) return alert("Please enter a valid amount");
    if (amount > availableBalance) return alert("Insufficient balance!");

    setAvailableBalance((prev) => prev - amount);
    setStakedAssets((prev) => prev + amount);
    const newTxn = {
      id: `#TXN-${Math.floor(10000 + Math.random() * 90000)}`,
      type: "Asset Staking",
      amount: `-$${amount.toFixed(2)}`,
      status: "Completed",
      date: new Date().toISOString().split('T')[0],
    };
    setTransactions([newTxn, ...transactions]);
    setStakeInput("");
    alert(`👍 $${amount} successfully staked!`);
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white flex flex-col md:flex-row pb-24 md:pb-0">
      
      {/* 1. SIDEBAR (DESKTOP) & BOTTOM NAV (MOBILE) */}
      <aside className="w-full md:w-64 bg-[#1F2833] p-4 md:p-6 flex flex-row md:flex-col justify-between md:justify-start gap-4 fixed bottom-0 md:sticky md:top-0 md:h-screen z-50 border-t md:border-t-0 md:border-r border-gray-800 shadow-2xl shrink-0">
        <div className="hidden md:block mb-8">
          <h2 className="text-xl font-bold text-[#FF9F1C] tracking-wider">USDX NETWORK</h2>
          <p className="text-xs text-gray-400 mt-1">Premium Token Exchange</p>
        </div>
        
        <nav className="flex flex-row md:flex-col gap-2 w-full justify-around md:justify-start overflow-x-auto md:overflow-visible">
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm min-w-max text-center transition-all w-full ${activeTab === "dashboard" ? "bg-[#FF9F1C] text-black shadow-md shadow-[#FF9F1C]/20" : "text-gray-400 hover:text-white hover:bg-gray-800/30"}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab("membership")}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm min-w-max text-center transition-all w-full ${activeTab === "membership" ? "bg-[#FF9F1C] text-black shadow-md shadow-[#FF9F1C]/20" : "text-gray-400 hover:text-white hover:bg-gray-800/30"}`}
          >
            Membership
          </button>
          <button 
            onClick={() => setActiveTab("rewards")}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm min-w-max text-center transition-all w-full ${activeTab === "rewards" ? "bg-[#FF9F1C] text-black shadow-md shadow-[#FF9F1C]/20" : "text-gray-400 hover:text-white hover:bg-gray-800/30"}`}
          >
            Rewards
          </button>
          <button 
            onClick={() => setActiveTab("referral")}
            className={`px-4 py-2.5 rounded-xl font-semibold text-sm min-w-max text-center transition-all w-full ${activeTab === "referral" ? "bg-[#FF9F1C] text-black shadow-md shadow-[#FF9F1C]/20" : "text-gray-400 hover:text-white hover:bg-gray-800/30"}`}
          >
            Referral
          </button>
        </nav>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto overflow-y-auto space-y-6">
        
        {/* ================= ADVANCED TOP PROFILE HEADER ================= */}
        <div className="bg-[#1F2833]/40 border border-gray-800 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF9F1C] to-amber-500 flex items-center justify-center font-bold text-black text-lg shadow-lg">
              UX
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-wide text-white">Premium_User_90812</h4>
              <p className="text-xs text-gray-400">Verified Member Tier 2</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <div className="flex items-center gap-2 bg-[#1F2833] px-4 py-2 rounded-xl border border-green-500/30 shadow-inner">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-green-400 font-semibold tracking-wide">Connected</span>
            </div>
          </div>
        </div>

        {/* ================= DASHBOARD VIEW ================= */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">User Dashboard</h1>
              <p className="text-sm text-gray-400 mt-1">Live crypto asset statistics and active terminal panels.</p>
            </div>

            {/* Premium Interactive Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm relative overflow-hidden group hover:border-[#FF9F1C]/30 transition-all">
                <p className="text-sm text-gray-400 mb-1">Total Available Balance</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#FF9F1C]">${availableBalance.toLocaleString(undefined, {minimumFractionDigits: 2})}</h3>
                <span className="text-xs text-green-400 block mt-2">▲ +14.5% up from last week</span>
              </div>

              <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm hover:border-white/10 transition-all">
                <p className="text-sm text-gray-400 mb-1">Active Staked Assets</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white">${stakedAssets.toLocaleString(undefined, {minimumFractionDigits: 2})}</h3>
                <span className="text-xs text-[#FF9F1C] block mt-2">★ Yield Accruing Live</span>
              </div>

              {/* CLAIMABLE SECTION FIXED */}
              <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-orange-500/20 backdrop-blur-sm sm:col-span-2 lg:col-span-1 flex flex-col justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Total Rewards Earned</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-green-400">+${rewards.toFixed(2)}</h3>
                </div>
                <button 
                  onClick={handleClaimRewards}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-black font-extrabold py-2.5 rounded-xl transition-all text-xs tracking-wider shadow-lg shadow-green-500/10"
                >
                  CLAIM REWARDS NOW
                </button>
              </div>
            </div>

            {/* NEW QUICK ACTION STAKING CONSOLE (To fill up space and look advanced) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-[#1F2833]/20 border border-gray-800 p-6 rounded-2xl lg:col-span-2">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">USDX Live Market Trend</h3>
                  <span className="text-xs bg-gray-800 px-2 py-1 rounded text-[#FF9F1C] font-mono">Live 24h</span>
                </div>
                <div className="h-32 flex items-end gap-2 md:gap-3 pt-4 border-b border-gray-800/60">
                  <div className="bg-gray-800/40 w-full h-12 rounded-t-md"></div>
                  <div className="bg-gray-800/60 w-full h-20 rounded-t-md"></div>
                  <div className="bg-gray-800/40 w-full h-16 rounded-t-md"></div>
                  <div className="bg-[#FF9F1C]/40 w-full h-24 rounded-t-md animate-pulse"></div>
                  <div className="bg-green-500/40 w-full h-20 rounded-t-md"></div>
                  <div className="bg-green-500/80 w-full h-32 rounded-t-md"></div>
                </div>
              </div>

              {/* LIVE STAKING CONSOLE */}
              <div className="bg-gradient-to-b from-[#1F2833]/80 to-[#1F2833]/20 border border-gray-800 p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Quick Staking Terminal</h4>
                  <p className="text-xs text-gray-400 mb-4">Instantly commit funds into premium liquidity pools.</p>
                </div>
                <form onSubmit={handleStake} className="space-y-3">
                  <div className="relative">
                    <input 
                      type="number" 
                      placeholder="0.00"
                      value={stakeInput}
                      onChange={(e) => setStakeInput(e.target.value)}
                      className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#FF9F1C]/50 font-mono text-[#FF9F1C]"
                    />
                    <span className="absolute right-4 top-2.5 text-xs text-gray-500 font-bold">USDX</span>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[#FF9F1C] hover:bg-[#e08b14] text-black font-bold py-2.5 rounded-xl transition-all text-xs tracking-wide"
                  >
                    DEPOSIT STAKE
                  </button>
                </form>
              </div>
            </div>

            {/* Recent Exchange History Table */}
            <div className="bg-[#1F2833]/30 rounded-2xl border border-gray-800 p-4 md:p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4">Recent Exchange History</h2>
              <div className="overflow-x-auto w-full rounded-xl">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-800 text-xs text-gray-400 uppercase tracking-wider bg-[#1F2833]/50">
                      <th className="py-3 px-4">Transaction ID</th>
                      <th className="py-3 px-4">Type</th>
                      <th className="py-3 px-4">Amount</th>
                      <th className="py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-800/40">
                    {transactions.map((txn, index) => (
                      <tr key={index} className="hover:bg-gray-900/30 transition-colors">
                        <td className="py-4 px-4 text-[#FF9F1C] font-mono">{txn.id}</td>
                        <td className="py-4 px-4 font-medium">{txn.type}</td>
                        <td className={`py-4 px-4 font-semibold ${txn.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{txn.amount}</td>
                        <td className="py-4 px-4">
                          <span className="bg-green-500/10 text-green-400 text-xs px-2.5 py-1 rounded-full border border-green-500/20">Completed</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= MEMBERSHIP VIEW ================= */}
        {activeTab === "membership" && (
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Membership Plans</h1>
            <p className="text-sm text-gray-400 mb-8">Choose your premium staking tier to boost earnings.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="bg-[#1F2833]/40 p-6 rounded-2xl border border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-all">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-300">Bronze Plan</h3>
                  <span className="text-3xl font-extrabold text-[#FF9F1C]">100 USDX</span>
                  <div className="mt-4 inline-block bg-[#FF9F1C]/10 text-[#FF9F1C] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#FF9F1C]/20">5% APY Daily</div>
                  <ul className="space-y-3 text-sm text-gray-400 mt-6">
                    <li>✔ 2 Team Members Allowed</li>
                    <li>✔ Email Support</li>
                  </ul>
                </div>
                <button type="button" className="w-full bg-gray-800 text-white font-medium py-3 rounded-xl transition-all mt-8 border border-gray-700">Activate Plan</button>
              </div>

              <div className="bg-[#1F2833]/70 p-6 rounded-2xl border-2 border-[#FF9F1C] flex flex-col justify-between relative shadow-xl shadow-[#FF9F1C]/5">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF9F1C] text-black text-xs font-bold px-3 py-1 rounded-full tracking-wider">MOST POPULAR</span>
                <div className="mt-2">
                  <h3 className="text-xl font-bold mb-2 text-white">Silver Plan</h3>
                  <span className="text-3xl font-extrabold text-[#FF9F1C]">500 USDX</span>
                  <div className="mt-4 inline-block bg-[#FF9F1C]/20 text-[#FF9F1C] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#FF9F1C]/40">10% APY Daily</div>
                  <ul className="space-y-3 text-sm text-gray-200 mt-6">
                    <li>✔ 10 Team Members Allowed</li>
                    <li>✔ 24/7 Priority Support</li>
                    <li>✔ Advanced Analytics Dashboard</li>
                  </ul>
                </div>
                <button type="button" className="w-full bg-[#FF9F1C] hover:bg-[#e08b14] text-black font-bold py-3 rounded-xl transition-all mt-8 shadow-lg shadow-[#FF9F1C]/10">Activate Plan</button>
              </div>

              <div className="bg-[#1F2833]/40 p-6 rounded-2xl border border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-all">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-300">Gold Plan</h3>
                  <span className="text-3xl font-extrabold text-[#FF9F1C]">2,000 USDX</span>
                  <div className="mt-4 inline-block bg-[#FF9F1C]/10 text-[#FF9F1C] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#FF9F1C]/20">15% APY Daily</div>
                  <ul className="space-y-3 text-sm text-gray-400 mt-6">
                    <li>✔ Unlimited Members</li>
                    <li>✔ VIP Personal Support</li>
                  </ul>
                </div>
                <button type="button" className="w-full bg-gray-800 text-white font-medium py-3 rounded-xl transition-all mt-8 border border-gray-700">Activate Plan</button>
              </div>
            </div>
          </div>
        )}

        {/* ================= REWARDS VIEW ================= */}
        {activeTab === "rewards" && (
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Rewards History</h1>
            <p className="text-sm text-gray-400 mb-8">Track your daily staking and distribution gains.</p>
            
            <div className="bg-[#1F2833]/30 rounded-2xl border border-gray-800 p-4 md:p-6 shadow-sm">
              <div className="overflow-x-auto w-full rounded-xl">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-800 text-xs text-gray-400 uppercase tracking-wider bg-[#1F2833]/50">
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Source</th>
                      <th className="py-3 px-4">Yield</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-800/40">
                    <tr className="hover:bg-gray-900/30 transition-colors">
                      <td className="py-4 px-4 text-gray-400">2026-06-18</td>
                      <td className="py-4 px-4 font-medium">Daily Staking Yield</td>
                      <td className="py-4 px-4 text-green-400 font-semibold">+$25.40 USDX</td>
                    </tr>
                    <tr className="hover:bg-gray-900/30 transition-colors">
                      <td className="py-4 px-4 text-gray-400">2026-06-17</td>
                      <td className="py-4 px-4 font-medium">Silver Tier Bonus</td>
                      <td className="py-4 px-4 text-green-400 font-semibold">+$10.00 USDX</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= REFERRAL VIEW ================= */}
        {activeTab === "referral" && (
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Referral Program</h1>
            <p className="text-sm text-gray-400 mb-8">Invite friends and earn 10% of their staking rewards.</p>
            
            <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 max-w-xl shadow-sm">
              <h3 className="text-sm font-semibold mb-3 text-[#FF9F1C] uppercase tracking-wider">Your Referral Link</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="text" 
                  readOnly 
                  value="https://usdx.network/ref?id=90812" 
                  className="bg-black/40 border border-gray-800 rounded-xl px-4 py-3 flex-1 text-sm text-gray-300 outline-none font-mono"
                />
                <button type="button" className="bg-[#FF9F1C] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#e08b14] transition-all text-sm whitespace-nowrap">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
