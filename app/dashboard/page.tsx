"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import AppLayout from "../components/AppLayout";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const { data: userData, error } = await supabase
          .from('usdx_dashboard')
          .select('*')
          .single();
        
        if (userData) setData(userData);
      } catch (err) {
        console.log("Data load error:", err);
      }
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) 
    return (
      <AppLayout title="Dashboard" description="Monitor your account performance">
        <div className="text-center py-12">
          <p className="text-gray-400">Loading Protocol...</p>
        </div>
      </AppLayout>
    );

  return (
    <AppLayout 
      title="Dashboard" 
      description="Monitor your account performance and earnings"
    >
      {/* Financial Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Total Balance Card */}
        <div className="bg-[#121218] p-6 rounded-lg border border-[#2A2A35] hover:border-amber-500/30 transition-all">
          <p className="text-xs uppercase text-gray-500 font-semibold mb-2">Total Balance</p>
          <h2 className="text-3xl md:text-4xl font-black text-amber-500 mb-4">
            ${data?.main_balance || 0}
          </h2>
          <p className="text-xs text-gray-400">Available for staking</p>
        </div>

        {/* Total Staked Card */}
        <div className="bg-[#121218] p-6 rounded-lg border border-[#2A2A35] hover:border-amber-500/30 transition-all">
          <p className="text-xs uppercase text-gray-500 font-semibold mb-2">Total Staked</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            ${data?.total_staked || 0}
          </h2>
          <p className="text-xs text-gray-400">Locked in pools</p>
        </div>

        {/* Pending Rewards Card */}
        <div className="bg-[#121218] p-6 rounded-lg border border-[#2A2A35] hover:border-amber-500/30 transition-all">
          <p className="text-xs uppercase text-gray-500 font-semibold mb-2">Pending Rewards</p>
          <h2 className="text-3xl md:text-4xl font-black text-emerald-400 mb-4">
            ${data?.pending_rewards || 0}
          </h2>
          <p className="text-xs text-gray-400">Ready to claim</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-[#121218] p-6 rounded-lg border border-[#2A2A35] mb-8">
        <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="bg-amber-500 text-black font-bold py-3 rounded-lg hover:bg-amber-600 transition-all">
            Stake Now
          </button>
          <button className="border border-amber-500 text-amber-500 font-bold py-3 rounded-lg hover:bg-amber-500/10 transition-all">
            Claim Rewards
          </button>
          <button className="border border-[#2A2A35] text-white font-bold py-3 rounded-lg hover:bg-[#1A1A24] transition-all">
            View History
          </button>
          <button className="border border-[#2A2A35] text-white font-bold py-3 rounded-lg hover:bg-[#1A1A24] transition-all">
            Settings
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* APY Info */}
        <div className="bg-[#121218] p-6 rounded-lg border border-[#2A2A35]">
          <h3 className="text-lg font-bold text-amber-500 mb-4">Staking APY</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Base APY:</span>
              <span className="text-white font-bold">5.0%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Bonus APY:</span>
              <span className="text-emerald-400 font-bold">+2.5%</span>
            </div>
            <div className="border-t border-[#2A2A35] pt-3 flex justify-between items-center">
              <span className="text-gray-400 font-semibold">Total APY:</span>
              <span className="text-amber-500 font-black text-lg">7.5%</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#121218] p-6 rounded-lg border border-[#2A2A35]">
          <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Last Claim:</span>
              <span className="text-white">2 hours ago</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Last Stake:</span>
              <span className="text-white">1 day ago</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Account Status:</span>
              <span className="text-emerald-400 font-bold">Active</span>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
