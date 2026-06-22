"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginWallet from "../components/LoginWallet";

export default function MembershipPlans() {
  const router = useRouter();

  // 1. DYNAMIC PLANS MATRIX (10 Fully Editable Options Controlled via Admin)
  const [plans, setPlans] = useState([
    { id: 1, name: "Starter Tier", price: 10, currency: "USDX", features: ["Basic Node Access", "5% APY Staking Bracket", "Standard Ticket Support"], popular: false },
    { id: 2, name: "Micro Node", price: 50, currency: "USDX", features: ["Priority Node Access", "6% APY Staking Bracket", "Community Chat Access"], popular: false },
    { id: 3, name: "Advanced Node", price: 100, currency: "USDX", features: ["Validator Access (Level 1)", "8% APY Staking Bracket", "24/7 Support Line"], popular: false },
    { id: 4, name: "Pro Validator", price: 200, currency: "USDX", features: ["Validator Access (Level 2)", "10% APY Staking Bracket", "Zero Gas Fee Mints"], popular: true }, // Highlighted
    { id: 5, name: "Silver Node", price: 500, currency: "USDX", features: ["Exclusive Liquid Pools", "12% APY Staking Bracket", "Direct Discord Dev Channel"], popular: false },
    { id: 6, name: "Gold Node", price: 1000, currency: "USDX", features: ["Maching Bonuses Activated", "15% APY Staking Bracket", "Personal Account Executive"], popular: false },
    { id: 7, name: "Platinum Cluster", price: 2500, currency: "USDX", features: ["Custom Pool Generation", "16.5% APY Staking Bracket", "Early Governance Voting Rights"], popular: false },
    { id: 8, name: "Diamond Node", price: 5000, currency: "USDX", features: ["Unlimited Node Spawning", "18% APY Staking Bracket", "VIP Real-World Event Invites"], popular: false },
    { id: 9, name: "Alpha Whale", price: 10000, currency: "USDX", features: ["Institutional Liquidity Access", "22% APY Staking Bracket", "Direct Developer Voice Calls"], popular: false },
    { id: 10, name: "Genesis Foundation", price: 25000, currency: "USDX", features: ["Full System Revenue Share", "25% APY Staking Bracket", "Core Network Board Seat"], popular: false },
  ]);

  // 2. ADMIN DATABASE SYNC ON LOAD
  useEffect(() => {
    const adminPlans = localStorage.getItem("admin_membership_plans");
    if (adminPlans) {
      setPlans(JSON.parse(adminPlans));
    } else {
      // First time initialization in the central database ledger
      localStorage.setItem("admin_membership_plans", JSON.stringify(plans));
    }
  });

  // 3. BUY ACTION LOGIC (Deducts from Dashboard Main Balance)
  const handlePurchasePlan = (plan: any) => {
    const savedDashboardBalances = localStorage.getItem("user_dashboard_balances") || '{"mainBalance":"5000.00","totalStaked":"15000.00"}';
    const parsedDashboard = JSON.parse(savedDashboardBalances);
    const mainBalance = parseFloat(parsedDashboard.mainBalance);

    if (mainBalance < plan.price) {
      alert(`Insufficient funds! This membership plan costs ${plan.price} ${plan.currency}. Please claim rewards or deposit assets.`);
      return;
    }

    const confirmPurchase = window.confirm(`Are you sure you want to activate the ${plan.name} for ${plan.price} ${plan.currency}?`);
    if (!confirmPurchase) return;

    // Mathematical Deduction
    const newMainBalance = (mainBalance - plan.price).toFixed(2);

    // Commit new balance state back to Dashboard Matrix
    localStorage.setItem("user_dashboard_balances", JSON.stringify({
      mainBalance: newMainBalance,
      totalStaked: parsedDashboard.totalStaked
    }));

    // Append OUT Entry Log directly into Rewards/Audit Logs History for Admin Panel view
    const existingLogs = localStorage.getItem("admin_rewards_history_list") || "[]";
    const parsedLogs = JSON.parse(existingLogs);
    const newMembershipLog = {
      date: new Date().toISOString().split('T')[0],
      source: `Purchased ${plan.name}`,
      amount: `-${plan.price.toFixed(2)} ${plan.currency}`,
      type: "OUT",
      status: "Confirmed"
    };
    localStorage.setItem("admin_rewards_history_list", JSON.stringify([newMembershipLog, ...parsedLogs]));

    alert(`Congratulations! ${plan.name} has been successfully provisioned. Your new balance is ${newMainBalance} ${plan.currency}.`);
  };

  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: false },
    { name: "Membership Plans", route: "/membership", active: true },
    { name: "Rewards History", route: "/rewards", active: false },
    { name: "Referral Program", route: "/referral", active: false },
    { name: "Leaderboard", route: "/leaderboard", active: false },
    { name: "Profile Settings", route: "/profile", active: false },
    { name: "Admin Panel", route: "/admin", active: false },
  ];

  return (
    <div className="flex min-h-screen bg-[#0B0B0F] text-white">
      
      {/* SIDEBAR NAVIGATION */}
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

      {/* CORE FRAME PANEL */}
      <main className="flex-1 p-8">
        <header className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Premium Network Memberships</h1>
            <p className="text-sm text-gray-400">Unlock custom high-yield validation brackets, premium tools, and priority cluster access slots.</p>
          </div>
          <LoginWallet />
        </header>

        {/* 10 PLANS GRID SYSTEM */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-[#121218] rounded-2xl p-6 border transition-all flex flex-col justify-between hover:scale-[1.02] ${
                plan.popular 
                  ? "border-amber-500 shadow-xl shadow-amber-500/[0.03] bg-gradient-to-b from-amber-500/[0.02] to-transparent" 
                  : "border-gray-800 hover:border-gray-700"
              }`}
            >
              <div>
                {/* Popular Flag Badge */}
                {plan.popular && (
                  <span className="inline-block text-[10px] uppercase font-black bg-amber-500 text-black px-2 py-0.5 rounded-md tracking-wider mb-3">
                    Most Popular
                  </span>
                )}
                
                <h3 className="text-lg font-bold text-gray-100">{plan.name}</h3>
                
                {/* Price Display */}
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-black text-white tracking-tight">
                    {plan.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-amber-500 font-bold ml-1 uppercase">
                    {plan.currency}
                  </span>
                </div>

                {/* Features Specifications Array List */}
                <ul className="space-y-2.5 border-t border-gray-800/60 pt-4 mb-6">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-xs text-gray-400 flex items-start gap-2 leading-relaxed">
                      <span className="text-amber-500 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Purchase Button */}
              <button
                onClick={() => handlePurchasePlan(plan)}
                className={`w-full py-3 rounded-xl text-xs font-extrabold tracking-wide transition-all active:scale-[0.98] ${
                  plan.popular 
                    ? "bg-amber-500 text-black hover:bg-amber-600 shadow-md shadow-amber-500/10" 
                    : "bg-black/40 text-gray-300 border border-gray-800 hover:bg-[#1A1A24] hover:text-white"
                }`}
              >
                Purchase Membership Slot
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
