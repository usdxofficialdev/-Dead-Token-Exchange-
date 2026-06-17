"use client";

import React, { useState } from "react";

export default function CompleteDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [availableBalance, setAvailableBalance] = useState(12960.97);
  const [stakedAssets, setStakedAssets] = useState(5000.00);
  
  // Rewards Split (Staking + Referral)
  const [stakingRewards, setStakingRewards] = useState(340.50);
  const [referralRewards, setReferralRewards] = useState(79.62);
  
  // Quick Wallet Inputs
  const [stakeInput, setStakeInput] = useState("");
  const [withdrawInput, setWithdrawInput] = useState("");
  const [sendAddress, setSendAddress] = useState("");
  const [sendAmount, setSendAmount] = useState("");
  const [activeWalletTab, setActiveWalletTab] = useState("withdraw"); // withdraw | send | receive

  // User Profile States
  const [profile, setProfile] = useState({
    name: "Jordan Dev",
    username: "Premium_User_90812",
    email: "jordan@usdx.network",
    phone: "+1 (555) 019-2834",
    wallet: "0x71C7656EC7ab88b098defB751B7401B5f6d1476B",
    kycStatus: "Tier 2 Verified"
  });

  // Global Transactions History
  const [transactions, setTransactions] = useState([
    { id: "#TXN-90812", type: "Token Staking", amount: "+$1,200.00", status: "Succeed", date: "2026-06-18" },
    { id: "#TXN-87123", type: "Referral Bonus", amount: "+$50.00", status: "Succeed", date: "2026-06-17" },
  ]);

  // Admin Dashboard State (Mock Registered Users)
  const [adminUsers, setAdminUsers] = useState([
    { username: "Premium_User_90812", email: "jordan@usdx.network", balance: "$12,960.97", kyc: "Tier 2" },
    { username: "Crypto_King_22", email: "king@crypto.org", balance: "$45,210.00", kyc: "Tier 1" },
    { username: "Alex_S12", email: "alex@network.io", balance: "$850.50", kyc: "Unverified" },
  ]);

  // Modal State for Plan Activation
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });
  const [userWallet, setUserWallet] = useState("");
  const [txnHash, setTxnHash] = useState("");

  // Handler for Claiming Specific Rewards
  const handleClaim = (type: "staking" | "referral") => {
    const amountToClaim = type === "staking" ? stakingRewards : referralRewards;
    
    if (amountToClaim > 0) {
      setAvailableBalance((prev) => prev + amountToClaim);
      const newTxn = {
        id: `#TXN-${Math.floor(10000 + Math.random() * 90000)}`,
        type: type === "staking" ? "Staking Reward Claim" : "Referral Comm. Claim",
        amount: `+$${amountToClaim.toFixed(2)}`,
        status: "Succeed",
        date: new Date().toISOString().split('T')[0],
      };
      setTransactions([newTxn, ...transactions]);
      if (type === "staking") setStakingRewards(0);
      else setReferralRewards(0);
      alert(`🎉 $${amountToClaim.toFixed(2)} claimed successfully!`);
    } else {
      alert("No pending rewards to claim in this section.");
    }
  };

  // Deposit Stake Logic
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
      status: "Succeed",
      date: new Date().toISOString().split('T')[0],
    };
    setTransactions([newTxn, ...transactions]);
    setStakeInput("");
    alert(`👍 $${amount} successfully staked!`);
  };

  // Withdraw Logic with Waiting State
  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(withdrawInput);
    if (!amount || amount <= 0) return alert("Please enter a valid amount");
    if (amount > availableBalance) return alert("Insufficient balance to withdraw!");

    setAvailableBalance((prev) => prev - amount);
    const targetTxnId = `#TXN-${Math.floor(10000 + Math.random() * 90000)}`;
    
    const newTxn = {
      id: targetTxnId,
      type: "Withdrawal Request",
      amount: `-$${amount.toFixed(2)}`,
      status: "Waiting",
      date: new Date().toISOString().split('T')[0],
    };
    
    setTransactions((prevTxns) => [newTxn, ...prevTxns]);
    setWithdrawInput("");
    alert(`🚀 Withdrawal request for $${amount} submitted! Status: Waiting...`);

    // Auto convert from Waiting to Succeed after 5 seconds
    setTimeout(() => {
      setTransactions((prevTxns) =>
        prevTxns.map((txn) =>
          txn.id === targetTxnId ? { ...txn, status: "Succeed" } : txn
        )
      );
    }, 5000);
  };

  // Send Tokens Logic
  const handleSendTokens = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(sendAmount);
    if (!sendAddress.trim()) return alert("Please enter a valid recipient address");
    if (!amount || amount <= 0) return alert("Please enter a valid amount");
    if (amount > availableBalance) return alert("Insufficient balance to send!");

    setAvailableBalance((prev) => prev - amount);
    const newTxn = {
      id: `#TXN-${Math.floor(10000 + Math.random() * 90000)}`,
      type: `Sent to ${sendAddress.substring(0, 6)}...`,
      amount: `-$${amount.toFixed(2)}`,
      status: "Succeed",
      date: new Date().toISOString().split('T')[0],
    };
    setTransactions([newTxn, ...transactions]);
    setSendAddress("");
    setSendAmount("");
    alert(`🚀 Successfully sent $${amount} to ${sendAddress}`);
  };

  // Save Profile Details Local Handler
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    alert("💾 Profile details updated locally successfully!");
  };

  // Modal triggers
  const openActivationModal = (planName: string, planPrice: string) => {
    setSelectedPlan({ name: planName, price: planPrice });
    setIsModalOpen(true);
  };

  // Membership Submission Logic
  const handleActivatePlanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userWallet.trim() || !txnHash.trim()) {
      return alert("Please fill in all verification details.");
    }
    const newTxn = {
      id: `#TXN-${Math.floor(10000 + Math.random() * 90000)}`,
      type: `Membership (${selectedPlan.name})`,
      amount: `-${selectedPlan.price}`,
      status: "Waiting",
      date: new Date().toISOString().split('T')[0],
    };
    setTransactions([newTxn, ...transactions]);
    setIsModalOpen(false);
    setUserWallet("");
    setTxnHash("");
    alert(`🚀 Verification request for ${selectedPlan.name} submitted!`);
  };

  // Admin Console Action
  const handleApproveTxn = (id: string) => {
    setTransactions(prev => prev.map(t => t.id === id ? { ...t, status: "Succeed" } : t));
    alert(`Transaction ${id} Approved successfully by Admin!`);
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white flex flex-col md:flex-row pb-24 md:pb-0 font-sans selection:bg-[#FF9F1C] selection:text-black">
      
      {/* 1. SIDEBAR NAVIGATION */}
      <aside className="w-full md:w-64 bg-[#1F2833] p-4 md:p-6 flex flex-row md:flex-col justify-between md:justify-start gap-4 fixed bottom-0 md:sticky md:top-0 md:h-screen z-50 border-t md:border-t-0 md:border-r border-gray-800 shadow-2xl shrink-0">
        <div className="hidden md:block mb-8">
          <h2 className="text-xl font-bold text-[#FF9F1C] tracking-wider">USDX NETWORK</h2>
          <p className="text-xs text-gray-400 mt-1">Premium Token Exchange</p>
        </div>
        
        <nav className="flex flex-row md:flex-col gap-2 w-full justify-around md:justify-start overflow-x-auto md:overflow-visible">
          {["dashboard", "membership", "rewards", "referral", "profile", "admin"].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 rounded-xl font-semibold text-sm min-w-max text-center transition-all capitalize w-full ${activeTab === tab ? "bg-[#FF9F1C] text-black shadow-md shadow-[#FF9F1C]/20" : "text-gray-400 hover:text-white hover:bg-gray-800/30"} ${tab === "admin" ? "border border-red-500/30 text-red-400 hover:bg-red-950/20" : ""}`}
            >
              {tab === "admin" ? "🔒 Admin Panel" : tab}
            </button>
          ))}
        </nav>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto overflow-y-auto space-y-6">
        
        {/* GLOBAL HEADER HEADER */}
        <div className="bg-[#1F2833]/40 border border-gray-800 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF9F1C] to-amber-500 flex items-center justify-center font-bold text-black text-lg shadow-lg">
              {profile.name.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-wide text-white">{profile.username}</h4>
              <p className="text-xs text-[#FF9F1C] font-medium flex items-center gap-1">★ {profile.kycStatus}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#1F2833] px-4 py-2 rounded-xl border border-green-500/30 shadow-inner">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-green-400 font-semibold tracking-wide">Connected</span>
          </div>
        </div>

        {/* ================= VIEW: DASHBOARD ================= */}
        {activeTab === "dashboard" && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">User Dashboard</h1>
              <p className="text-sm text-gray-400 mt-1 font-light">Overview of your real-time ecosystem capital asset standing.</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 relative group transition-all">
                <div className="flex justify-between items-start">
                  <p className="text-sm text-gray-400 mb-1">Total Available Balance</p>
                  <span className="text-[10px] font-bold bg-green-500/10 text-green-400 px-2 py-0.5 rounded border border-green-500/20">Liquid</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#FF9F1C] mt-1">${availableBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h3>
                <span className="text-xs text-green-400 block mt-2">▲ +14.5% up from last week</span>
              </div>

              <div className={`p-6 rounded-2xl border transition-all ${stakedAssets > 0 ? 'bg-[#1F2833]/50 border-gray-800' : 'bg-red-950/10 border-red-900/30'}`}>
                <div className="flex justify-between items-start">
                  <p className="text-sm text-gray-400 mb-1">Active Staked Assets</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${stakedAssets > 0 ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-gray-800 text-gray-400 border-gray-700'}`}>
                    ● {stakedAssets > 0 ? "Active (Yielding)" : "Inactive"}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">${stakedAssets.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h3>
                <span className="text-xs text-gray-500 block mt-2">🔒 Base Lockup Protocol active</span>
              </div>

              <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-orange-500/10 flex flex-col justify-between gap-2">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Total Accrued Earnings</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-green-400">${(stakingRewards + referralRewards).toFixed(2)}</h3>
                </div>
                <p className="text-[11px] text-gray-500">Go to Rewards tab to process dynamic claim.</p>
              </div>
            </div>

            {/* Graph + Terminals Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-[#1F2833]/20 border border-gray-800 p-6 rounded-2xl lg:col-span-2 flex flex-col justify-between">
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

              {/* Right Sidebar Multi-Tab Form Console */}
              <div className="bg-gradient-to-b from-[#1F2833]/90 to-[#1F2833]/30 border border-gray-800 p-6 rounded-2xl flex flex-col justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Staking Core Engine</h4>
                  <form onSubmit={handleStake} className="flex gap-2">
                    <input 
                      type="number" 
                      placeholder="Amount to Stake"
                      value={stakeInput}
                      onChange={(e) => setStakeInput(e.target.value)}
                      className="w-full bg-black/40 border border-gray-800 rounded-xl px-3 py-2 text-xs outline-none text-[#FF9F1C] font-mono"
                    />
                    <button type="submit" className="bg-[#FF9F1C] text-black font-extrabold px-4 py-2 rounded-xl text-xs whitespace-nowrap">Stake</button>
                  </form>
                </div>

                <hr className="border-gray-800" />

                <div className="space-y-3">
                  <div className="flex bg-black/40 p-1 rounded-xl border border-gray-800 justify-between text-center">
                    {["withdraw", "send", "receive"].map((wTab) => (
                      <button
                        key={wTab}
                        onClick={() => setActiveWalletTab(wTab)}
                        className={`flex-1 text-[11px] py-1.5 font-bold rounded-lg transition-all capitalize ${activeWalletTab === wTab ? 'bg-[#1F2833] text-[#FF9F1C]' : 'text-gray-400'}`}
                      >
                        {wTab}
                      </button>
                    ))}
                  </div>

                  {activeWalletTab === "withdraw" && (
                    <form onSubmit={handleWithdraw} className="space-y-2">
                      <input 
                        type="number" 
                        required
                        placeholder="Amount to Withdraw"
                        value={withdrawInput}
                        onChange={(e) => setWithdrawInput(e.target.value)}
                        className="w-full bg-black/20 border border-gray-800 rounded-xl px-3 py-2 text-xs outline-none font-mono text-white"
                      />
                      <button type="submit" className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 rounded-xl text-xs">Confirm Withdrawal</button>
                    </form>
                  )}

                  {activeWalletTab === "send" && (
                    <form onSubmit={handleSendTokens} className="space-y-2">
                      <input 
                        type="text" 
                        required
                        placeholder="Recipient Address (0x...)"
                        value={sendAddress}
                        onChange={(e) => setSendAddress(e.target.value)}
                        className="w-full bg-black/20 border border-gray-800 rounded-xl px-3 py-2 text-xs outline-none font-mono text-white"
                      />
                      <input 
                        type="number" 
                        required
                        placeholder="Amount USDX"
                        value={sendAmount}
                        onChange={(e) => setSendAmount(e.target.value)}
                        className="w-full bg-black/20 border border-gray-800 rounded-xl px-3 py-2 text-xs outline-none font-mono text-white"
                      />
                      <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 rounded-xl text-xs">Broadcast Assets</button>
                    </form>
                  )}

                  {activeWalletTab === "receive" && (
                    <div className="bg-black/20 p-3 rounded-xl border border-gray-800 text-center space-y-2">
                      <div className="w-16 h-16 bg-white mx-auto rounded flex items-center justify-center p-1">
                        <div className="w-full h-full bg-gradient-to-br from-black to-gray-800 rounded"></div>
                      </div>
                      <p className="text-[10px] font-mono text-gray-400 truncate select-all">{profile.wallet}</p>
                      <button 
                        type="button"
                        onClick={() => { navigator.clipboard.writeText(profile.wallet); alert("Wallet copied!"); }}
                        className="text-[10px] font-bold text-[#FF9F1C] bg-[#FF9F1C]/10 px-2 py-1 rounded border border-[#FF9F1C]/20 w-full"
                      >
                        Copy Address Link
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* History Table */}
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
                          <span className={`text-xs px-2.5 py-1 rounded-full border ${txn.status === "Waiting" ? "bg-amber-500/10 text-amber-400 border-amber-500/20 animate-pulse" : "bg-green-500/10 text-green-400 border-green-500/20"}`}>
                            {txn.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= VIEW: MEMBERSHIP ================= */}
        {activeTab === "membership" && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1">Membership Plans</h1>
              <p className="text-sm text-gray-400">Choose your premium staking tier to boost overall network pool weight.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {[
                { name: "Bronze Plan", price: "100 USDX", yield: "5% APY Daily", features: ["✔ 2 Team Members Allowed", "✔ Email Support"] },
                { name: "Silver Plan", price: "500 USDX", yield: "10% APY Daily", features: ["✔ 10 Team Members Allowed", "✔ 24/7 Priority Support", "✔ Advanced Analytics"], highlight: true },
                { name: "Gold Plan", price: "2,000 USDX", yield: "15% APY Daily", features: ["✔ Unlimited Members", "✔ VIP Personal Account Executive"] }
              ].map((plan, i) => (
                <div key={i} className={`p-6 rounded-2xl flex flex-col justify-between relative shadow-xl ${plan.highlight ? 'bg-[#1F2833]/80 border-2 border-[#FF9F1C]' : 'bg-[#1F2833]/40 border border-gray-800'}`}>
                  {plan.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF9F1C] text-black text-xs font-bold px-3 py-1 rounded-full framework tracking-wider">MOST POPULAR</span>}
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-200 mt-2">{plan.name}</h3>
                    <span className="text-3xl font-extrabold text-[#FF9F1C]">{plan.price}</span>
                    <div className="mt-4 inline-block bg-[#FF9F1C]/10 text-[#FF9F1C] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#FF9F1C]/20">{plan.yield}</div>
                    <ul className="space-y-3 text-sm text-gray-400 mt-6">
                      {plan.features.map((f, fi) => <li key={fi}>{f}</li>)}
                    </ul>
                  </div>
                  <button 
                    onClick={() => openActivationModal(plan.name, plan.price)}
                    className={`w-full font-bold py-3 rounded-xl transition-all mt-8 ${plan.highlight ? 'bg-[#FF9F1C] text-black hover:bg-amber-500' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
                  >
                    Activate Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= VIEW: REWARDS ================= */}
        {activeTab === "rewards" && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1">Rewards Panel</h1>
              <p className="text-sm text-gray-400">Claim your split network rewards immediately via smart execution.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1F2833]/40 border border-gray-800 p-6 rounded-2xl flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Staking Core Yield</h3>
                  <p className="text-xs text-gray-400 mt-1">Accrued yield processing from committed liquidity.</p>
                  <h2 className="text-3xl font-extrabold text-green-400 mt-4">${stakingRewards.toFixed(2)}</h2>
                </div>
                <button onClick={() => handleClaim("staking")} className="w-full bg-green-500 hover:bg-green-600 text-black font-extrabold py-3 rounded-xl text-xs tracking-wider">
                  CLAIM STAKING YIELD
                </button>
              </div>

              <div className="bg-[#1F2833]/40 border border-gray-800 p-6 rounded-2xl flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Referral Affiliate Commissions</h3>
                  <p className="text-xs text-gray-400 mt-1">Earnings fetched from Level 1 and Level 2 tier invites.</p>
                  <h2 className="text-3xl font-extrabold text-green-400 mt-4">${referralRewards.toFixed(2)}</h2>
                </div>
                <button onClick={() => handleClaim("referral")} className="w-full bg-[#FF9F1C] hover:bg-[#e08b14] text-black font-extrabold py-3 rounded-xl text-xs tracking-wider">
                  CLAIM COMMISSIONS NOW
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= VIEW: REFERRAL ================= */}
        {activeTab === "referral" && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1">Referral Architecture</h1>
              <p className="text-sm text-gray-400">Invite connections to earn massive tiered downstream commission distribution.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#1F2833]/50 border border-gray-800 p-4 rounded-xl">
                <p className="text-xs text-gray-400">Total Network Invites</p>
                <h4 className="text-xl font-bold text-white mt-1">24 Members</h4>
              </div>
              <div className="bg-[#1F2833]/50 border border-gray-800 p-4 rounded-xl">
                <p className="text-xs text-gray-400">Level 1 Direct (10%)</p>
                <h4 className="text-xl font-bold text-[#FF9F1C] mt-1">16 Active</h4>
              </div>
              <div className="bg-[#1F2833]/50 border border-gray-800 p-4 rounded-xl">
                <p className="text-xs text-gray-400">Level 2 Indirect (5%)</p>
                <h4 className="text-xl font-bold text-blue-400 mt-1">8 Active</h4>
              </div>
            </div>

            <div className="bg-[#1F2833]/50 p-6 rounded-2xl border border-gray-800 max-w-2xl space-y-3">
              <h3 className="text-xs font-bold text-[#FF9F1C] uppercase tracking-wider">Your Master Affiliate Reference Link</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="text" 
                  readOnly 
                  value="https://usdx.network/ref?id=90812" 
                  className="bg-black/40 border border-gray-800 rounded-xl px-4 py-3 flex-1 text-xs text-gray-300 outline-none font-mono select-all"
                />
                <button type="button" onClick={() => { navigator.clipboard.writeText("https://usdx.network/ref?id=90812"); alert("Link Copied!"); }} className="bg-[#FF9F1C] text-black font-extrabold px-6 py-3 rounded-xl text-xs tracking-wider">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= VIEW: PROFILE SECTION ================= */}
        {activeTab === "profile" && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-1">Account Profile Terminal</h1>
              <p className="text-sm text-gray-400">Manage identity configurations and link secure nodes.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              <div className="bg-[#1F2833]/40 border border-gray-800 rounded-2xl p-6 text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#FF9F1C] to-orange-500 mx-auto flex items-center justify-center font-black text-black text-3xl shadow-xl">
                  {profile.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{profile.name}</h3>
                  <p className="text-xs text-gray-400 font-mono">@{profile.username}</p>
                </div>
                <div className="bg-black/30 rounded-xl p-3 border border-gray-800 text-left space-y-1">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Security State</p>
                  <p className="text-xs text-green-400 font-medium">● Account Secured (High)</p>
                </div>
              </div>

              <div className="bg-[#1F2833]/40 border border-gray-800 rounded-2xl p-6 lg:col-span-2">
                <h3 className="text-sm font-bold uppercase text-[#FF9F1C] tracking-wide mb-4">Edit Profile Credentials</h3>
                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] text-gray-400 font-bold uppercase">Display Full Name</label>
                      <input type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] text-gray-400 font-bold uppercase">Linked Email String</label>
                      <input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] text-gray-400 font-bold uppercase">Phone Vector</label>
                      <input type="text" value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] text-gray-400 font-bold uppercase">Node Wallet Address</label>
                      <input type="text" value={profile.wallet} onChange={(e) => setProfile({ ...profile, wallet: e.target.value })} className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-gray-400 font-mono outline-none" />
                    </div>
                  </div>
                  <button type="submit" className="bg-[#FF9F1C] text-black font-extrabold px-6 py-2.5 rounded-xl text-xs tracking-wider">SAVE CHANGES</button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ================= VIEW: 🔒 ADMIN PANEL ================= */}
        {activeTab === "admin" && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-red-400 tracking-tight">System Admin Console</h1>
              <p className="text-sm text-gray-400 mt-1">Manage global user accounts, update statuses, and verify pending pool actions.</p>
            </div>

            {/* Admin Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-xl">
                <p className="text-xs text-gray-400">Total Managed Users</p>
                <h4 className="text-2xl font-bold text-white mt-1">{adminUsers.length} Nodes</h4>
              </div>
              <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-xl">
                <p className="text-xs text-gray-400">System Core Volume</p>
                <h4 className="text-2xl font-bold text-[#FF9F1C] mt-1">$59,021.47</h4>
              </div>
              <div className="bg-red-950/20 border border-red-900/30 p-4 rounded-xl">
                <p className="text-xs text-gray-400">Pending Actions</p>
                <h4 className="text-2xl font-bold text-red-400 mt-1">
                  {transactions.filter(t => t.status === "Waiting").length} Requests
                </h4>
              </div>
            </div>

            {/* Pending Requests Section */}
            <div className="bg-[#1F2833]/50 rounded-2xl border border-gray-800 p-4 md:p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4 text-red-400">Pending Verification Requests</h2>
              <div className="overflow-x-auto w-full rounded-xl">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-800 text-xs text-gray-400 uppercase tracking-wider bg-[#1F2833]/50">
                      <th className="py-3 px-4">Txn ID</th>
                      <th className="py-3 px-4">Type</th>
                      <th className="py-3 px-4">Amount</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-800/40">
                    {transactions.map((txn, index) => (
                      <tr key={index} className="hover:bg-gray-900/30 transition-colors">
                        <td className="py-4 px-4 text-[#FF9F1C] font-mono">{txn.id}</td>
                        <td className="py-4 px-4">{txn.type}</td>
                        <td className="py-4 px-4 font-semibold text-white">{txn.amount}</td>
                        <td className="py-4 px-4">
                          <span className={`text-xs px-2.5 py-1 rounded-full border ${txn.status === "Waiting" ? "bg-amber-500/10 text-amber-400 border-amber-500/20 animate-pulse" : "bg-green-500/10 text-green-400 border-green-500/20"}`}>
                            {txn.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          {txn.status === "Waiting" ? (
                            <button 
                              onClick={() => handleApproveTxn(txn.id)}
                              className="bg-green-500 hover:bg-green-600 text-black font-bold px-3 py-1 rounded-lg text-xs"
                            >
                              Approve
                            </button>
                          ) : (
                            <span className="text-gray-500 text-xs">Processed</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Registered Users Section */}
            <div className="bg-[#1F2833]/50 rounded-2xl border border-gray-800 p-4 md:p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4">Registered Network Accounts</h2>
              <div className="overflow-x-auto w-full rounded-xl">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-800 text-xs text-gray-400 uppercase tracking-wider bg-[#1F2833]/50">
                      <th className="py-3 px-4">Username</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">Liquid Balance</th>
                      <th className="py-3 px-4">KYC Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-800/40">
                    {adminUsers.map((user, idx) => (
                      <tr key={idx} className="hover:bg-gray-900/30 transition-colors">
                        <td className="py-4 px-4 font-bold text-[#FF9F1C]">{user.username}</td>
                        <td className="py-4 px-4 text-gray-300">{user.email}</td>
                        <td className="py-4 px-4 font-mono">{user.balance}</td>
                        <td className="py-4 px-4">
                          <span className="text-xs bg-gray-800 px-2 py-1 rounded text-white border border-gray-700">
                            {user.kyc}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* GLOBAL POPUP MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-[100]">
          <div className="bg-[#1F2833] border border-gray-800 rounded-3xl p-6 w-full max-w-md space-y-4">
            <h3 className="text-lg font-bold text-[#FF9F1C]">Activate {selectedPlan.name}</h3>
            <form onSubmit={handleActivatePlanSubmit} className="space-y-4">
              <input type="text" required placeholder="0x..." value={userWallet} onChange={(e) => setUserWallet(e.target.value)} className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-2.5 text-sm outline-none text-white font-mono" />
              <input type="text" required placeholder="Paste hash" value={txnHash} onChange={(e) => setTxnHash(e.target.value)} className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-2.5 text-sm outline-none text-white font-mono" />
              <div className="flex gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 bg-gray-800 text-white py-2.5 rounded-xl">Cancel</button>
                <button type="submit" className="flex-1 bg-[#FF9F1C] text-black font-bold py-2.5 rounded-xl">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
