"use client";
import React, { useState } from "react";
import AppLayout from "../components/AppLayout";

export default function Rewards() {
  const [isMember, setIsMember] = useState(true);
  const [rewards, setRewards] = useState("342.80");
  const [claimed, setClaimed] = useState("1250.00");

  return (
    <AppLayout title="Rewards" description="Manage rewards">
      <div className={`p-6 rounded-lg border mb-8 ${isMember ? "bg-emerald-500/10" : "bg-yellow-500/10"}`}>
        <h3 className="text-lg font-bold text-amber-500">{isMember ? "✅ Member" : "⚠️ Non-Member"}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#121218] border border-[#2A2A35] p-6 rounded-lg">
          <p className="text-xs text-gray-500 mb-2">Claimable</p>
          <h2 className="text-3xl font-black text-amber-500">{rewards}</h2>
          <button className="w-full bg-amber-500 text-black font-bold py-2 mt-4 rounded-lg">Claim</button>
        </div>
        <div className="bg-[#121218] border border-[#2A2A35] p-6 rounded-lg">
          <p className="text-xs text-gray-500 mb-2">Total Claimed</p>
          <h2 className="text-3xl font-black text-emerald-400">{claimed}</h2>
        </div>
        <div className="bg-[#121218] border border-[#2A2A35] p-6 rounded-lg">
          <p className="text-xs text-gray-500 mb-2">APY</p>
          <h2 className="text-3xl font-black text-blue-400">15%</h2>
        </div>
      </div>

      {isMember && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#121218] border border-[#2A2A35] p-6 rounded-lg">
            <h3 className="font-bold text-amber-500 mb-4">Withdraw</h3>
            <input type="number" placeholder="Amount" className="w-full bg-black/40 border border-[#2A2A35] rounded px-3 py-2 text-white mb-2 text-sm" />
            <input type="text" placeholder="Address" className="w-full bg-black/40 border border-[#2A2A35] rounded px-3 py-2 text-white text-sm" />
            <button className="w-full bg-emerald-500 text-black font-bold py-2 mt-4 rounded-lg">Submit</button>
          </div>
          <div className="bg-[#121218] border border-[#2A2A35] p-6 rounded-lg">
            <h3 className="font-bold text-blue-400 mb-4">Transfer</h3>
            <input type="number" placeholder="Amount" className="w-full bg-black/40 border border-[#2A2A35] rounded px-3 py-2 text-white mb-2 text-sm" />
            <input type="text" placeholder="Address" className="w-full bg-black/40 border border-[#2A2A35] rounded px-3 py-2 text-white text-sm" />
            <button className="w-full bg-blue-500 text-black font-bold py-2 mt-4 rounded-lg">Send</button>
          </div>
        </div>
      )}
    </AppLayout>
  );
}
