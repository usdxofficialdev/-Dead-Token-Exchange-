"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase"; // Supabase client import
import LoginWallet from "../components/LoginWallet"; 

export default function Dashboard() {
  const router = useRouter();

  const [username, setUsername] = useState("Loading...");
  const [activeMembership, setActiveMembership] = useState("Loading...");
  const [mainBalance, setMainBalance] = useState(0);
  const [totalStaked, setTotalStaked] = useState(0);
  const [totalRewards, setTotalRewards] = useState(0);
  const [recentLogs, setRecentLogs] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("stake");

  // Fetch data from Supabase
  useEffect(() => {
    async function fetchData() {
      // 1. Fetch Profile
      const { data: profile } = await supabase.from('user_profiles').select('*').single();
      if (profile) {
        setUsername(profile.username);
        setActiveMembership(profile.grade);
      }

      // 2. Fetch Balances
      const { data: balance } = await supabase.from('user_dashboard_balances').select('*').single();
      if (balance) {
        setMainBalance(balance.main_balance);
        setTotalStaked(balance.total_staked);
        setTotalRewards(balance.rewards);
      }

      // 3. Fetch History
      const { data: logs } = await supabase.from('admin_rewards_history').select('*').order('date', { ascending: false });
      if (logs) setRecentLogs(logs.slice(0, 4));
    }
    fetchData();
  }, []);

  const handleExecuteStaking = async (e: React.FormEvent) => {
    e.preventDefault();
    // Supabase logic for update
    const newMain = mainBalance - 50; // Example math
    const { error } = await supabase
      .from('user_dashboard_balances')
      .update({ main_balance: newMain })
      .eq('id', 1);

    if (!error) {
      setMainBalance(newMain);
      alert("Staking protocol executed via Supabase!");
    }
  };

  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: true },
    { name: "Membership Plans", route: "/membership", active: false },
    { name: "Rewards History", route: "/rewards", active: false },
    { name: "Referral Program", route: "/referral", active: false },
    { name: "Leaderboard", route: "/leaderboard", active: false },
    { name: "Profile Settings", route: "/profile", active: false },
  ];

  return (
    <div className="flex min-h-screen bg-[#07080B] text-white font-sans">
      {/* SIDEBAR NAVIGATION - MOBILE UI FIX: Add 'hidden md:flex' and handle with state if needed */}
      <aside className="w-64 border-r border-[#161920] bg-[#0D0F12] p-6 hidden md:flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-black text-amber-500 tracking-wider">USDX NETWORK</h1>
          <nav className="space-y-1.5 mt-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => router.push(item.route)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold ${item.active ? "bg-amber-500 text-black" : "text-gray-400 hover:bg-[#15181F]"}`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <header className="bg-[#0E1116] border border-[#161920] rounded-2xl p-4 flex items-center justify-between mb-8 shadow-xl">
           <h2 className="text-md font-bold">{username}</h2>
           <LoginWallet />
        </header>

        {/* FINANCIAL HUD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <div className="bg-[#0E1116] border border-[#161920] p-6 rounded-2xl">
            <span className="text-xs text-gray-500">Total Available Balance</span>
            <div className="text-3xl font-black text-amber-500">${mainBalance.toFixed(2)}</div>
          </div>
          {/* Add other counters similarly */}
        </div>

        {/* ... baaki ka UI aapke purane code jaisa hi rahega ... */}
      </main>
    </div>
  );
}
