"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import LoginWallet from "../components/LoginWallet";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      // Supabase se data fetch kar rahe hain
      const { data: userData, error } = await supabase
        .from('usdx_dashboard')
        .select('*')
        .single();
      
      if (userData) setData(userData);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading) return <div className="text-white p-10">Loading Protocol...</div>;

  return (
    <div className="flex min-h-screen bg-[#07080B] text-white">
      {/* Sidebar wahi purani design */}
      <aside className="w-64 border-r border-[#161920] bg-[#0D0F12] p-6 hidden md:flex flex-col">
         <h1 className="text-xl font-black text-amber-500">USDX NETWORK</h1>
         {/* Menu items... */}
      </aside>

      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black">Dashboard</h1>
          <LoginWallet />
        </header>

        {/* Financial HUD connected to Supabase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0E1116] p-6 rounded-2xl border border-[#161920]">
            <p className="text-gray-500 text-xs">Total Balance</p>
            <h2 className="text-3xl font-black text-amber-500">${data?.main_balance || 0}</h2>
          </div>
          <div className="bg-[#0E1116] p-6 rounded-2xl border border-[#161920]">
            <p className="text-gray-500 text-xs">Total Staked</p>
            <h2 className="text-3xl font-black text-white">${data?.total_staked || 0}</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
